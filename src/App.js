import Router from "./pages/Router.js";
import Appbar from "./pages/Appbar.js";

function App() {
  return (
      <div style={{backgroundColor:"#d1ebf6"}}>
        <Appbar />
        <Router />
      </div>      
  );
}

export default App;