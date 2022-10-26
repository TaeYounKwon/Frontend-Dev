import { useNavigate } from "react-router-dom";
import "./styles/ClassCard.css";
export default function ClassCard({ classID }) {
  let navigate = useNavigate();
  return (
    <div className="">
      <button
        className="btn-custom-classSelc rounded border-0"
        onClick={() => navigate(`ClassPage/${classID}`)}
        style={{ cursor: "pointer" }}
      >
        {classID}
      </button>
    </div>
  );
}
