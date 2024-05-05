import React, { useEffect, useState } from "react";
const ListFood = () => {
    const [dataFood,setDataFood] = useState([]);
    useEffect(() => {
      fetch("https://learn-dev.hasura.app/api/rest/foods")
        .then((res) => res.json())
        .then((data) => setDataFood(data));
   }, []);
  return (
    <div className="col-lg-10">
    <h1 className="text-center fs-3 mt-5">List data</h1>
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>ShopID</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {dataFood.foods?.map((item,index)=>{
          return(
            <tr>
               <td>{item.id}</td>
               <td>{item.name}</td>
               <td>{item.image}</td>
               <td>{item.price}</td>
               <td>{item.shop_id}</td>
               <td>{item.description}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
</div>
  )
}

export default ListFood;
