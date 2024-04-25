import { CardProps } from "../../assets/types";
import Image from "../../images/smtForSale.webp";

export const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        marginBottom: "15px",
        padding: "10px",
      }}
    >
      <img
        src={Image}
        alt={item.name}
        style={{ width: "250px", height: "250px" }}
      />
      <h3
        style={{
          margin: "0px",
          position: "relative",
          top: "-16px",
          zIndex: "2",
        }}
      >
        {item.name}
      </h3>
      <p
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "250px",
        }}
      >
        {item.text}
      </p>
      <p>{item.city}</p>
    </div>
  );
};
