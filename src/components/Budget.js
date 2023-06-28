import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch,budget,expenses } = useContext(AppContext);
    const [inputValue, setInputValue] = useState(budget);

    const handleInputButtons = (event) => {
      const newValue = parseInt(event.target.value);
    
      if (newValue > inputValue) {
        if (newValue>20000) {

          alert("Value cannot exceed 20000");
          
        }else{
          setInputValue(newValue+9);
            
        const increment = {
          amount: 10,
          inputValue: inputValue,
        };

        dispatch({ //dispatching an action. Your action contains the type 
          //(so the reducer knows how to update the state) and the payload.
          type: 'SET_BUDGET',
          payload: increment,
        });

        }

      } else if (newValue < inputValue) {
        const totalExpenses = expenses.reduce((total, item) => {
          return (total = total + item.cost);
      }, 0);
        if (newValue < totalExpenses) {
          alert('You cannot reduce the budget value lower than the spending');
        }else{
          setInputValue(newValue-9);
            const decrement = {
              amount: -10,
              inputValue: inputValue,
            };

            dispatch({ //dispatching an action. Your action contains the type 
              //(so the reducer knows how to update the state) and the payload.
              type: 'SET_BUDGET',
              payload: decrement,
          });
        }
      }
    };

    return (
      <div className='alert alert-secondary'>
        <span>Budget: £</span>
        <input
          type='number'
          value={inputValue}
          onChange={handleInputButtons}
        />
      </div>
    );
  };
  
export default Budget;
