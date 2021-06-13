import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Chat Time <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Text and video call at one place. </h2>
      <h2>Developed by Chaytanya with <span role="img" aria-label="emoji">❤️</span></h2>
      <h2><a href="https://video-chat-app-jsm.netlify.app/" target="_blank" >Video call</a></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;