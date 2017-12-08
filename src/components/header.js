import React from 'react';

import TopNav from './top-nav';

export default function Header(props) {
  return (
    <header className="header">
      <h1 className="main-title">Daily Learner</h1>
      <h2 className="subtitle">Tracking life lessons one day at a time</h2>
      <TopNav />
    </header>
  )
}