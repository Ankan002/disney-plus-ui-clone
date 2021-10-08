import React,{useState, useEffect} from 'react'
import './MovieSections.css'
import IndividualMovieSection from '../IndividualMovieSection/IndividualMovieSection'
import MovieSectionDataArray from '../ImageData/MovieSectionsDataArray'

const MovieSections = () =>  {

    const [movieDataArray, setMovieDataArray]= useState([])

    useEffect(() => {
        setMovieDataArray(MovieSectionDataArray)
    },[])

    return (
        <div className= 'movie-sections'>
            {
                movieDataArray.map((movieData) => (
                    <div key={movieData.id}>
                    <h3 class='movie-section-title'>{movieData.title}</h3>
                    <IndividualMovieSection movieDataSet={movieData.images} />
                    </div>
                ))
            }
            
        </div>
    )
}

export default MovieSections
