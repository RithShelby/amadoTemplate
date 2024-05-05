import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditData = () => {
    const API = "https://learn-dev.hasura.app/api/rest/shops";
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [address, setAddress] = useState("");
    const [contact_name, setContact_name] = useState("");
    const [location, setLocation] = useState("");
    const [desc, setDesc] = useState("");
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        // Fetch data for editing
        fetch(`${API}/${id}`)
            .then(response => response.json())
            .then(data => {
                setName(data.name);
                setPhone_number(data.phone_number);
                setAddress(data.address);
                setContact_name(data.contact_name);
                setLocation(data.location);
                setDesc(data.desc);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const shopData = {
            name,
            phone_number,
            address,
            contact_name,
            location,
            desc
        };
        setIsPending(true);

        fetch(`${API}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(shopData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(() => {
                console.log("Shop data updated!");
                setIsPending(false);
                // Optionally, navigate back to the list page after successful update
                navigate('/list'); // Assuming you have a route for listing shops
            })
            .catch((error) => {
                console.error("Error updating data:", error);
                setIsPending(false);
                // Handle update errors
            });
    };

    return (
        <div className="col-lg-10 mt-5 px-5 ">
            <div className="row " style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                <div className="col-lg-12 px-5 mb-5 mt-5 d-flex justify-content-center flex-column align-items-center">
                    <h1 className="fw-bold">Edit shop data below! </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="row mt-5 ">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control mb-3"
                                type="text"
                                required
                                placeholder="Enter Name..."
                            />
                            <input
                                onChange={(e) => setPhone_number(e.target.value)}
                                value={phone_number}
                                className="form-control mb-3"
                                type="number"
                                required
                                placeholder="Enter PhoneNumber..."
                            />
                        </div>
                        <div className="row " >

                            <input
                                onChange={(e) => setContact_name(e.target.value)}
                                value={contact_name}
                                className="form-control mb-3"
                                type="text"
                                required
                                placeholder="Enter ContactName..."
                            />
                            <input
                                onChange={(e) => setDesc(e.target.value)}
                                value={desc}
                                className="form-control mb-3"
                                type="text"
                                required
                                placeholder="Enter Description..."
                            />
                        </div>
                        <div className="row  ">
                            <input
                                onChange={(e) => setLocation(e.target.value)}
                                value={location}
                                className="form-control mb-3"
                                type="text"
                                required
                                placeholder="Enter Location..."
                            />
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                                className="form-control mb-3"
                                type="text"
                                required
                                placeholder="Enter Address..."
                            />
                        </div>
                        <div className="row ">
                            {!isPending && <button className="btn btn-success ms-4" style={{ width: "200px" }}>Submit</button>}
                            {isPending && <button disabled className="btn btn-success ms-4" style={{ width: "200px" }}>Submitting.....</button>}
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default EditData;
