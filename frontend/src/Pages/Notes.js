import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import parse from "html-react-parser";
import "./Notes.css";

const Notes = () => {
  const navigate = useNavigate();
  const editorRef = useRef("");

  const [data, setData] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    axios
      .get("http://localhost:4000/notes/:id")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postNotes = () => {
    axios
      .post("http://localhost:4000/notes", {
        text: editorRef.current.getContent(),
      })
      .then((res) => {
        console.log("Post", res);
        getNotes();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteNotes = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:4000/notes/${id}`)
      .then((res) => {
        console.log("Delete", res);

        getNotes();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editNotes = () => {
    navigate("/notes/edit");
  };

  return (
    <div className="container">
      <div className="notesContainer">
        <h1>Notes</h1>
        <Editor
          onInit={(e, editor) => (editorRef.current = editor)}
          initialValue="<p>New text</p>"
          init={{ menubar: false }}
        />
        <div>
          <input
            className="submitbtn"
            type="submit"
            value="Submit"
            onClick={postNotes}
          />
        </div>
        <div>
          {data.map((data) => (
            <div className="notesDiv" key={data.id}>
              <b>ID: {data.id}</b> {parse(data.text)}{" "}
              <div>
                <input type="submit" value="Edit" onClick={editNotes} />
                <input
                  className="deleteBtn"
                  type="submit"
                  value="Delete"
                  onClick={(e) => {
                    deleteNotes(e, data.id);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
