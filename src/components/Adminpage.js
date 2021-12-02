import { useEffect, useState } from "react";
import axios from "axios"
import styled from "styled-components";
import { Link } from "react-router-dom";


function Adminpage(){
    const [student,setStudent]=useState([]);

    useEffect(()=>{
        displaystd()
    },[])

    async function displaystd(){
        const res = await axios.get("http://localhost:3033/students");
        console.log(res.data.student);
        setStudent(res.data.student)
    }

    async function handledelete(el){
        const res = await axios.delete(`http://localhost:3033/students/${el._id}`);
        console.log(res);
        displaystd()
    }

    return(
        <StuStyle>
            {student.map(el=>{
                return<div className="studiv" key={el._id}>
                    <div>{el.name}</div>
                    <div>{el.city}</div>
                    <div>{el.gender}</div>
                    <div>{el.education}</div>
                    <div>{el.contact}</div>
                    <button onClick={()=>handledelete(el)}>Delete</button>
                </div>
            })}
            <Link to="/admin/addstudent">
            <button>Add Student</button>
            </Link>
            <br></br>
            <Link to="/admin/addcontest">
            <button>Add Contest</button>
            </Link>
        </StuStyle>
    )
}

const StuStyle = styled.div`
    .studiv{
        border: 1px solid black;
        display: flex;
        justify-content: space-around;
    }
   
`

export default Adminpage;