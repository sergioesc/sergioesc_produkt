import React, { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Auth } from "../Reducers.js";
import axios from "axios";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function MyProfile() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Auth);
  const { userInfo } = state;
  const params = useParams();
  const { id: userId } = params;
  const [{ loading, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({
          type: "FETCH_REQUEST",
        });
        const { data } = await axios.get(
          `http://localhost:5000/api/users/${userId}`
        );
        setName(data.name);
        setEmail(data.email);
        setProfileImage(data.imageProfile);
        dispatch({ type: "FETCH_SUCCESS" });
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
        });
      }
    };
    fetchData();
    if (!userInfo) {
      navigate("/");
    }
  }, [userId, userInfo]);
  return loading ? (
    <div> Loading </div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <div>
      {name}, {email}, {profileImage}
    </div>
  )
}
