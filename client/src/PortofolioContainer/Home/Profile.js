import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
          <div className='colz-icon'>
            <a href='#'>
              <i className='fa fa-facebook-square'></i>
            </a>
            <a href='#'>
              <i className='fa fa-google-plus-square'></i>
            </a>
            <a href='#'>
              <i className='fa fa-instagram'></i>
            </a>
            <a href='#'>
              <i className='fa fa-youtube-square'></i>
            </a>
            <a href='#'>
              <i className='fa fa-twitter'></i>
            </a>
          </div> 
          </div>
        

        <div className="profile-details-name">
          <span className='primary-text'>
            {" "}
            Hello, I'M <span className='highlighted-text'>Pandu</span>
          </span>
        </div>
        <div className='profile-details-role'>
          <span className='primary-text'>
            {" "}
            <h1>
              {" "}
              <Typical 
                loop={Infinity}
                steps={[
                  "UI Enggineer",
                  1000,
                  "Frontend Developer",
                  1000,
                  "Fullstack Developer",
                  1000,
                  "Website Developer",
                  1000,
                ]}
              />
            </h1>
            <span className='profile-role-tagline'>
              Work Creative.
            </span>
          </span>
        </div>
        <div className='profile-options'>
          <button className='btn primary-btn'>
            {""}
            Hire Me{""}
          </button>
          <a href='Pandu-Prasetya-Putra-CV.pdf' download='Pandu-Prasetya-Putra.pdf'>
            <button className='btn highlighted-btn'>Get Resume</button>
          </a>
        </div>
      </div>
      <div className='profile-picture'>
        <div className='profile-picture-background'>

        </div>
      </div>
    </div>
    </div>
  )
}
