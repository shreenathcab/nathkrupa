import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./style.css";

const Review = () => {
    const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const apiKey = 'AIzaSyB_wD7g6jwr1f0xH6e6jv5mOF-GO1O6elY';
    const placeId = 'ChIJOeK3L6XDwjsRjRBSuHA_fa0'; // You can get this from your Google My Business account

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

    axios.get(url)
      .then(response => {
        const fetchedReviews = response.data.result.reviews;
        setReviews(fetchedReviews);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);
  return (
    <div className="review-carousel-container">
      {reviews.length > 0 ? (
        <div className="carousel">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <p className="review-text">{review.text}</p>
              <p className="review-details">{review.rating} stars by {review.author_name}</p>
            </div>
          ))}
        </div>
      ) : (""
        // <p>Loading reviews...</p>
      )}
    </div>
  )
}

export default Review