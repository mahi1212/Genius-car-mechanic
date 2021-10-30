import React from 'react';
import { useParams } from 'react-router';
import { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect(()=>{
        fetch(`https://still-harbor-73178.herokuapp.com/services/${serviceId}`)
        .then(res=> res.json())
        .then(data=> setService(data))
    }, [])

    return (
        <div style={{width:"25rem", background:"#ccc", margin:"0 auto", padding:"1rem .5rem"}}>
            <h4>Details of {service.name}</h4>
            <h5>Price : {service.price}</h5>
            <p>details : {service.description}</p>
            <Link to='/home#services'><button>Back</button></Link>
            {/* <h2>this is booking: {serviceId}</h2> */}
        </div>
    );
};

export default Booking;