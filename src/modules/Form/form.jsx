import React, { useState } from "react";

const Form = () => {
  // State variables for storing input values and result
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState(""); // New state for gender
  const [html, setHtml] = useState(false);
  const [js, setJS] = useState(false);
  const [react, setReact] = useState(false);
  const [boostrap, setBoostrap] = useState(false);
  const [formResult, setFormResult] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can access the state variables (email, phoneNumber, gender, isSingle, isMarried) here
    const result = { name, phoneNumber, gender,html,js,react,boostrap};
    setFormResult(result);
    console.log("Form submitted with values:", result);
  };

  return (
    <div>
      <form className="d-flex flex-column mt-5 align-items-center" onSubmit={handleSubmit}>
        <h1>Form for User</h1>
        <input
          className="form-control w-25"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control w-25 my-4"
          type="number"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label>Gender</label>
        <select
          className="form-select w-25"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        {/* Single and Marriage checkboxes */}
        <div className="d-flex align-items-center">
            <input className="form-check my-4 " type="checkbox" checked = {html} onChange={()=> setHtml(!html)} />
            <label htmlFor=""className="me-3">HTML</label>
            <input className="form-check my-4" type="checkbox" checked = {js} onChange={()=> setJS(!js)} />
            <label htmlFor="" className="me-3">JS</label>
            <input className="form-check my-4" type="checkbox" checked = {react} onChange={()=> setReact(!react)} />
            <label htmlFor="" className="me-3">React</label>
            <input className="form-check my-4" type="checkbox" checked = {boostrap} onChange={()=> setBoostrap(!boostrap)} />
            <label htmlFor="" className="me-3">Boostrap</label>
        </div>
        <input
          className="form-control w-25 btn-success btn"
          type="submit"
          value="Submit"
        />
      </form>

      {/* Display form submission result */}
      {formResult && (
        <table className="table mt-4">
            <tr className="bg-dark text-white">
                <th>Name</th>
                <th>Number</th>
                <th>Gender</th>
                <th>Skill</th>
            </tr>
            <tr>
                <td>{formResult.name}</td>
                <td>{formResult.phoneNumber}</td>
                <td>{formResult.gender}</td>
                <td>{formResult.html}HTML</td>  
            </tr>
        </table>
        // <div className="mt-4 bg-light d-flex flex-column p-5 w-50 align-items-center m-auto ">
        //   <h1>Form Submission Result:</h1>
        //   <p>Email: {formResult.email}</p>
        //   <p>Phone Number: {formResult.phoneNumber}</p>
        //   <p>Gender: {formResult.gender}</p>
          
        //   <p>HTML : {formResult.html ? "Yes" : "No"}</p>
        //   <p>JS : {formResult.js ? "Yes" : "No"}</p>
        //   <p>React : {formResult.react ? "Yes" : "No"}</p>
        //   <p>Boostrap : {formResult.boostrap ? "Yes" : "No"}</p>
        // </div>
      )}
    </div>
  );
};

export default Form;
