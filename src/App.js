import React from "react";
import './App.css';

export default () => (
  <div className="app">
    <header>
      <div className="header-content">
        <div>Header left</div>
        <div>Header centre</div>
        <div>Header right</div>
      </div>
    </header>
    <div className="content">
      <nav>This is nav</nav>
      <main>This is main</main>
      <aside>This is aside</aside>
    </div>
  </div>
);
