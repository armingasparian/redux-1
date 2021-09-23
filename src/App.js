import './App.css';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {SelectName, editName, loadUser} from "./features/currentUsers/currentUserSlice";
import { useEffect } from 'react';

function App() {

  // const name = useSelector(function(state) {    // էս նույնը տարել եմ առանձին folder-ների ու file-երի միջև...
  //   return state.currentUser.name;
  // });

  const name = useSelector(SelectName);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <h1>{name}</h1>

      <input type="text" value={name}
        onChange = {(evt) => {
          // dispatch({                                // էս նույնը տարել եմ առանձին folder-ների ու file-երի միջև...
          //   type: "edit-current-user-name",
          //   payload: {
          //     name: evt.target.value,
          //   }
          // })
          dispatch(editName(evt.target.value));
        }}
      />
    </div>
  );
}

export default App;
