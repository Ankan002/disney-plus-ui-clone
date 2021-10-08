import React from 'react'
import './IndividualMovieSection.css'

const IndividualMovieSection = (props) => {

    const movieDataSet= props.movieDataSet

    return (
        <div class='movie-section'>
            {
                movieDataSet.map((image) => (
                    <div className='movie' key={image.id}>
                        <img src={image.imageUri} alt='recom1' className='image' />
                    </div>
                ))
            }
        </div>
    )
}

export default IndividualMovieSection
