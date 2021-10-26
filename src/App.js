import "./App.css";
import UserPage from "./pages/UserPage";
import CountPage from "./pages/CountPage";
import { observer } from "mobx-react";
import { Switch, Route } from "react-router-dom";

const App = observer(() => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/count" component={CountPage} />
      </Switch>
    </div>
  );
});

export default App;
