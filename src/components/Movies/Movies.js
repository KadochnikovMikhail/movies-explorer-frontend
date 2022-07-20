import React from "react";
import './Movies.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


function Movies({movies}) {
    return (
        <div className='movies'>
            <Header isActive={true}/>
            <SearchForm />
            <MoviesCardList movies={movies}/>
            <button className="movies__even-more">Еще</button>
            <Footer />
        </div>
    );
}

export default Movies;