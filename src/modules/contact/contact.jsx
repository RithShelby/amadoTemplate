import React from "react";

const ContactPage = () => {
  return (
    <div className="col-lg-3">
      <button
        className="btn btn-success my-3 w-50"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default ContactPage;
