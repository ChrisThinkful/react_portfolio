import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Card() {
    return (
        <div className='cards'>
            <h1>My latest projects:</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='images/reservation.jpg'
                        text='lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        altText='Reservations App'
                        label='Periodic Tables'
                        path='https://github.com/ChrisThinkful/Restaurant-Reservations'
                        />
                        <CardItem 
                        src='images/movie.jpg' 
                        text='lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        altText='Movies App'
                        label='WeLoveMovies'
                        path='https://github.com/ChrisThinkful/Project_WeLoveMovies_1'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='images/food.jpg' 
                        text='lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        altText='Food Delivery'
                        label='GrubDash'
                        path='https://github.com/ChrisThinkful/Project_GrubDash_Qualified_1'
                        />
                        <CardItem 
                        src='images/flashcards.jpg' 
                        text='lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        altText='Flashcards'
                        label='Flashcard-O-Matic'
                        path='https://github.com/ChrisThinkful/Project_Flashcards_Qualified_1'
                        />
                        <CardItem 
                        src='images/timer.jpg'
                        text='lorem ipsum dolor sit amet, consectetur adipiscing elit'
                        altText='Tomato Timer'
                        label='Pomodoro Study Timer'
                        path='https://github.com/ChrisThinkful/Pomodoro_Timer'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
