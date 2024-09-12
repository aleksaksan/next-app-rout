import Link from 'next/link';
import React, { ReactNode } from 'react';

const AboutLayout = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <div>
      <h1>About us</h1>
      <ul>
        <li><Link href="/about/contacts">Contancts</Link></li>
        <li><Link href="/about/team">Team</Link></li>
      </ul>
      {children}
    </div>
  );
};

export default AboutLayout;