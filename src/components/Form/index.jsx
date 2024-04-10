
import { useState } from 'react';
const Form = () => {
    const [name, setName] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('username', name);
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="What is your name?" onChange={(e) => setName(e.target.value)} />
            <button>Send</button>
       </form>  
    )
}

export default Form;