import React, { useState } from "react";
import "./UploadDocument.css";
import { uploadDocument } from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function UploadDocument() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", title);
    if (file) fd.append("file", file);

    const res = await uploadDocument(fd);
    if (res.ok) {
      navigate("/documents");
    } else {
      alert("Upload failed");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h3>Upload Document</h3>
      </div>
      <div className="card">
        <form onSubmit={onSubmit} className="upload-form">
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>File</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button className="primary" type="submit">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}
