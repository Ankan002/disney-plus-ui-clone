//Recommended List images
import r1 from '../../images/scale11.jpg'
import r2 from '../../images/scale3.jpg'
import r3 from '../../images/scale12.jpg'
import r4 from '../../images/scale.jpg'

//New to Disney Images
import nd1 from '../../images/scale9.jpg' 
import nd2 from '../../images/scale15.jpg'
import nd3 from '../../images/badging3.jpg'
import nd4 from '../../images/scale13.jpg' 

//Originals Images
import o1 from '../../images/badging2.jpg'
import o2 from '../../images/badging.jpg'
import o3 from '../../images/badging7.jpg'
import o4 from '../../images/badging6.jpg'

//Trending Images
import t1 from '../../images/scale5.jpg'
import t2 from '../../images/scale18.jpg'
import t3 from '../../images/scale4.jpg'
import t4 from '../../images/scale14.jpg'


//Main array data

const MovieSectionDataArray = [
    {
        id: 1,
        title: 'Recommended For You',
        images: [
            {
                id: 'image1',
                imageUri: r1
            },{
                id: 'image2',
                imageUri: r2
            },{
                id: 'image3',
                imageUri: r3
            },{
                id: 'image4',
                imageUri: r4
            }
        ]
    },{
        id: 2,
        title: 'New to Disney+',
        images: [
            {
                id: 'image1',
                imageUri: nd1
            },{
                id: 'image2',
                imageUri: nd2
            },{
                id: 'image3',
                imageUri: nd3
            },{
                id: 'image4',
                imageUri: nd4
            }
        ]
    },{
        id: 3,
        title: 'Originals',
        images: [
            {
                id: 'image1',
                imageUri: o1
            },{
                id: 'image2',
                imageUri: o2
            },{
                id: 'image3',
                imageUri: o3
            },{
                id: 'image4',
                imageUri: o4
            }
        ]
    },{
        id: 4,
        title: 'Trending',
        images: [
            {
                id: 'image1',
                imageUri: t1
            },{
                id: 'image2',
                imageUri: t2
            },{
                id: 'image3',
                imageUri: t3
            },{
                id: 'image4',
                imageUri: t4
            }
        ]
    }
]

export default MovieSectionDataArray