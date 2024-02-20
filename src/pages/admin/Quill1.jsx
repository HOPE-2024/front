import styled from "styled-components";
import ReactQuill from "react-quill";
import { useState, useEffect } from "react";
import "quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize";

// Quill 모듈에서 ImageResize 모듈을 등록
if (typeof window !== "undefined") {
    const Quill = require("quill");
    Quill.register("modules/imageResize", ImageResize);
}

const QuillTextCss = styled.div`
  width: 100%;
  height: auto;
`;


export const Quill1 = ({ substance, setSubstance }) => {


    useEffect(() => {
        // Quill 모듈에서 ImageResize 모듈을 등록
        if (typeof window !== "undefined") {
            const Quill = require("quill");
            Quill.register("modules/imageResize", ImageResize);
        }
    }, []);

    const modules = {
        toolbar: {
            container: [
                [{ header: [1, 2, false] }],
                ["bold", "italic", "underline", "strike"],
                [{ color: [] }, { background: [] }],
                [{ font: [] }],
                [{ align: [] }],
                ["link", "image", "video"],
                ["blockquote", "code-block"],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }],
                ["clean"],
            ],
        },
        imageResize: {},
    };


    return (
        <QuillTextCss>

            <ReactQuill
                style={{ width: "100%", height: "300px" }}
                modules={modules}
                value={substance}
                onChange={(e) => {
                    setSubstance(e);
                }}
            />

        </QuillTextCss>
    );
};
