import {useEffect, useState} from 'react';
export default function Apod({date}) {
    const [ picture, setPicture ] = useState("")
    useEffect(() => {
        const apiKey = "EoYtedjwbk4WhsYN09QEBFsaffFSX9iMi6j45gP3"
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&dat=${date}`)
            .then((res) => res.json())
            .then((json) => {
                setPicture(json)
            })
    },[date])
    return(
        <>
            <img src={picture.hdurl}/>
            <h3>{picture.title}</h3>
            <h3>{picture.copyright}</h3>
            <h3>{picture.date}</h3>
        </>
    );
}