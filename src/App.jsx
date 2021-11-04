import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/welcome";
import Products from "./pages/products";
import Header from "./components/header";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/welcome' />
        </Route>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/products' exact>
          <Products />
        </Route>
        <Route path='/products/:productId'>
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
