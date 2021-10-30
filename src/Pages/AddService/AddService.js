import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        axios.post('https://still-harbor-73178.herokuapp.com/services', data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Added successfully')
                reset()
            }
        })
        console.log(data);
    }

    return (
        <div className='add-service'>
            <h3> Please add a service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <textarea {...register("description")} placeholder="Write description"/>
                <input type="number" {...register("price")} placeholder="Price"/>
                <input {...register("img")} placeholder="image url"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;