import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    console.log("clicked");

    navigate("/form");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "nowrap",
          paddingTop: "15px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            paddingRight: "20px",
          }}
        >
          Header
        </div>
        <button
          style={{
            border: "1px solid blue",
            borderRadius: "20px",
            padding: "10px",
          }}
          onClick={clickHandler}
        >
          Add new
        </button>
      </div>
    </>
  );
};
