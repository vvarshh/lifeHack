import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './localPage.css';

const LocalPage = () => {
    const [people, setPeople] = useState([
        {
            name: 'John Doe',
            age: 25,
            location: 'New York City',
            interests: 'Travel, Photography, Cooking',
            imageUrl: 'person1.jpg'
        },
        {
            name: 'Jane Smith',
            age: 28,
            location: 'Los Angeles',
            interests: 'Hiking, Painting, Music',
            imageUrl: 'person2.jpg'
        },
        {
            name: 'Mike Johnson',
            age: 32,
            location: 'Chicago',
            interests: 'Sports, Reading, Movies',
            imageUrl: 'person3.jpg'
        },
        {
            name: 'Emily Brown',
            age: 27,
            location: 'San Francisco',
            interests: 'Yoga, Writing, Dancing',
            imageUrl: 'person4.jpg'
        },
        {
            name: 'David Wilson',
            age: 30,
            location: 'London',
            interests: 'Gaming, Technology, Travel',
            imageUrl: 'person5.jpg'
        }
        // Add more people as needed
    ]);

    const [lastDirection, setLastDirection] = useState('');
    const [swipedCards, setSwipedCards] = useState([]);

    const swiped = (direction, person) => {
        console.log('Swiped ' + direction + ' on ' + person.name);
        setLastDirection(direction);
        setSwipedCards(prevSwipedCards => [...prevSwipedCards, person]);
    };

    const outOfFrame = person => {
        console.log(person.name + ' left the screen.');
    };

    const handleUndo = () => {
        if (swipedCards.length > 0) {
            const lastSwipedCard = swipedCards[swipedCards.length - 1];
            setSwipedCards(prevSwipedCards => prevSwipedCards.slice(0, -1));
            setLastDirection(`Undo ${lastSwipedCard.name}`);
        }
    };

    const remainingCards = people.filter(person => {
        const isSwiped = swipedCards.some(swipedCard => swipedCard.name === person.name);
        return !isSwiped;
    });

    return (
        <div className="page-container">
            <div className="carousel">
                {remainingCards.map((person, index) => (
                    <TinderCard key={index} onSwipe={dir => swiped(dir, person)} onCardLeftScreen={() => outOfFrame(person)} preventSwipe={['up', 'down']} className="swipe">
                        <div
                            style={{
                                backgroundImage: `url(${person.imageUrl})`,
                                backgroundSize: 'cover'
                            }}
                            className="card"
                        >
                            <h2 className="person-name">{person.name}</h2>
                            <p className="person-details">Age: {person.age}</p>
                            <p className="person-details">Location: {person.location}</p>
                            <p className="person-details">Interests: {person.interests}</p>
                        </div>
                    </TinderCard>
                ))}
            </div>
            <div className="action-text">
                {lastDirection && <p>{lastDirection}</p>}
                <button className="undo-button" onClick={handleUndo}>
                    Undo
                </button>
            </div>
        </div>
    );
};

export default LocalPage;
