import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const ListData = () => {
  const API = " https://learn-dev.hasura.app/api/rest/shops";

  const [dataShop, setDataShop] = useState([]);
  const [pending,setIsPending] = useState(false);
  useEffect(() => {
    fetch("https://learn-dev.hasura.app/api/rest/shops")
      .then((res) => res.json())
      .then((data) => setDataShop(data));
  }, []);
// delete method
  const handleDelete = (id) => {
    setIsPending(true);
    fetch(API + `/${id}`, {
      method: "DELETE",
    }).then(()=>{
      console.log("delete items");
      setIsPending(false);
    })
    if (dataShop.length > 0) {
      setDataShop(dataShop.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="col-lg-10 col-md-6 col-sm-12 bg_shopData">
      <h1 className="text-center fs-3 mt-5 ">List data</h1>
      <table className="table">
        <thead>
          <tr className="table-dark">
            <th>Name</th>
            <th>Contact</th>
            <th>Desc</th>
            <th>Location</th>
            <th>Address</th>
            <th>PhoneNum</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {dataShop.shops?.map((item, index) => {
            
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.contact_name}</td>
                <td>{item.desc}</td>
                <td>{item.location}</td>
                <td>{item.address}</td>
                <td>{item.phone_number}</td>
                <td className="d-flex">
                  {!pending&&<button  onClick={() => {handleDelete(item.id);}} className="btn btn-danger">Delete</button>}
                  {pending&&<button  onClick={() => {handleDelete(item.id);}} disabled className="btn btn-danger">Delete...</button>}
                 
                  <Link to={`/listdata/${item.id}`}>
    <button className="btn btn-primary ms-2">Edit</button>
</Link>

                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListData;
