import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router";
import Form from "./Form";



const Api=()=>{
    let[noAPI,setNoAPI] = useState(false)
    let[report,setReport] = useState([])
    let{topic,id} = useParams()

    useEffect(()=>{
        setNoAPI(false)
        console.log("Making Request Now...")
        axios.get(`https://swapi.dev/api/${topic}/${id}`)
        .then(response=>{
            setReport(response.data)
        })
        .catch(err=>{
            setNoAPI(true)
        })}
        ,[topic,id]
    );
    return<>
    <div>
        {noAPI == true?
            <div>
                <h2>Error: These arent the droids you're looking for</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRti9yPFMKMdsTIW4ZwQyJfdo18os65eZFA&usqp=CAU"/>
            </div>
        :topic == "films"?
        <div>
            <ul>
                <li>Title: {report.title}</li>
                <li>Release Date: {report.release_date}</li>
                <li>Director: {report.director}</li>
            </ul>
        </div>
        :topic == "people"?
        <div>
            <ul>
                <li>Name: {report.name}</li>
                <li>Gender: {report.gender}</li>
                <li>Birth Year: {report.birth_year}</li>
            </ul>
        </div>
        :topic == "planets"?
        <div>
            <ul>
                <li>Name: {report.name}</li>
                <li>Climate: {report.climate}</li>
                <li>Population: {report.population}</li>
            </ul>
        </div>
        :topic == "species"?
        <div>
            <ul>
                <li>Race: {report.name}</li>
                <li>Average Height: {report.average_height}</li>
                <li>Average Lifespan: {report.average_lifespan}</li>
            </ul>
        </div>
        :topic == "starships"?
        <div>
            <ul>
                <li>Name: {report.name}</li>
                <li>Cost (credits): {report.cost_in_credits}</li>
                <li>Hyperdrive Rating: {report.hyperdrive_rating}</li>
            </ul>
        </div>
        :topic == "vehicles"?
        <div>
            <ul>
                <li>Name: {report.name}</li>
                <li>Cost (credits): {report.cost_in_credits}</li>
                <li>Vehicle Class: {report.vehicle_class}</li>
            </ul>
        </div>
        :""
        }
    </div>
    </>
  }
  export default Api;