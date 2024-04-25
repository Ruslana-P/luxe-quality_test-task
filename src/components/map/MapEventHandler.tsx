import { useMapEvents } from "react-leaflet";
import L from "leaflet";
import { useState, useEffect } from "react";
import { MapEventHandlerProps } from "../../assets/types";
import mockStore from "../../assets/mockStore";

export const MapEventHandler: React.FC<MapEventHandlerProps> = ({
  markers,
  stateSetFun,
  resetOnMarkerClick,
}) => {
  const allMarkers = mockStore.getMarkers();
  const [currentZoom, setCurrentZoom] = useState(0);
  const map = useMapEvents({
    zoomend: () => {
      const newZoom = map.getZoom();
      const bounds = map.getBounds();

      if (currentZoom > 0 && newZoom < currentZoom) {
        const additionalMarkers = allMarkers.filter((marker) =>
          bounds.contains(L.latLng(marker.position))
        );

        const updatedMarkers = Array.from(
          new Set([...markers, ...additionalMarkers])
        );

        stateSetFun(updatedMarkers);
      }

      setCurrentZoom(newZoom);
    },
    moveend: () => {
      const bounds = map.getBounds();

      const newVisibleMarkers = allMarkers.filter((marker) =>
        bounds.contains(L.latLng(marker.position))
      );

      stateSetFun(newVisibleMarkers);
      resetOnMarkerClick(null);
    },
  });

  useEffect(() => {
    setCurrentZoom(map.getZoom());
  }, [map]);

  return null;
};
