import { SelectedCardProps } from "../../assets/types";
import Img from "../../images/forSale.webp";

export const SelectedCard: React.FC<SelectedCardProps> = ({ item }) => {
  return (
    <div
      style={{
        border: "2px solid blue",
        outline: "1px solid gray",
        marginBottom: "15px",
        padding: "10px",
      }}
    >
      <img
        src={Img}
        alt={item.name}
        style={{ width: "270px", height: "270px" }}
      />
      <h3
        style={{
          margin: "0px",
          position: "relative",
          top: "-16px",
          zIndex: "2",
          fontFamily: "20px",
        }}
      >
        {item.name}
      </h3>
      <p>{item.text}</p>
      <p>{item.city}</p>
    </div>
  );
};
