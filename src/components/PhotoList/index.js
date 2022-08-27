import { useState } from "react";
import Modal from "../Modal";

// alternatiely we could just call it 'props' and then use 'props.category' (it is .category, because we named the prop 'category' when we passed it down in the Gallery component)
// here we are using destructuring to rename the prop 'category'
function PhotoList({ category }) {
    // we use the 'useState()' Hook to manage the current photo state and make this data accesible to the 'Modal' component through props
    const [currentPhoto, setCurrentPhoto] = useState();
    // we set the initial state to 'false' because we don't want the modal to open until a user has clicked on an image
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [photos] = useState([
        {
            name: 'Grocery aisle',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Grocery booth',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Building exterior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Restaurant table',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Cafe interior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Cat green eyes',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Green parrot',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Yellow macaw',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Pug smile',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Pancakes',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Burrito',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Scallop pasta',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Burger',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Fruit bowl',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Green river',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Docks',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Panoramic village by sea',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Domestic landscape',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Park bench',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
    ]);

    // each object in the photo array was named 'image' in the currentPhotos.map()
    const toggleModal = (image, i) => {
        // we updated the current photo state using the 'setCurrentPhoto' function with the data retrieved through the click event
        setCurrentPhoto({...image, index: i})
        // when an image is clicked toggleModal is called and it sets isModalOpen to 'false'
        setIsModalOpen(!isModalOpen);
    }
    // we're going through each 'photo' in the 'photos' array, trying to find every photo that matches the 'category'.
    //  - if the photo matches the condition, it is returned in an array and assigned to 'currentPhotos'
    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
            {/* The Modal will only render if 'isModalOpen' is true */}
            {isModalOpen && (
                // onClose identifier was assigned the function 'toggleModal'
                <Modal currentPhoto={currentPhoto} onClose={toggleModal}/>
            )}
            <div className="flex-row">
                {/* we map the 'currentPhotos' array we created to display each photo that matches our currently selected category */}
                {/* the 'i' is interesting here. it is very crucial. it is determined by the index number of photo in the filtered and created currentPhotos. That means the photos must have names that correspond to what that 'i' index will be. This means that the photos must be place in src/assets/small/commercial in the order that they will be in currentPhotos. since [photos] created currentPhotos. then photos must also be placed ina way that will result in the index 'i' being the same name of the photo (i sort of rambled here sorry) */}
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    )

}

export default PhotoList;