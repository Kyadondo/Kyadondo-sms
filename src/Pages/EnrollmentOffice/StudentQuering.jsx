import React from 'react';
import './StudentQ.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const StudentQuering = () => {


  
  return (
    <>
      <div className="search-bar">
        <div className="search-box">
          <input type="text" id="search-input" placeholder="Search By Name or Registration Number ........" />
          <button id="search-btn">
            <FontAwesomeIcon icon={faArrowRight} size="lg"  />
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentQuering;
