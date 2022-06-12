import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const Home = () => {
  const navigate = useNavigate();
  const editorRef = useRef("");

  const editNotes = () => {
    navigate("/notes");
  };

  return (
    <div className="container">
      <div className="notesContainer">
        <h1>Edit Notes</h1>
        <Editor
          onInit={(e, editor) => (editorRef.current = editor)}
          initialValue="<p>Edit text</p>"
          init={{ menubar: false }}
        />
        <div>
          <input type="submit" value="Edit" onClick={editNotes} />
        </div>
      </div>
    </div>
  );
};

export default Home;
