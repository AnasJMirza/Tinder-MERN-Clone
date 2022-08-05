import React, { useState, useEffect } from "react";
import "./TinderCard.css";
import axios from '../../axios';

import TinderCardLib from "react-tinder-card";

const TinderCard = () => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
  
    async function fetchData() {
      const response = await axios.get('/tinder/cards');
      setPerson(response.data);
    }

    fetchData();
  
  }, [])
  
  return (
    <div className="tinder-card-container">
      
        {person.map((person) => {
          return <TinderCardLib
            className="tinder-card"
            key={person.name}
            preventSwipe={["up", "down"]} 
          >
            <div className="card" style={{backgroundImage: `url('${person.imgURL}')`}}>
                <h3 className="tinder-card-name"> { person.name } </h3>
            </div>
          </TinderCardLib>;
        })}
      
    </div>
  );
};

export default TinderCard;
