import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LatestReviews.scss'; // Assuming you have some basic styling

const LatestReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchLatestReviews = async () => {
      try {
        const response = await axios.get('http://localhost:3001/controllers/Review/latest');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching latest reviews', error);
      }
    };

    fetchLatestReviews();
  }, []);

  return (
    <section id="review" className="review-section">
    <div className="latest-reviews">
      <h2>Latest Reviews</h2>
      <table className="reviews-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Rating</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
        {[
          { username: "Bashi", rating: 5, comment: "Amazing service! Highly recommended." },
          { username: "Bashi S", rating: 4, comment: "Good experience, but could be faster." },
          { username: "Bashini Sankalpana", rating: 5, comment: "Loved the doctor recommendation feature!" },
          { username: "Ama", rating: 3, comment: "It was okay, but needs more features." },
          { username: "linda_g", rating: 4, comment: "Helpful app, very user-friendly." }
        ].map((review, index) => (
          <tr key={index}>
            <td>{review.username}</td>
            <td className="rating">{review.rating}</td>
            <td>{review.comment}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
    </section>
  );
};

export default LatestReviews;