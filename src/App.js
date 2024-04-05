// App.js

import React from 'react';
import Timer from './Timer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>

        <h1>BreakBound <br />The Restful App</h1>

        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
          </ul>
        </nav>

      </header>
      
      <main>

        <Timer />
        <section id="about">
          <h2>About BreakBound</h2>
          <p>BreakBound is a time management system that combines the Pomodoro technique with the 20/20/20 rule.</p>
        </section>

        <section id="features">
          <h2>Features</h2>
          <ul>
            <li>Work sessions</li>
            <li>Break reminders</li>
            <li>Task management</li>
          </ul>
        </section>

      </main>
      <footer>

        <p>&copy; 2024 BreakBound. All rights reserved.</p>
      </footer>
      
    </div>
  );
}

export default App;
