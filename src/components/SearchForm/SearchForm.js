import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm({onClick, keywords='', isShort}) {
    const [film, setFilm] = useState(keywords);
    const [filmError, setFilmError] = useState('');
    const [filmDirty, setFilmDirty] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const [isShortSuitable, setShortSuitable] = useState(isShort);
    
    function onChange(e){
        setFilm(e.target.value);
        if (e.target.value.length === 0){
            setFilmError('Нужно ввести ключевое слово.');
        } else {
            setFilmError('');
        }
    }
    function handleButtonClick(e){
        e.preventDefault();
        onClick(film, isShortSuitable);
    }
    function blurHandler(e) {
        if (e.target.name === 'film') {
            setFilmDirty(true);
        }
    }
    useEffect(()=>{
        setFormValid(!filmError);
    }, [filmError]);

    return (
        <form className="search-form">
            <div className="search-form__find">
                <label className="search-form__field">
                    <input
                        id="film-input"
                        type="text"
                        className="search-form__input"
                        name="film"
                        required
                        placeholder='Фильм'
                        value={film}
                        onChange={onChange}
                        onBlur={blurHandler}
                    />
                    <span className={`search-form__error ${(filmDirty && filmError) && 'search-form__error_show'}`}>{filmError}</span>
                </label>
                <button 
                    className={`search-form__button ${(!formValid || !film) && 'search-form__button_disabled'}`} 
                    disabled={(!formValid || !film)}
                    type='submit'
                    onClick={handleButtonClick}
                >Найти</button>
            </div>
            <FilterCheckbox onCheckBoxClick={setShortSuitable} initState={isShort}/>
        </form>
    );
}

export default SearchForm;