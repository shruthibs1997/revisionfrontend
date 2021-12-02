import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const initial={
    name:"",
    city:"",
    age:"",
    education:"",
    gender:"",
    contact:""
}

function Addstudent(){
    const [formdata,setFormdata]=useState(initial);

    const handlechange=(e)=>{
        const {name,value}=e.target;
        setFormdata({...formdata,[name]:value})
    }

    async function handlesubmit(e){
        e.preventDefault();
        await axios.post("http://localhost:3033/students",formdata);
        // console.log(res.data)
    }


    return(
        <AddstuStyled>
            <div>Add New Student Here</div>
            <br></br>
            <form onSubmit={handlesubmit}>
            <label>Name:</label>
            <input type="text" placeholder="Enter name" name="name" onChange={handlechange}></input>
            <br></br>
            <label>City:</label>
            <input type="text" placeholder="Enter city" name="city" onChange={handlechange}></input>
            <br></br>
            <label>Age:</label>
            <input type="number" placeholder="Enter age" name="age" onChange={handlechange}></input>
            <br></br>
            <label>Education:</label>
            <input type="text" placeholder="Enter education" name="education" onChange={handlechange}></input>
            <br></br>
            <label>Gender:</label>
            <input type="text" placeholder="Enter gender" name="gender" onChange={handlechange}></input>
            <br></br>
            <label>Contact:</label>
            <input type="text" placeholder="Enter contact" name="contact" onChange={handlechange}></input>
            <br></br>
            <input type="submit" value="submit"></input>
            </form>
        </AddstuStyled>
    )
}

const AddstuStyled = styled.div`

`

export default Addstudent;