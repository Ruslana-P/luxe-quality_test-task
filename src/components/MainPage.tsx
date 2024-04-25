import { Map } from "./map/Map";
import { Header } from "./header/Header";
import { Details } from "./details/Details";
import { useEffect, useState } from "react";
import { MarkerType } from "../assets/types";
import mockStore from "../assets/mockStore";

export function MainPage() {
  const [visibleMarkers, setVisibleMarkers] = useState<MarkerType[] | null>(
    null
  );
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);

  const handleMarkerClick = (item: MarkerType | null) => {
    setSelectedMarker(item);
  };
  console.log(mockStore.getMarkers());

  useEffect(() => {
    setVisibleMarkers(mockStore.getMarkers());
  }, []);

  return (
    <div className="App" style={{ height: "500px", position: "relative" }}>
      <Header />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Map
          markers={visibleMarkers}
          stateSetFun={setVisibleMarkers}
          onMarkerClick={handleMarkerClick}
        />
        <Details allMarkers={visibleMarkers} selectedMarker={selectedMarker} />
      </div>
    </div>
  );
}
