import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" exact Component={ProductListing} />
        <Route path="/product/:productId" exact Component={ProductDetail}/>
        <Route>404 Not found!</Route>
      </Routes>
    </Router>
  );
}

export default App;
