import React, { useState,createContext } from 'react';

// import { useNavigate } from "react-router-dom";
import Axios from "./Axios/Axios";
export let Taskapi = createContext();



let contextApiProvider = ({children}) => {
  // let navigate = useNavigate();
  let [state, setstate] = useState({
    title: "",
    author: "",
    loading: false
  });
  let { title, author, loading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setstate({ loading: true });
      let payload = { title, author };
      await Axios.post("/posts", payload);
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
    setstate({ loading: false });
  };
  return (
    <Taskapi.Provider value={{ state, handleChange, handleSubmit }}>
      {children}
    </Taskapi.Provider>
  );
};
export default contextApiProvider;
