// import logo from './logo.svg';
import  SimpleNav  from "./Components/simple_nav/SimpleNav";
import  SimpleFooter  from "./Components/simple_footer/SimpleFooter";
import Sign from "./Components/pages/Sign";
import  Home  from "./Components/pages/home";
import { Route, Routes, BrowserRouter as Router} from "react-router-dom";
import './App.css';


function App() {
  return (
    <>
    <Router>
      <SimpleNav/>
        <Routes>
          <Route exact path="/:username" element={<Home/>}/>
          <Route exact path="/about" element={<SimpleNav/>}/>
          {/* <Route exact path="account.google.com/v3/signin/identifier_authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-502716160%3A1694238944211128&theme=glif" element={<Sign/>}/> */}
          <Route exact path="/contact" element={<Sign/>}/>
        </Routes>
    </Router>
    <Router>
    <SimpleFooter/>

    </Router>
    </>
  )
}

export default App;
