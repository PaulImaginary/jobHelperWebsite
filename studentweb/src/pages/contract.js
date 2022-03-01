import React from 'react';
//import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
//import { Redirect } from 'react-router-dom';

const h1Style = {
	color: '#FF1800',
	display: 'flex',
	justifyContent: 'center'
}

const formStyle = {
    margin: 'auto',
    padding: '20px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
	width: '800px',
	height: '350px',
    display: 'block'
};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '50px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
	width: '100%'
};

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    //background: '#3085d6',
	background: '#FF1800',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
};

const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label style={labelStyle} >{label}</label>
        <input ref={ref} type={type} style={inputStyle} />
      </div>
    );
});

const Form = ({onSubmit}) => {
    const enquiringTypeRef = React.useRef();
    const enquiriesRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: enquiringTypeRef.current.value,
            password: enquiriesRef.current.value
        };
        onSubmit(data);
    };
    return (
		<form style={formStyle} onSubmit={handleSubmit} >
        <Field ref={enquiringTypeRef} label="What are you enquiring about:" type="text" />
        <Field ref={enquiriesRef} label="Type in your enquiries here:" type="text" />
        <div>
          <button style={submitStyle} type="submit">Submit</button>
        </div>
      </form>
    );
};

// Usage example:

const Contract = () => {
    const navigate = useNavigate();
    const handleSubmit = data => {
        
        const json = JSON.stringify(data, null, 4);
        console.clear();
        console.log(json);
        const uName = "abc"
        const uPw = "1234"
        console.log(data.username)
        if (data.username === uName && data.password === uPw){
          console.log("login successful")
          navigate('/');
          // history.push('/')
        }else{
          console.log("incorrect username or pw")
        }
    };
    return (
	  <div>
		<h1 style={h1Style}>Contact us</h1>
		<h3>Enquiries will take 1-3 working days to be answered. Kindly select the right category for the enquiry that you are looking to make. Responds will be via email linked to the account.</h3>
		<h1 style={h1Style}>ENQUIRIES FORM</h1>
        <Form onSubmit={handleSubmit} />
      </div>
    );
};

export default Contract;

