import { useState, useEffect } from "react";
import { Storage } from "aws-amplify";
import { Button, Card, CardBody, CardTitle, Input, Form } from "reactstrap";
import "./styles/ClassFiles.css";
import FileDownload from "./FileDownload";

export default function ClassFiles({ courseName, isInstructor }) {
  const [uploadFile, setUploadFile] = useState(null);
  const [classFiles, setClassFiles] = useState(null);
  const [refreshPage, setRefreshPage] = useState(0);

  async function handleUpload() {
    const result = await Storage.put(
      `${courseName}/${uploadFile.name}`,
      uploadFile
    );
    setRefreshPage(refreshPage + 1);

    console.log(result);
  }

  async function deleteFile(filePath) {
    await Storage.remove(filePath);
  }

  useEffect(() => {
    Storage.list(`${courseName}/`) // for listing ALL files without prefix, pass '' instead
      .then((result) => setClassFiles(result))
      .catch((err) => console.log(err));
  }, [uploadFile, refreshPage, classFiles]);

  return (
    <div className="d-flex flex-column align-items-start rounded bg-white p-3 mt-3 mb-3">
      {isInstructor ? (
        <Form className="d-flex w-100">
          <Input
            type="file"
            onChange={(e) => setUploadFile(e.target.files[0])}
          />
          <Button type="reset" onClick={() => handleUpload()} color="secondary">
            Upload
          </Button>
        </Form>
      ) : null}

      <hr />
      <div>
        {classFiles == null ? null : (
          <div className="d-flex  flex-wrap">
            {classFiles.map((classFile) => {
              let filepath = classFile.key;
              let fileName = classFile.key.split("/");

              return (
                <Card className="p-2 m-2 uploadPicture">
                  <CardBody className="d-flex flex-column justify-content-center">
                    <CardTitle className="text-dark">
                      <div className="d-flex">
                        <p>{fileName[fileName.length - 1]}</p>
                        <i
                          type="button"
                          onClick={() => deleteFile(filepath)}
                          className="fa-solid fa-trash fa-2xs text-danger"
                        ></i>
                      </div>
                    </CardTitle>
                    <FileDownload filepath={filepath} />
                  </CardBody>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
