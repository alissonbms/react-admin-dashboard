import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Styles
import "./App.css";

//Pages
import Home from "./pages/home/Home";
import ListData from "./pages/listData/ListData";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

//Utilities
import { userInputs, productInputs } from "./formSource";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route path="users">
            <Route index element={<ListData />} />
            <Route path=":userid" element={<Single />} />
            <Route
              path="new"
              element={<New title="Add new User" inputs={userInputs} />}
            />
          </Route>
          <Route path="products">
            <Route index element={<ListData />} />
            <Route path=":productid" element={<Single />} />
            <Route
              path="new"
              element={<New title="Add new Product" inputs={productInputs} />}
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
