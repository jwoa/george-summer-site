import React, { useState } from 'react';

const HTMLEditor = () => {
  const [html, setHtml] = useState('<h1>Hello World!</h1>\n<p>Edit this HTML and see it update in real-time!</p>');

  return (
    <div className="flex flex-col md:flex-row w-full h-[400px]">
      <textarea
        className="w-full md:w-1/2 h-full p-2 font-mono text-sm border border-gray-300"
        value={html}
        onChange={(e) => setHtml(e.target.value)}
      />
      <div 
        className="w-full md:w-1/2 h-full p-2 border border-gray-300"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default HTMLEditor;