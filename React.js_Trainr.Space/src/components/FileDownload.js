import React, { useEffect, useState } from "react";
import { Storage } from "aws-amplify";
import { Button } from "reactstrap";

export default function FileDownload({ filepath }) {
  const [downloadURL, setDownloadURL] = useState("");

  useEffect(async () => {
    await Storage.get(filepath).then((res) => setDownloadURL(res));
  });
  return (
    <Button href={`${downloadURL}`} download>
      Download
    </Button>
  );
}
