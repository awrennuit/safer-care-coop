import React, { useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";
import { Context } from "../App/App";

export default function Home() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    if (state.toast) {
      toast("💜 Thank you for contributing!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => dispatch({ type: `CLEAR_TOAST` }), 5000);
    }
  }, []);
  return (
    <div className="main-container">
      <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>
        Making Healthcare Safer
      </h1>
      <p>
        People who hold oppressed or marginalized identities often experience
        significant discrimination from healthcare workers. This results in
        worse overall healthcare, less visits to the doctor, and sometimes
        traumatic experiences or death. The system as it exists simply will not
        do. The goal of [Safer Healthcare] is to make it easier for people who
        hold oppressed or marginalized identities to find a healthcare
        practitioner that will provide better care.
      </p>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
