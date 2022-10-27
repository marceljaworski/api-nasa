import {useEffect, useState} from 'react';
export default function Apod({date}) {
    const [ picture, setPicture ] = useState("")
    console.log(picture)
    useEffect(() => {
        const apiKey = "EoYtedjwbk4WhsYN09QEBFsaffFSX9iMi6j45gP3"
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
            .then((res) => res.json())
            .then((json) => {
                setPicture(json)
            })
    },[date])
    return(
        <>
            <img src={picture.hdurl}/>
            <h3>{picture.title}</h3>
            <p>{picture.explanation}</p>
            
        </>
    );
}