import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";


function Studentpage(){
    const[constlist,setConstlist]=useState([]);
    const [page,setpage]=useState(1);
    useEffect(()=>{
        displayconst();
    },[])

    async function displayconst(){
        const res = await axios.get(`http://localhost:3033/contests?page=${page}&limit=2`);
        console.log(res.data.contest);
        setConstlist(res.data.contest)
    }

    return(
        <ConstStyled>
            {constlist.map((el)=>{
                return <div key={el._id} className="constdiv">
                    <div>{el.titel}</div>
                    <div>{el.tags}</div>
                    <div>{el.type}</div>
                    <div>{el.time}</div>
                    <div>{el.deadline}</div>
                </div>
            })}
            <div>Page:{page}</div>

            <button onClick={()=>{
                if(page>1){
                 setpage(page-1)
                }
                displayconst()
            }}>Prev</button>
            <button onClick={()=>{setpage(page+1)
            displayconst()}}>Next</button>
            
        </ConstStyled>
    )
}

const ConstStyled = styled.div`
    .constdiv{
        border: 1px solid black;
        display: flex;
        justify-content: space-around;
    }
`;

export default Studentpage;