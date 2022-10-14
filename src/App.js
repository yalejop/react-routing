import { BrowserRouter, Switch, Route } from "react-router-dom";
import ComponenteParametros from "./components/ComponentesParametros/ComponenteParametros";
import Home from "./components/Home/Home";

const App = () => {
  
  return(
    <BrowserRouter>
    
      <div className="container">
          <Switch>
            <Route path='/home' render={() => <Home/>}/>
            <Route path='/:palabra' exact render={(routerProps) => <ComponenteParametros {...routerProps}/>}/>
            <Route path='/:palabra/:color/:bg' exact render={(routerProps) => <ComponenteParametros {...routerProps}/>}/>

          </Switch>
      </div>

    </BrowserRouter>
  );

}

export default App;
