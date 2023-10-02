import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // ALTERNATIVA USAR oneState
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  // antes
  // document.getElementById('').addEventListener('click',(event)=>{})

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(event.target.value);

    // ALTERNATIVA
    // setUserInput = (prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // };
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // ALTERNATIVA
    // setUserInput = (prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // };
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // ALTERNATIVA
    // setUserInput = (prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // };
  };

  // ALTERNATIVA...USO DE FUNCION UNICA COMPARTIDA HANDLER
  // const inputChangeHandler = (identificador, value) => {
  //   if (identificador === 'title') {
  //     setEnteredTitle(value);
  //   } else if (identificador === 'date') {
  //     setEnteredDate(value);
  //   } else {
  //     setEnteredAmount(value);
  //   }
  // };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
          {/* <input
            type="text"
            onChange={(event) =>
              inputChangeHandler('title', event.target.value)
            }
          /> */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
          {/* <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) =>
              inputChangeHandler('amount', event.target.value)
            }
          /> */}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
          {/* <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(event) => inputChangeHandler('date', event.target.value)}
          /> */}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;