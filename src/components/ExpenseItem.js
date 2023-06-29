import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({ //dispatching an action. Your action contains the type 
            //(so the reducer knows how to update the state) and the payload.
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    const plusinlineStyles = {
        borderRadius: '50%',
        backgroundColor:'green',
        color:'white',
        fontWeight: '800',
        //padding:'6px',
        border:'none',
        marginLeft:'40px',
        fontSize: '25px',
      };
      const minusinlineStyles = {
        borderRadius: '50%',
        backgroundColor:'darkred',
        color:'white',
        fontWeight: '800',
        fontSize: '25px',
        //padding:'6px',
        border:'none',
        marginLeft:'40px',
        //fontSize:'200%',
      };
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={plusinlineStyles} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={minusinlineStyles} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;
