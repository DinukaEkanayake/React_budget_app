import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, setBudget } = useContext(AppContext);
    const [inputValue, setInputValue] = useState(budget);
  
    const handleInputChange = (event) => {
      const value = event.target.value;
      setInputValue(value);
    };
  
    const handleInputBlur = () => {
        const newBudget = parseInt(inputValue);
        if (!isNaN(newBudget)) {
          setBudget(newBudget);
        } else {
          setInputValue(budget);
        }
      };
    
  
    return (
      <div className='alert alert-secondary'>
        <span>Budget: £</span>
        <input
          type='number'
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </div>
    );
  };
  
//Here, you are using the Bootstrap Alert classes to give a nice gray background 
//by adding some text and hard coding a value.
export default Budget;
