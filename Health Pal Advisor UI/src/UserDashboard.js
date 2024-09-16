import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.scss'; // Assuming Dashboard.scss exists for styling

const Dashboard = () => {
  const [userData, setUserData] = useState(null); // State to store user data
  const [showReviewPrompt, setShowReviewPrompt] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/controllers/dashboard', {
          withCredentials: true // Include credentials (cookies) in the request
        });

        console.log('User data response:', response);
        setUserData(response.data);

        // Always display the review prompt when the Dashboard loads
        setShowReviewPrompt(true);
        
      } catch (error) {
        console.error('Error fetching user data:', error);
        history.push('/login');
      }
    };

    fetchUserData();
  }, [history]);

  useEffect(() => {
    const redirectToDashboard = sessionStorage.getItem('redirectToDashboard');
    if (redirectToDashboard) {
      sessionStorage.removeItem('redirectToDashboard');
      history.push('/dashboard'); // Adjust the path if needed
    }
  }, [history]);

  // Updated function to redirect to Streamlit UI
  const handleHealthRecommendationClick = () => {
    window.location.href = 'http://localhost:8501/'; // Redirects to the Streamlit UI
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3001/controllers/Logout', {}, {
        withCredentials: true // Include credentials (cookies) in the request
      });

      history.push('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleReviewClick = () => {
    history.push('/ReviewForm');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        {/* App Name */}
        <div className="app-name">HEALTHPAL ADVISOR</div>
        
        {/* Sidebar Options */}
        <ul className="sidebar-options">
          <li className="sidebar-option" onClick={handleHealthRecommendationClick}>
            <i className="fas fa-utensils"></i> 
            <span>Health Recommendation</span>
          </li>
        </ul>

        <div className="sidebar-logout" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i> {/* Icon for Logout */}
          <span>Logout</span>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        {/* Content Title */}
        <h1>Welcome to Your Dashboard</h1>
        
        {/* Display user data */}
        {userData && (
          <div className="user-info">
            <p>Hi {userData.username}</p>
            <p>Email: {userData.email}</p>
          </div>
        )}

        {/* Placeholder Content */}
        <p>This is where you can view your health recommendations.</p>

        {/* Always show the review prompt */}
        {showReviewPrompt && (
          <div className="review-prompt">
            <p>We value your feedback! Please <button onClick={handleReviewClick}>submit a review</button> for the recommendation you just used.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
