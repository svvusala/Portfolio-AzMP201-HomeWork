import "./App.css";
import { useReducer } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Pages/Home/Home";
import Admin from "./components/Pages/Admin/Admin";
import Post from "./components/Pages/Post/Post";
import Edit from "./components/Pages/Edit/Edit";
import reducer from "./components/Reducer/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    filteredProd: [],
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home state={state} dispatch={dispatch} />} />
            <Route
              path="admin"
              element={<Admin state={state} dispatch={dispatch} />}
            />
            <Route path="post" element={<Post />} />
            <Route path="edit/:id" element={<Edit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
