import React, { useState } from "react";
import "./TinderCard.css";

import TinderCardLib from "react-tinder-card";

const TinderCard = () => {
  const [person, setPerson] = useState([
    {
      name: "Anas",
      url: "https://avatars.githubusercontent.com/u/90819686?v=4",
    },
    {
      name: "Junaid",
      url: "https://i1.sndcdn.com/avatars-000646633104-4k5sh0-t500x500.jpg",
    },
    {
      name: "Livian",
      url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
  ]);
  return (
    <div className="tinder-card-container">
      
        {person.map((person) => {
          return <TinderCardLib
            className="tinder-card"
            key={person.name}
            preventSwipe={["up", "down"]} 
          >
            <div className="card" style={{backgroundImage: `url('${person.url}')`}}>
                <h3 className="tinder-card-name"> { person.name } </h3>
            </div>
          </TinderCardLib>;
        })}
      
    </div>
  );
};

export default TinderCard;
