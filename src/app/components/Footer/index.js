import React from 'react';
import data from './data';

import IconLink from './IconLink';
import './index.scss';

function Footer() {
  return (
    <footer className="Footer">
      {data.map(({ href, icon }, index) => (
        <IconLink key={index} href={href} icon={icon} />
      ))}
    </footer>
  );
}

export default Footer;
