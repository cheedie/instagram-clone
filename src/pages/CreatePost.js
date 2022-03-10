import React, { useState } from "react";
import Alert from "../components/Alert";
// import M from "materialize-css";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const navigate = useNavigate();

  const [caption, setCaption] = useState("");
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
      console.log("yay");
      console.log("yay 3");
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
      setErrMsg("something went wrong!");
    };
    navigate("/home");
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("https://teamone-ig-clone.herokuapp.com/api/posts", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      });
      setFileInputState("");
      setPreviewSource("");
      setCaption("");
      setSuccessMsg("Image uploaded successfully");
    } catch (err) {
      console.error(err);
      setErrMsg("Something went wrong!");
    }
  };

  return (
    <div
      className="card input-filed"
      style={{
        margin: "30px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <form action="">
        <span>Upload Image</span>
        <Alert msg={errMsg} type="danger" />
        <Alert msg={successMsg} type="success" />

        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="form-input"
        />
        <input
          type="text"
          placeholder="caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        <button
          onClick={handleSubmitFile}
          className="btn waves-effect waves-light #64b5f6 blue darken-1"
          type="submit"
        >
          Post
        </button>
      </form>

      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
      )}
    </div>
  );
};

export default CreatePost;
