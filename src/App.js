import './App.css';
import Nav from './components/Nav';
import Contact from './components/Contact';
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

	// State to manage wheter the Contact component is displayed
	//	- contactSelected is set to false
	//		- this is to prevent the contact form from showing when a user initially navigates to the homepage
	//	- with 'contactSelected' we can establish a conditional statement to render the 'Gallery' and 'About' components when this value is false and the 'Contact' component when 'contactSelected' is true/
	const [contactSelected, setContactSelected] = useState(false);

	return (
		<div>
			<Nav
				// we pass the catagories 
				// We pass these props so we can modify the state, current category in the nav bar. There we add 'nanActive' to the Nav bar link that was clicked and we setCurrentCategory to the category that was clicked. This will determine what phots are displayed.
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				currentCategory={currentCategory}

				// Passing the getter and setter functions so from the Nav we can change the value of contactSelected and conditionally render the 'Contact' based on it's value. 
				contactSelected={contactSelected}
				setContactSelected={setContactSelected}
			></Nav>
			<main>
				{/* if 'contactSelected' is false, the 'Gallery' and 'About' components should be rendered, but if 'contactSelected' is trie, the 'Contact' component will be rendered */}
				{/* the a ? b : c format is called a 'ternary operator'. it is an if/else statement. It is similar to how we hised the '&&' operator as a short circuit. With the ternary though, we provide the false condition to render something as well */}
				{!contactSelected ? (
					// the us eof carrots here is called a 'React Fragment' is stands for '<React.Fragment></React.Fragment>
					// remember JSX can only return one parent element. this satisfies this requirement
					// also this allows you to wrap elements without creating extra DOM nodes, like wrapping with a '<div>' would do
					<>
						<Gallery currentCategory={currentCategory}></Gallery>
						<About></About>
					</>
				) : (
					<Contact></Contact>
				)}
			</main>
		</div>
	);
}

export default App;
