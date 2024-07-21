import React from 'react';
import CSSPlayground from './CSSPlayground';

const Week5And6 = () => (
  <div>
    <div className="lesson-content">
      <h3>Lesson Content</h3>
      <ul>
        <li>What is CSS and why do we use it?</li>
        <li>CSS syntax and selectors</li>
        <li>Inline styles, internal stylesheet, and external stylesheet</li>
        <li>Basic CSS properties (color, font-size, background-color)</li>
      </ul>
    </div>

    <div className="interactive-example">
      <h3>CSS Property Playground</h3>
      <p>Experiment with different CSS properties:</p>
      <CSSPlayground />
    </div>

    <div className="homework">
      <h3>Homework</h3>
      <ol>
        <li>Add an internal stylesheet to your "About Me" page</li>
        <li>Style your headings with different colors</li>
        <li>Change the font and size of your paragraphs</li>
        <li>Add background colors to different sections of your page</li>
        <li>Create an external CSS file and link it to both your "About Me" and "My Projects" pages</li>
      </ol>
    </div>
  </div>
);

export default Week5And6;