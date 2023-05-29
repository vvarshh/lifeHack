import React from "react";
import TinderCard from "react-tinder-card";

const LocalPage = () => {
  const people = [
    {
      name: "John Doe",
      age: 25,
      location: "New York City",
      interests: "Travel, Photography, Cooking",
      imageUrl: "person1.jpg",
    },
    {
      name: "Jane Smith",
      age: 28,
      location: "Los Angeles",
      interests: "Hiking, Painting, Music",
      imageUrl: "person2.jpg",
    },
    // Add more people as needed
  ];

  const swiped = (direction) => {
    console.log("Swiped " + direction);
  };

  const outOfFrame = (person) => {
    console.log(person.name + " left the screen.");
  };

  return (
    <div>
      <div className="carousel">
        {people.map((person, index) => (
          <TinderCard
            key={index}
            onSwipe={(dir) => swiped(dir, person)}
            onCardLeftScreen={() => outOfFrame(person)}
            preventSwipe={["up", "down"]} // Disable vertical swiping
          >
            <div className="card">
              <img
                src={person.imageUrl}
                alt={person.name}
                className="person-image"
              />
              <h2 className="person-name">{person.name}</h2>
              <p className="person-details">Age: {person.age}</p>
              <p className="person-details">Location: {person.location}</p>
              <p className="person-details">Interests: {person.interests}</p>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default LocalPage;
