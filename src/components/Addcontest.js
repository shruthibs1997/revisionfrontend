import { useState } from "react";
import styled from "styled-components"
import axios from "axios";


const initial={
    titel:"",
    type:"",
    deadline:"",
    tags:"",
    time:""
}


function Addcontest(){
    const [constdata,setConstdata]=useState(initial);

    const handlechange=(e)=>{
        const {name,value}=e.target;
        setConstdata({...constdata,[name]:value})
    }

    async function handlesubmit(e){
        e.preventDefault();
        const res=await axios.post("http://localhost:3033/contests",constdata);
        console.log(res.data)
    }


    return(
        <AddcontStyled>
            <div>Add New Contest Here</div>
            <br></br>
            <form onSubmit={handlesubmit}>
            <label>Titel:</label>
            <input type="text" placeholder="Enter titel" name="titel" onChange={handlechange}></input>
            <br></br>
            <label>Type:</label>
            <input type="text" placeholder="Enter type" name="type" onChange={handlechange}></input>
            <br></br>
            <label>Deadline:</label>
            <input type="number" placeholder="Enter deadline" name="deadline" onChange={handlechange}></input>
            <br></br>
            <label>Tags:</label>
            <input type="text" placeholder="Enter tags" name="tags" onChange={handlechange}></input>
            <br></br>
            <label>Time:</label>
            <input type="text" placeholder="Enter time" name="time" onChange={handlechange}></input>
            <br></br>
            <input type="submit" value="submit"></input>
            </form>
        </AddcontStyled>
    )
}

const AddcontStyled = styled.div`

`;

export default Addcontest;