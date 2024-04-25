import { useFormik } from "formik";
import * as Yup from "yup";
import { Cities } from "../../assets/constants";
import { generateUnicId } from "../../assets/functions";
import { CloseIcon } from "../../images/CloseIcon";
import { MarkerType } from "../../assets/types";
import mockStore from "../../assets/mockStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const formStyles: React.CSSProperties = {
  border: "1px solid black",
  width: "400px",
  margin: "300px auto 0 auto",
  borderRadius: "50px",
  padding: "50px",
  backgroundColor: "white",
  position: "relative",
};

const divStyles = {
  width: "300px",
  margin: "0 auto",
  marginBottom: "20px",
};
const labelStyles: React.CSSProperties = {
  textAlign: "left",
  width: "90%",
  display: "inline-block",
  marginBottom: " 5px",
};
const inputStyles = { width: "90%", height: "30px", borderRadius: "10px" };

export const Form: React.FC = () => {
  const [submited, setSubmited] = useState(false);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      text: "",
      city: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(10, "Name must be at least 10 characters")
        .max(50, "Name cannot exceed 50 characters"),

      text: Yup.string()
        .required("Text is required")
        .min(20, "Text must be at least 20 characters")
        .max(200, "Text cannot exceed 200 characters"),
      city: Yup.string().required("City is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      const newMarker: MarkerType = {
        position: Cities[values.city],
        name: values.name,
        id: generateUnicId(),
        city: values.city,
        text: values.text,
        image: "image1.jpg",
      };

      mockStore.addMarker(newMarker);
      setSubmited(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    },
  });

  return (
    <>
      {!submited ? (
        <form style={formStyles} onSubmit={formik.handleSubmit}>
          <CloseIcon clickHandler={() => navigate("/")} />
          <div style={divStyles}>
            <label style={labelStyles} htmlFor="name">
              Please write the name of your ad here
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={inputStyles}
            />
            {formik.touched.name && formik.errors.name ? (
              <div style={{ color: "red" }}>{formik.errors.name}</div>
            ) : null}
          </div>
          <div style={divStyles}>
            <label style={labelStyles} htmlFor="text">
              Enter information about the item you are selling
            </label>
            <textarea
              id="text"
              name="text"
              value={formik.values.text}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={inputStyles}
            ></textarea>
            {formik.touched.text && formik.errors.text ? (
              <div style={{ color: "red" }}>{formik.errors.text}</div>
            ) : null}
          </div>
          <div style={divStyles}>
            <label style={labelStyles} htmlFor="city">
              City
            </label>
            <select
              id="city"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={inputStyles}
            >
              <option value="">Select a city</option>
              {Object.keys(Cities).map((cityName, index) => (
                <option key={index} value={cityName}>
                  {cityName}
                </option>
              ))}
            </select>
            {formik.touched.city && formik.errors.city ? (
              <div style={{ color: "red" }}>{formik.errors.city}</div>
            ) : null}
          </div>
          <div
            style={{
              width: "300px",
              margin: "0 auto",
              marginBottom: "20px",
              textDecoration: "underline",
            }}
          >
            Sorry, due to some technical issues, adding images is not possible
          </div>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            style={{
              padding: "10px",
              width: "150px",
              position: "relative",
              left: "calc(50% - 85px)",
            }}
          >
            Submit
          </button>
        </form>
      ) : (
        <div style={formStyles}>New ad has been successfully added</div>
      )}
    </>
  );
};
