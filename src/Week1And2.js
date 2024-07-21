import React from 'react';
import HTMLEditor from './HTMLEditor';

const Week1And2 = () => (
  <div>
    <div className="lesson-content">
      <h3>Lesson Content</h3>
      <ul>
        <li>What is HTML?</li>
        <li>Basic HTML structure (DOCTYPE, html, head, body tags)</li>
        <li>Text tags (h1, p, strong, em)</li>
        <li>Creating your first HTML file</li>
      </ul>
    </div>

    <div className="lesson-explanation">
      <h3>Detailed Explanation</h3>
      
      <h4>1. What is HTML?</h4>
      <p>HTML stands for HyperText Markup Language. It's the standard language used to create web pages. Here's a simple way to understand it:</p>
      <ul>
        <li>HTML is like the skeleton of a webpage. It provides the basic structure and content.</li>
        <li>It uses "tags" to define different types of content (like headings, paragraphs, images, links, etc.).</li>
        <li>Web browsers read HTML files and render them into visible web pages.</li>
        <li>HTML is not a programming language; it's a markup language, which means it's used to "mark up" content with tags that describe its purpose or structure.</li>
      </ul>

      <h4>2. Basic HTML structure (DOCTYPE, html, head, body tags)</h4>
      <p>Every HTML document follows a basic structure. Here's an example:</p>
      <pre>
        <code>
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to my web page!</h1>
    <p>This is where the content of your page goes.</p>
</body>
</html>`}
        </code>
      </pre>
      <p>Let's explain each part:</p>
      <ul>
        <li><code>{`<!DOCTYPE html>`}</code>: This declaration tells the browser that this is an HTML5 document.</li>
        <li><code>{`<html>`}</code>: This is the root element of the HTML page. The <code>lang="en"</code> specifies that the language is English.</li>
        <li><code>{`<head>`}</code>: This contains meta information about the HTML page, like its title and links to CSS files.</li>
        <li><code>{`<body>`}</code>: This defines the document's body, which contains all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
      </ul>

      <h4>3. Text tags (h1, p, strong, em)</h4>
      <p>HTML uses various tags to structure text content. Here are some basic ones:</p>
      <pre>
        <code>
{`<h1>This is a main heading</h1>
<h2>This is a subheading</h2>
<p>This is a paragraph of text. You can make some words <strong>bold</strong> or <em>italicized</em> for emphasis.</p>
<p>HTML has six levels of headings: <h1>, <h2>, <h3>, <h4>, <h5>, and <h6>.</p>`}
        </code>
      </pre>
      <ul>
        <li><code>{`<h1>`}</code> to <code>{`<h6>`}</code>: These are heading tags. <code>{`<h1>`}</code> is the highest (most important) level and <code>{`<h6>`}</code> is the lowest.</li>
        <li><code>{`<p>`}</code>: This defines a paragraph.</li>
        <li><code>{`<strong>`}</code>: This is used to define text with strong importance. It's typically displayed in bold.</li>
        <li><code>{`<em>`}</code>: This is used to define emphasized text. It's typically displayed in italic.</li>
      </ul>

      <h4>4. Creating your first HTML file</h4>
      <p>To create your first HTML file:</p>
      <ol>
        <li>Open a text editor (like Notepad on Windows, TextEdit on Mac, or a code editor like Visual Studio Code).</li>
        <li>Type or copy the basic HTML structure we showed earlier.</li>
        <li>Add some content inside the <code>{`<body>`}</code> tags.</li>
        <li>Save the file with a <code>.html</code> extension, for example, <code>mypage.html</code>.</li>
        <li>Find the file on your computer and double-click it. It should open in your default web browser.</li>
      </ol>
      <p>Here's a simple example of what your first HTML file might look like:</p>
      <pre>
        <code>
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My First Web Page</h1>
    <p>Hello, world! This is my first attempt at creating a web page.</p>
    <h2>Things I Like</h2>
    <p>Here are a few things I enjoy:</p>
    <ul>
        <li>Learning <strong>HTML</strong></li>
        <li>Playing <em>video games</em></li>
        <li>Reading books</li>
    </ul>
</body>
</html>`}
        </code>
      </pre>
      <p>This example incorporates all the elements we've discussed: the basic HTML structure, headings, paragraphs, and text formatting tags. It also introduces a new element: the unordered list (<code>{`<ul>`}</code>) with list items (<code>{`<li>`}</code>).</p>
      <p>Remember, HTML is all about practice. The more you experiment with different tags and structures, the more comfortable you'll become with creating web pages.</p>
    </div>

    <div className="interactive-example">
      <h3>Interactive HTML Editor</h3>
      <p>Try editing the HTML below and see the results instantly!</p>
      <HTMLEditor />
    </div>

    <div className="homework">
      <h3>Homework</h3>
      <ol>
        <li>Create a simple "About Me" page using only HTML</li>
        <li>Include at least one heading, two paragraphs, and use strong and em tags</li>
        <li>Experiment with different heading levels (h1 through h6)</li>
        <li>Try to recreate a simple recipe page with a title, ingredients list, and instructions</li>
      </ol>
    </div>
  </div>
);

export default Week1And2;