import { useState } from "react";
import DragAndDrop from "../DragAndDrop";
import UploadSuccessful from "../UploadSuccessful";

// import styles from "./MainPage.module.css"

const MainPage = (props) => {
  const [fileData, setFileData] = useState(null);
  const [tab, setTab] = useState("upload");

  const uploadSuccessHandler = (data) => {
    setFileData(data);
    setTab("success");
  };
  if (tab === "upload") return <DragAndDrop onSuccess={uploadSuccessHandler} />;
  if (tab === "success") return <UploadSuccessful data={fileData.fileData} />;
};

export default MainPage;
