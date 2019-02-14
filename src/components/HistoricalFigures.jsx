import React from "react";
import Person from './Person';
import khan from "../assets/images/khan.jpg";
import curie from "../assets/images/curie.jpg";

const historicalFiguresList = [
    {
        name: "Genghis Khan",
        years: [700, 800],
        bio: "Original Bad Boy",
        img: khan
    },
    {
        name: "Madame Curie",
        years: [1800, 1900],
        bio: "Glow in the dark",
        img: curie
    }
];

function HistoricalFigures() {
    return (
        <div>
            {historicalFiguresList.map((person, index) => (
                <Person
                    name={person.name}
                    years={person.years}
                    bio={person.bio}
                    img={person.img}
                    key={index}
                />
            ))}
        </div>
    );
}

export default HistoricalFigures;
