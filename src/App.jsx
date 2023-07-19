import './App.css';
import { TextField, InputAdornment, Button } from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [textInput, setTextInput] = useState('');
  const [toDoList, setToDoList] = useState([])
  const handleSubmit = () => {
    setToDoList([...toDoList, { id: uuidv4(), name: textInput }]);
    setTextInput('');
  }
  return (
    <>
      <TextField name='add-todo' variant='outlined' placeholder='Enter your task here...' value={textInput} onChange={e => setTextInput(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" color="primary" onClick={handleSubmit} disabled={!textInput}>
                Thêm
              </Button>
            </InputAdornment>),
        }}
      ></TextField>
      <ul>
        {toDoList.map(job => (
          <li key={job.id}>{job.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
