import React from 'react';
import './MoviesCard.css';

function MoviesCard({title, duration, img, isSaved, isOpenSavedMovies}) {
    return (
        <div className="card">
            <img src={img} className="card__img" alt={`Постер фильма ${title}`}/>
            <div className="card__desc">
                <h3 className="card__title">{title}</h3>
                <button className={`card__button ${!isSaved && 'card__button_saved'} ${isOpenSavedMovies && 'card__button_unsaved'}`}></button>
            </div>
            <p className="card__duration">{duration}</p>
        </div>
    );
}

export default MoviesCard;