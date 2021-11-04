import { Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Products from "./pages/products";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <Route path='/welcome'>
        <Welcome />
      </Route>
      <Route path='/products'>
        <Products />
      </Route>
    </div>
  );
}

export default App;
