/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, userName, handleLogout }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State for controlling dropdown visibility
  const navigate = useNavigate(); // Use navigate instead of history

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible); // Toggle dropdown visibility
  };

  const handleSearch = () => {
    const username = prompt('Enter username to search'); // Example search logic
    if (username) {
      navigate(`/user/${username}`); // Navigate to user profile page
    }
  };

  return (
    <header
      style={{
        backgroundColor: "#1E201E",
        color: "white",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%", // Ensure header spans the full width
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>THOUGHTLY</div>
      <nav
        style={{
          display: "flex",
          gap: "2rem",
          position: "relative", // Added relative positioning to allow for absolute positioning of the dropdown
        }}
      >
        <Link to="/blog/allBlogs" style={{ color: "white", textDecoration: "none", fontSize: "0.9rem" }}>
          Home
        </Link>
        {!isLoggedIn ? (
          <Link to="/user/login" style={{ color: "white", textDecoration: "none", fontSize: "0.9rem" }}>
            Login/Register
          </Link>
        ) : (
          <>
            <div
              style={{ display: "inline-block", position: "relative" }} // Ensure the parent is positioned for dropdown control
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <Link
                to="/blog/addBlog"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                }}
              >
                AddBlog
              </Link>
              {isDropdownVisible && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%", // Position the dropdown below the "AddBlog" link
                    left: 0,
                    backgroundColor: "#1E201E",
                    border: "1px solid #444",
                    borderRadius: "5px",
                    zIndex: 1,
                    minWidth: "150px",
                    display: "flex",
                    flexDirection: "column", // Ensure the options stack vertically
                  }}
                >
                  <Link
                    to="/blog/addBlog"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      display: "block",
                      padding: "0.5rem",
                    }}
                  >
                    Create Blog
                  </Link>
                  <Link
                    to="/blog/AI"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      display: "block",
                      padding: "0.5rem",
                    }}
                  >
                    Create with AI
                  </Link>
                </div>
              )}
            </div>
            <Link to="/user/profile" style={{ color: "white", textDecoration: "none", fontSize: "0.9rem" }}>
          {userName}
        </Link>
            <Link to="/user/search" style={{ color: "white", textDecoration: "none", fontSize: "0.9rem" }}>
          SearchUser
        </Link>
        <span
              onClick={handleLogout}
              style={{
                cursor: "pointer",
                color: "white",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              Logout
            </span>
          </>
        
        )
        }
        
      </nav>
    </header>
  );
};

export default Header;