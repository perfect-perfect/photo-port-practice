import './App.css';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import About from './components/About';
import { useState } from "react";



function App() {
	// We initialize the category state as an array of objects
	//	- This could be just a regular array, rather than an array inside 'useState', we we chose to use the 'useState' hook  here so that we can have the option to change the categories at some point in the future
	//		- ??? not sure what this means, how does declaring the object array as a useState allow us to change the categories at some point in the future?
    const [categories] = useState([
        {
            name: "commercial",
            description: "Photos of grocery stores, food trucks, and other commercial projects"
        },
        {
            name: "portraits",
            description: "Portraits of people in my life"
        },
        {
            name: "food",
            description: "Delicious delicacies"
        },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty if nature"
        }
    ]);

	// we're destructuring a pair of variables from the result of our useState(categories[0])
	//	- useState() is a function that will always retur an array.
	//		- the first term is the value of your state
	//			- currentCategory
	//		- the second is a 'setter', which allows you to set the state to something else.
	//			- setCurrentCategory
	//		- the [0] refers to the 'initial state'
	//		- useState is a React Hook that allows use to easily manage state within a component
	const [currentCategory, setCurrentCategory] = useState(categories[0]);

	return (
		<div>
			<Nav
				// we pass the catagories 
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				currentCategory={currentCategory}
			></Nav>
			<main>
				<Gallery></Gallery>
				<About></About>
			</main>
		</div>
	);
}

export default App;
