import React, { useState } from "react";

const SignInForm = ({ visible, onclose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password", password);
        onclose();
    };

    return(
        <div 
              className="form-container" 
              style={{ 
                backgroundColor: "green", 
                padding: "20px", 
                borderRadius: "5px", 
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" 
              }}
            >
              <h2 
                style={{ 
                  textAlign: "center", 
                  marginBottom: "20px", 
                  color: "white" 
                }}
              >
                Sign In
              </h2>
              <form onSubmit={handleSubmit}>
                <div 
                  className="form-group" 
                  style={{ 
                    marginBottom: "10px" 
                  }}
                >
                  <label 
                    htmlFor="email" 
                    style={{ 
                      display: "block", 
                      marginBottom: "5px", 
                      color: "white" 
                    }}
                  >
                    Email:
                  </label>
                  <input 
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ 
                      width: "100%", 
                      padding: "8px", 
                      fontSize: "16px", 
                      borderRadius: "5px", 
                      border: "1px solid white",
                      backgroundColor: "white",
                      color: "green"
                    }}
                  />
                </div>
                <div 
                  className="form-group" 
                  style={{ 
                    marginBottom: "20px" 
                  }}
                >
                  <label 
                    htmlFor="password" 
                    style={{ 
                      display: "block", 
                      marginBottom: "5px", 
                      color: "white" 
                    }}
                  >
                    Password:
                  </label>
                  <input 
                    type="password"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ 
                      width: "100%", 
                      padding: "8px", 
                      fontSize: "16px", 
                      borderRadius: "5px", 
                      border: "1px solid white",
                      backgroundColor: "white",
                      color: "green"
                    }}
                  />
                </div>
                <button 
                  type="submit"
                  style={{ 
                    backgroundColor: "white", 
                    color: "green", 
                    padding: "10px 20px", 
                    border: "none", 
                    borderRadius: "5px", 
                    fontSize: "16px", 
                    cursor: "pointer" 
                  }}
                >
                  Log In
                </button>
              </form>
            </div>
          );
                }

export default SignInForm;