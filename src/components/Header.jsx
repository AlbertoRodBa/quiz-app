import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

function Header({ title }) {
  return (
    <header className="header">
      <div className="header-title">
        <h1>{title}</h1>
        <FontAwesomeIcon icon={faCircleQuestion} className="question-icon" />
      </div>
    </header>
  );
}

export default Header;
