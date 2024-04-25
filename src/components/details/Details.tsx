import { DetailsProps } from "../../assets/types";
import { Card } from "./Card";
import { SelectedCard } from "./SelectedCard";

export const Details: React.FC<DetailsProps> = ({
  allMarkers,
  selectedMarker,
}) => {
  return (
    <div style={{ marginLeft: "20px" }}>
      {selectedMarker && <SelectedCard item={selectedMarker} />}
      {allMarkers &&
        allMarkers.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
    </div>
  );
};
