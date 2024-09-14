import React, { useContext, useState } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`main ${darkMode ? 'dark-mode' : ''}`}>
      <div className="nav">
        <p>Gemini</p>
        
        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          <img src={assets.user_icon2} alt="" />
        </button>
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, Uzma.</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>What’s the top destination on your travel bucket list?</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>What’s one new thing you want to learn today?</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>What’s a small habit you can improve to make your day better?</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>What’s one coding habit you can improve to write cleaner, more efficient code?</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon2} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              
              <img src={assets.mic_icon} />
              {input ? <img onClick={() => onSent()} src={assets.send_icon} /> : null}
            </div>
          </div>
          <p className="bottom-info">Chat to start writing, planning, learning and more with Google AI</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
