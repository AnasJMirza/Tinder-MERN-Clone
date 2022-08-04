import React, { useState } from "react";
import './TinderCard.css';

import TinderCardLib from "react-tinder-card";

const TinderCard = () => {
  const [person, setPerson] = useState([
    {
      name: "Anas",
      url: "https://media-exp1.licdn.com/dms/image/C4D03AQFknxTOfWouqw/profile-displayphoto-shrink_200_200/0/1653245311482?e=1665014400&v=beta&t=C1Db-Oqd4XuX7dVTDjanDBJBO2aVeeEJPKzS0tFkxdM",
    },
    {
      name: "Junaid",
      url: "https://i1.sndcdn.com/avatars-000646633104-4k5sh0-t500x500.jpg",
    },
    {
      name: "Imran",
      url: "https://i1.sndcdn.com/avatars-000646633104-4k5sh0-t500x500.jpg",
    },
  ]);
  return (
    <div>
      {person.map((person) => {
        return (
          <div className="tinder-card-container">
            <TinderCardLib className="tinder-card" key={person.name}>
              <div className="card-image-container">
                <img src={person.url} alt="cardImage" className="card-image"/>
              </div>
              <div className="card-text">
                <h3>{person.name}</h3>
              </div>
            </TinderCardLib>
          </div>
        );
      })}
    </div>
  );
};

export default TinderCard;
