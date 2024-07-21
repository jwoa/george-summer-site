import React from 'react';
import FileStructureVisualizer from './FileStructureVisualizer';

const Week3And4 = () => (
  <div>
    <div className="lesson-content">
      <h3>Lesson Content</h3>
      <ul>
        <li>HTML lists (ul, ol, li)</li>
        <li>Links (a tag) and images (img tag)</li>
        <li>File structure in web projects</li>
        <li>Relative vs absolute paths</li>
      </ul>
    </div>

    <div className="interactive-example">
      <h3>File Structure Visualizer</h3>
      <p>Drag and drop to organize files in a typical web project:</p>
      <FileStructureVisualizer />
    </div>

    <div className="homework">
      <h3>Homework</h3>
      <ol>
        <li>Expand your "About Me" page to include a list of hobbies</li>
        <li>Add links to your favorite websites</li>
        <li>Include an image (you can use a placeholder if needed)</li>
        <li>Create a new page (e.g., "My Projects") and link to it from your main page</li>
        <li>Organize your files into a proper structure (separate folders for images, pages, etc.)</li>
      </ol>
    </div>
  </div>
);

export default Week3And4;