import { Form } from "./header/Form";

export const FormPage: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "rgb(230, 230, 230, 0.7)",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "100",
      }}
    >
      <Form />
    </div>
  );
};
