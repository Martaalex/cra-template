import React from 'react';
import './index.scss';

import data from './data';

function Header() {
  return (
    <header className="Header">
      <h1>{data.en.name}</h1>
      <hr />
      <p className="Header--contact">
        {`${data.en.contacts.phone.label} ${data.en.contacts.phone.value}`}
      </p>
      <p className="Header--contact">
        {`${data.en.contacts.email.label} `}
        <a
          href={`mailto:${data.en.contacts.email.value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.en.contacts.email.value}
        </a>
      </p>
      <p className="Header--summary">{data.en.summary}</p>
      <img
        className="Header--profile-picture"
        alt={data.en.picture.alt}
        src={data.en.picture.src}
      />
    </header>
  );
}

export default Header;
