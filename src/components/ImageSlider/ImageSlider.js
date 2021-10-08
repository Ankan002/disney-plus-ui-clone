import React,{useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import Slider from 'react-slick'
import sliderImageArray from '../ImageData/SliderImageArray';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "inline", position: 'absolute', right: '20px'}}
        onClick={onClick}
      />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{...style, display: "inline", position: 'absolute', left: '20px'}}
        onClick={onClick}
      />
    );
  }




const ImageSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        focusOnSelect: false,
    }

    const [imageArray, setImageArray] = useState([])

    useEffect(() => {
        setImageArray(sliderImageArray)
    }, [])


    return (
        <Carousel {...settings}>
            {
                imageArray.map((image) => (
                    <Wrap key={image.id}>
                        <img src={image.imageUri} alt='1' className='slider-image'  style={{cursor: 'pointer'}}/>
                    </Wrap>
                ))
            }
        </Carousel>
    )
}

export default ImageSlider


const Carousel = styled(Slider)`

    .slick-list{
        overflow: hidden;
    }

    ul li button {
        &:before{
            font-size: 10px;
            color: white
        }
    }

    ul li button {
        &:after{
            font-size: 10px;
            color: white
        }
    }

    @media (max-width: 768px){
        ul li button {
            &:before{
                font-size: 5px;
                color: white
            }
        }
    }

    li.slick-active button::before{
        color: white;
    }

    button{
        z-index: 1000;
    }

    @media (max-width: 768px){
        button{
            z-index: -1000;
        }
    }

`
const Wrap = styled.div`
    img{
        width:100%;
        height: 100%;
        border-radius: 10px;
        margin-bottom: 10px;
        margin-top: 10px;
        padding-right: 10px
    }
    @media (max-width: 768px){
        img{
            height: 110px;
            margin-bottom: 5px;
        }
    }
`