import React, { useState } from 'react';
import Week1And2 from './Week1And2';
import Week3And4 from './Week3And4';
import Week5And6 from './Week5And6';
import Week7And8 from './Week7And8';

const App = () => {
  const [activeWeek, setActiveWeek] = useState('week1');

  const renderWeek = () => {
    switch(activeWeek) {
      case 'week1': return <Week1And2 />;
      case 'week3': return <Week3And4 />;
      case 'week5': return <Week5And6 />;
      case 'week7': return <Week7And8 />;
      default: return <Week1And2 />;
    }
  };

  return (
    <div>
      <header>
        <h1>Web Development for Georgie</h1>
        <nav>
          <ul>
            <li><button onClick={() => setActiveWeek('week1')}>Week 1</button></li>
            {/* <li><button onClick={() => setActiveWeek('week3')}>Week 3-4</button></li>
            <li><button onClick={() => setActiveWeek('week5')}>Week 5-6</button></li>
            <li><button onClick={() => setActiveWeek('week7')}>Week 7-8</button></li> */}
          </ul>
        </nav>
      </header>

      <main>
        {renderWeek()}
      </main>

      <footer>
        <p>&copy; 2024 Web Development for Beginners</p>
      </footer>
    </div>
  );
};

export default App;
