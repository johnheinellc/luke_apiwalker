import React, {useState} from"react";
import {useHistory} from "react-router-dom";





const Form=()=>{
    let [id,setId] = useState()
    let [topic,setTopic] = useState("films")
    let history = useHistory()

    const submitHandler=(e)=>{
        e.preventDefault()
        history.push(`/${topic}/${id}`)
    }
    return<>
    <h1>Star Wars API</h1>
    <form onSubmit={submitHandler}>
        <label className="search">Search: </label>
        <select onChange={(e)=>setTopic(e.target.value)}>
            <option value="films">Films</option>
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="species">Species</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
        </select>
        <label className="search">Id:</label>
        <input type="number" onChange={(e)=>setId(e.target.value)}></input>
        <input type="submit" value="Search" className="btn btn-success search"></input>
        
    </form></>
}


  export default Form;