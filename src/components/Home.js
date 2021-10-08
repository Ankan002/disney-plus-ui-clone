import React from 'react'
import ImageSlider from './ImageSlider/ImageSlider';
import Advertisement from './Advertisement/Advertisement'
import MovieSections from './MovieSections/MovieSections';



const Home = () => {
    return (
        <div>
            <ImageSlider />
            <Advertisement />
            <MovieSections />
        </div>
    )
}

export default Home
