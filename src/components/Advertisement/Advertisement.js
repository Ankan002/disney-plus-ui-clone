import React,{useEffect, useState} from 'react'
import './Advertisement.css'
import AdImageArray from '../ImageData/AdImageArray'

function Advertisement() {

    const [adImages, setAdImages]= useState([])

    useEffect(() => {
        setAdImages(AdImageArray)
    }, [])

    return (
        <div className='advertisements'>
            {
                adImages.map((image) => (
                    <div className='image-container' key={image.id}>
                        <img className='image' src={image.imageUri} alt='ad1'/>
                    </div>
                ))
            }
        </div>
        
    )
}

export default Advertisement
