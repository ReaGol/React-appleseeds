import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { default as Header, default as Homepage } from "./pages";
import Product from "./pages/Product";

function App() {
  const [store, setStore] = useState(productStore);
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/Homepage'/>
          </Route>
          <Route path='/homepage'>
            <Homepage />
          </Route>
          <Route path='/products' exact>
            <Product />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
