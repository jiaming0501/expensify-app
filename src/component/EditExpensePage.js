import React from 'react';
import { connect } from 'react-redux';
import ExpenseFrom from './ExpenseForm';
import {startRemoveExpense, startEditExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseFrom 
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(props.expense.id, expense));
          props.history.push('/');
          // console.log('updated', expense);
        }}
      />
      <button onClick={() => {
        props.dispatch(startRemoveExpense({id: props.expense.id}));
        props.history.push('/');
      }} >Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    })
  };
};
export default connect(mapStateToProps)(EditExpensePage);