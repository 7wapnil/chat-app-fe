import { Alert } from '@material-ui/lab';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AppRouter from './routers/AppRouter';
import { history } from './helpers/history';
import { alertActions } from './actions/alertActions';

function App() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }, [dispatch]);

  return (
    <div>
      { alert.message && <Alert severity={alert.type}>{alert.message}</Alert> }
      <AppRouter />
    </div>
  );
}

export default App;
