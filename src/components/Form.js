import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function Form() {
  let navigate = useNavigate();

  const addreview = (newreview) => {
    axios
      .post(`${API}/reviews`, newreview)
      .then(
        () => {
          navigate(`/reviews`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [review, setReview] = useState({
    name: "",
    message: "",
  });

  const handleTextChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addreview(review);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={review.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter Name"
          required
        />
        <label htmlFor="message">Message:</label>
        <input
          id="url"
          type="text"
          required
          value={review.url}
          placeholder="Enter Message"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form