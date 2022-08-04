import { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {

    // the hook that will manage the form data
    //  - a feature of useState() is the ability to initialize the values of the state
    //      - we want to clear the input values on the component loading
    //          - thus we'll set the initial state to empty strings.
    //  - formState will have three three key-value pairs to represent the three user inputs: name, email, message
    const [formState, setFormState] = useState({ name:'', email:'', message:'' });
    
    // we destructure the 'formState' object into its named properties.
    //  - now we can just use these constants (name, email, message) instead of formState.name, formState.email, formState.message.
    const { name, email, message } = formState;

    // we can use 'isValid' to determine the error message
    // the error message must now be defined and declared so that we can use it for the different errors that occur.
    // we can use useState() to handle the error state
    // note that the initial state of the 'errorMessage' is an empty string 
    const [errorMessage, setErrorMessage] = useState('');

    // Handles error messaging will you are typing
    function handleChange(e) {
        // email validation
        //  - if the name attribute of the input is email, then check to see if Email is valid, using the helper function
        if (e.target.name === 'email') {
            // isValid will be false if it is not an email format
            // isValid will be true if it does match and email format
            const isValid = validateEmail(e.target.value);
            // console.log(isValid);

            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }

          // if the e.target is not 'email'  
        } else {
            // if the target input value is false, aka the field is blank
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        // we're using 'setFormState' to update the 'formState' for the name property
        //  - we assign the value taken from the input field in the UI with 'e.target.value' and assign this value to the property 'formState.name'
        //  - we use the spread operator '...formState'
        //      - so we can retain the other key-value pairs in this object
        //      - without the spread operator, the 'formState' object would be overwritten to only contain the 'name: value' key pair
        //  - [e.target.name] actually refers to the name attribute of the form element
        //      - this attribute value matches the property names of 'formState' (name, email, and message)
        //      - and allows us to use '[]' to create dynamic property names
        //          - ??? how does '[]' allow us to create dynamic property names
        //          - from doc:
        //              - allows you to put an expression in brackets [], that will be computed and used as the property name
        //              - so basically it won;tcaluclate when the e.target.name is, the name attribute on the input we changed, until the onChange={handleChange} is ran
        // the conditional is so the state only updates if the form data has passed the quality tests
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value }) 
        }
        

        // console.log('errorMessage', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // this will be left o=for the back-end developers to finish.
        console.log(formState);
    }

    // because the asynchronous nature of the setFormState function will cause the console.log placed in the function body of handleChange to appear delayed in its ability to sync. However, when we place the console.log in the scope of the ContactForm function, we can see that the state is updated properly,
    console.log(formState);

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    {/* because javascript already has a keyword reserved named 'for', when we are in JSX we use htmlFor */}
                    <label htmlFor="name">Name:</label>
                    {/* here we are use the constants we destructured from the formState to assign the initital state, which are empty strings, to the defaultValue */}
                    {/*     - this 'defaultValue={name}' assignment will effectively clear the input fields in the user interface */}
                    {/* the 'onChange' event listener will ensure that the 'handleChange' function fires whenever a keystroke is typed into the input field for name */}
                    {/* We changed 'onChange' to 'onBlur.' onBlur isn't triggered until you click away from the field */}
                    <input type="text" name="name" onBlur={handleChange} defaultValue={name} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" onBlur={handleChange} defaultValue={email}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" onBlur={handleChange} defaultValue={message} />
                </div>
                {/* if there is an errorMessage it will conditionally render the error message to the user */}
                {/* the && operator is being used here as a short circuit. If the first value resolves to 'true', the second expression is evaluted */}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;