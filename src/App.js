import './App.css';
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.css';
import LoginFunctional from './LoginFunctional'
import{
    BrowserRouter,Switch,Route,Link
}from 'react-router-dom'
function App() {
    return ( 
    <div className = "App" >
  <BrowserRouter>
  
 
        <Switch>
            <Route path="/login">
                 <Link to="/">LoginFunctional</Link>
        <Login></Login>
        
        </Route>
            <Route path="/">
                <Link to="/login">Login</Link>
                <LoginFunctional></LoginFunctional>
            </Route>
            
        </Switch>
    </BrowserRouter>

         </div>
    );
}

export default App;