import { Route } from "react-router-dom";
import PrivacyTerm from "./device/pc/components/PrivacyTerm";
import UsageTerm from "./device/pc/components/UsageTerm";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Route path="/" exact={true} component={Main} />
      <Route path="/privacy" exact={true} component={PrivacyTerm} />
      <Route path="/usage" exact={true} component={UsageTerm} />
    </div>
  );
}

export default App;
