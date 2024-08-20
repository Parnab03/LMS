import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = (props) => {
    const [value, setValue] = useState("");
    const [preview, setPreview] = useState("");

    const toolbarOptions = [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ size: ["small", false, "large", "huge"] }], // custom dropdown

        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["link", "image", "video"],
        ["blockquote", "code-block"],

        // [{ header: 1 }, { header: 2 }], // custom button values
        [
            { list: "ordered" },
            { list: "bullet" },
            { list: "check" },
            { align: [] },
        ],
        [{ direction: "rtl" }], // text direction
        ["formula", { script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme

        ["clean"], // remove formatting button
    ];

    const module = {
        toolbar: toolbarOptions,
    };

    const handleTextChange = (text) => {
        setValue(text);
        setPreview(text);
        props.onPreviewChange(text); // pass the new text to the parent component
    };

    return (
        <div>
            <ReactQuill
                modules={module}
                theme="snow"
                value={value}
                onChange={handleTextChange} // <--- Changed to onChange
                style={{}}
            />
        </div>
    );
};

export default TextEditor;
