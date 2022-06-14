import React, {useReducer} from 'react';

import './App.css';
import reducer, {initialState} from '../reducers/index';
import * as actions from '../actions/index';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  // const addOneHandler = e => {
  //   e.preventDefault
  //   return dispatch(actions.addOne())
  // } 

  const applyNumHandler = e => {
    return dispatch(actions.applyNumber(e.target.value))
  }

  const handleChangeOperator = e => {
    return dispatch(actions.changeOperation(e.target.value));
  }

  const handleClear =() => {
    return dispatch(actions.clearDisplay())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={applyNumHandler}/>
              <CalcButton value={2} onClick={applyNumHandler}/>
              <CalcButton value={3} onClick={applyNumHandler}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={applyNumHandler}/>
              <CalcButton value={5} onClick={applyNumHandler}/>
              <CalcButton value={6} onClick={applyNumHandler}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={applyNumHandler}/>
              <CalcButton value={8} onClick={applyNumHandler}/>
              <CalcButton value={9} onClick={applyNumHandler}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleChangeOperator}/>
              <CalcButton value={"*"} onClick={handleChangeOperator}/>
              <CalcButton value={"-"} onClick={handleChangeOperator}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
