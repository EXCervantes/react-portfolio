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
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!name) {
			setError('A valid name is required.');
			return;
		}
		if(!validateEmail(email) || !email) {
			setError('A valid email is required.');
			return;
		}

		if (!message) {
			setError('Message is required!');
			return;
		}
		const msg = 'Thank you, ' + name + '! I will get back to you as soon as possible!';
		setSuccessMessage(msg);

		setName('');
		setEmail('');
		setMessage('');
	};

    return (
        <div className="mx-auto max-x-3xl p-4" id="contact">
            <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
                Contact Me!
            </h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <input type="text"
                        id="name"
                        name="name"
                        value={FormData.name}
                        placeholder="Your Name"
                        onChange={handleInputChange}
                        className="mb-8 w-full appearance-none rounded-none border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none" />
                </div>
            </form>
        </div>
    )
}

export default Contact