"use client";
import React, { useState } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FaChevronRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

export default function Section_Form() {
  const [editorData, setEditorData] = useState("");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };

  return (
    <div>
      <div className="flex row gap-2 mx-4 my-4 text-blue-500">
        <Link href={"/profile"}>
          <h1 className="flex gap-2 ">
            <FaHome className="text-xl" /> Home{" "}
            <FaChevronRight className="my-1" />
          </h1>
        </Link>
        <h1 className="flex gap-2">
          Pages <FaChevronRight className="my-1" />
        </h1>
        <h1>Add Section</h1>
      </div>
      <div className="flex mx-6 my-6 text-blue-500">
        <h1 className="flex">Add Section</h1>
      </div>
      <div className="py-4">
        <div>
          <h1>Section Title:</h1>
          <input type="text" required="true" className="w-full border-2 my-2" />
        </div>
        <div>
          <h1>Title:</h1>
          <input type="text" required="true" className="w-full border-2 my-2" />
        </div>
        <div>
          <h1>Sub-Title:</h1>
          <input type="text" required="true" className="w-full border-2 my-2" />
        </div>
        {/* <div>
          <h1>Description</h1>
          <CKEditor
            editor={ClassicEditor}
            data={editorData}
            onChange={handleEditorChange}
          />
        </div> */}
        <div className="mt-2">
          <input type="checkbox" id="scales" name="scales" />
          <label className="mx-2">Activate Status</label>
        </div>
      </div>
      <button className="bg-green-400 text-white my-4 text-2xl p-2 rounded-md">
        Submit
      </button>
    </div>
  );
}
