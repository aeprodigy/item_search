
import { useRef } from 'react'
import './App.css';
import { Form } from 'react-bootstrap';

function App() {
 // useRef and Form.contol0
 const inputdata = useRef(null); 

 const handleInput=(event)=>{
  event.preventDefault();
 }

  return (
    <>
      <h1 className="text-dark">The Image Search</h1>

      <form onSubmit={handleInput}>
        
        <Form.Control
          type="search"
          ref={inputdata}
          placeholder="Please enter details"
          className="SearchInput"
        />
      </form>
    
    </>
  );
}

export default App
