import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import imguser from "../assets/image/hiring.png";
const UserForm = () => {
    const [name,setName] = useState("");
    const [phone_number,setPhone_number] = useState("");
    const [address,setAddress] = useState("");
    const [contact_name,setContact_name] = useState("");
    const [location,setLocation] = useState("");
    const [desc,setDesc] = useState("");
    const [isPending,setIsPending] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
      e.preventDefault();
      const shopData = {name,phone_number,address,contact_name,location,desc}
      setIsPending(true);
      console.log(shopData);
        fetch("https://learn-dev.hasura.app/api/rest/shops",{
            method: 'POST',
            body: JSON.stringify({
                "object": {
                    "address": address,
                    "contact_name": contact_name,
                    "desc": desc,
                    "location":location,
                    "name": name,
                    "phone_number": phone_number
                }

            
            }),
            headers: {
              'Content-type': 'application/json;',
            },
        }).then(()=>{
          console.log("New input!!");
          setIsPending(false);
          navigate('/');
        })
    }
  return (
    <div className="col-lg-10 mt-5 px-5 ">
      <div className="row " style={{boxShadow : "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        <div className="col-lg-12 px-5 mb-5 mt-5 d-flex justify-content-center flex-column align-items-center">
            <h1 className="fw-bold">Add shop data below! </h1>
            <form  onSubmit={handleSubmit}>
            <div className="row mt-5 ">
            <input value={name}
            onChange={(e)=>setName(e.target.value)}
              className="form-control mb-3"
              type="text"
              required
              placeholder="Enter Name..."
            />
            <input
             onChange={(e)=>setPhone_number(e.target.value)}
            value={phone_number}
              className="form-control mb-3"
              type="number"
              required
              placeholder="Enter PhoneNumber..."
            />
          </div>
          <div className="row " >
            
            <input
             onChange={(e)=>setContact_name(e.target.value)}
            value={contact_name}
              className="form-control mb-3"
              type="text"
              required
              placeholder="Enter ContactName..."
            />
            <input
             onChange={(e)=>setDesc(e.target.value)}
            value={desc}
              className="form-control mb-3"
              type="text"
              required
              placeholder="Enter Description..."
            />
          </div>
          <div className="row  ">
          <input
           onChange={(e)=>setLocation(e.target.value)}
          value={location}
              className="form-control mb-3"
              type="text"
              required
              placeholder="Enter Location..."
            />
             <input
              onChange={(e)=>setAddress(e.target.value)}
             value={address}
              className="form-control mb-3"
              type="text"
              required
              placeholder="Enter Address..."
            />
          </div>
          <div className="row ">
            {!isPending&&<button className="btn btn-success ms-4"style={{width : "200px"}}>Submit</button>}
            {isPending&&<button disabled className="btn btn-success ms-4"style={{width : "200px"}}>Submiting.....</button>}
           
          </div>
            </form>
         
        </div>
      </div>
    </div>
  );
};

export default UserForm;
