import React from "react";

 function Welcome (props) {
     return <p>Welcome, {props.name} </p>
 }

export const Home = () => (
<>
<h2>Kandy Korner</h2>
        <small>Pick you up when you need it.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Angelic Way</div>
        </address>
       
        <Welcome name="Aki"/> 
</>

)
