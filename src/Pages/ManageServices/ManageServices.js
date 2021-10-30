import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://still-harbor-73178.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    const handleDelete = id =>{
        fetch(`https://still-harbor-73178.herokuapp.com/services/${id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.deletedCount === 1) {
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining)
                alert("Successfully deleted one document.");
              }
        })
    }
    return (
        <div>
            <h2>Manage services</h2>
            {
                services.map(service => <div>
                    <h3>Name : {service.name}</h3>
                    <button onClick={()=> handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;