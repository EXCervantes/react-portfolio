import {useState} from "react"

const Contact = () => {
    const [formInput, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [error, setError] = useState({})

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
    
        setFormData({email: stringify, me})
    
        return value;
      };

    return (
        <div></div>
    )
}

export default Contact