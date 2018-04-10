import * as React from 'react';
import './App.css';
import { TodoList } from './components/list';
import { connect } from 'react-redux';
import { SimpleSnackbar } from './components/toast';
import { dismissToast } from './actions';
import TextField from 'material-ui/TextField';
import { ChangeEvent } from 'react';
import Button from 'material-ui/Button';
import { updateTodo } from './firebase';

const mapStateToProps = ({list, toast, crud}: { list: number[], toast: any, crud: any }) => ({
  list,
  valToSave: crud.valToSave,
  toast,
});

export const App = connect(mapStateToProps, {
  dismiss: dismissToast,
  toSave: (e: ChangeEvent<any>) => ({type: 'cache_val', payload: parseInt(e.target.value, 10)}),
})(({
      list,
      toast,
      dismiss,
      toSave,
      valToSave,
    }) => (
  <div className="App">
    <SimpleSnackbar open={Boolean(toast.message)} message={toast.message} handleClose={dismiss}/>
    <TodoList list={list}/>

    <TextField
      id="number"
      label="Number"
      value={valToSave}
      onChange={toSave}
      type="number"
    />
    <Button disabled={!valToSave} onClick={() => updateTodo(list.concat(valToSave))}>Save</Button>
  </div>
));
