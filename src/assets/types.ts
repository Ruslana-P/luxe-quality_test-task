export type MarkerType = {
  id: string;
  position: [number, number];
  name: string;
  text: string;
  image: string;
  city: string;
};

export type MapEventHandlerProps = {
  markers: MarkerType[];
  stateSetFun: (markers: MarkerType[]) => void;
  resetOnMarkerClick: (arg: MarkerType | null) => void;
};

export type MapProps = {
  markers: MarkerType[] | null;
  stateSetFun: (markers: MarkerType[]) => void;
  onMarkerClick: (arg: MarkerType | null) => void;
};

export type DetailsProps = {
  //double  FIX it
  allMarkers: MarkerType[] | null;
  selectedMarker: null | MarkerType;
};

export type CardProps = {
  item: MarkerType;
};

export type SelectedCardProps = {
  item: MarkerType;
};

export type CloseIconProps = {
  clickHandler: (arg: boolean) => void;
};
