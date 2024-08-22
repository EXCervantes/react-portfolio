import {useState} from "react"
import {validateEmail} from "../utils/validators"

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const [error, setError] = useState('');

	const handleInputChange = (e) => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		if (inputType === 'name') {
			setName(inputValue);
		} else if (inputType === 'email') {
			setEmail(inputValue);
		} else {
			setMessage(inputValue);
		}
        setError('');
	};

    const validateInputs = () => {
        if (!name) {
			setError('A valid name is required.');
			return;
		}
		if(!validateEmail(email) || !email) {
			setError('A valid email is required.');
			return;
		}

		if (!message || message.length < 150) {
			setError('Please enter a message of at least 150 characters.');
			return;
		}
        return true;
    }

	const handleFormSubmit = (e) => {
		e.preventDefault();

        if(!validateInputs()) {
            return
        }

		const msg = 'Thank you, ' + name + '! I will get back to you as soon as possible!';
		setSuccessMessage(msg);
        setError('');

		setName('');
		setEmail('');
		setMessage('');
	};

    return (
        <div className="mx-auto max-x-3xl p-2" id="contact">
            <h2 className="mt-20 text-center text-6xl font-semibold tracking-tighter">
                Contact Me!
            </h2>
            <form onSubmit={handleFormSubmit}>
                <div className="flex flex-col justify-center items-center mb-4 min-h-screen">
                    <input type="text"
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Your Name"
                        onChange={handleInputChange}
                        onBlur={validateInputs}
                        className="mb-8 w-1/2 shadow-glow appearance-none rounded-none border border-gray-900 bg-transparent px-3 py-2 text-base focus:border-gray-400 focus:outline-none" 
                    />
                    <input type="text"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={handleInputChange}
                        onBlur={validateInputs}
                        className="mb-8 w-1/2 appearance-none rounded-none border border-gray-900 bg-transparent px-3 py-2 text-base focus:border-gray-400 focus:outline-none" 
                        />
                    <input type="text"
                        id="message"
                        name="message"
                        value={message}
                        placeholder="Type Message Here"
                        onChange={handleInputChange}
                        onBlur={validateInputs}
                        className="mb-8 w-1/2  appearance-none rounded-none border border-gray-900 bg-transparent px-3 py-2 text-base focus:border-gray-400 focus:outline-none"
                    />
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" type="submit" >
                    Submit
                    </button>
                        <div className="pt-4">
                            <p>{error || successMessage}</p>
                        </div>
                </div>
            </form>
        </div>
    )
}

export default Contact