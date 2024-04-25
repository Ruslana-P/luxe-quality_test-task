import { MapContainer, Marker, TileLayer } from "react-leaflet";

import { MapEventHandler } from "./MapEventHandler";
import { MapProps } from "../../assets/types";

export const Map: React.FC<MapProps> = ({
  markers,
  stateSetFun,
  onMarkerClick,
}) => {
  return (
    <>
      <MapContainer
        style={{
          height: "700px",
          flexBasis: "800px",
          width: "70%",
          zIndex: "1",
        }}
        center={[49.0, 32.0]}
        zoom={6}
        scrollWheelZoom={true}
      >
        {markers && (
          <MapEventHandler
            markers={markers}
            stateSetFun={stateSetFun}
            resetOnMarkerClick={onMarkerClick}
          />
        )}

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers &&
          markers.map((item) => (
            <Marker
              key={item.id}
              position={item.position}
              eventHandlers={{
                click: (event) => onMarkerClick(item), // Правильний обробник кліку
              }}
            ></Marker>
          ))}
      </MapContainer>
    </>
  );
};
