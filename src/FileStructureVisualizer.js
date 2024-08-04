import React, { useState } from 'react';
import { FolderIcon, FileIcon } from 'lucide-react';

const FileItem = ({ name, isFolder }) => (
  <div className="flex items-center p-2 border border-gray-300 mb-2 cursor-move">
    {isFolder ? <FolderIcon className="mr-2" /> : <FileIcon className="mr-2" />}
    {name}
  </div>
);

const FileStructureVisualizer = () => {
  const [files, setFiles] = useState([
    { name: 'index.html', isFolder: false },
    { name: 'styles', isFolder: true },
    { name: 'images', isFolder: true },
    { name: 'script.js', isFolder: false },
  ]);

  const onDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = Number(e.dataTransfer.getData('text'));
    const newFiles = [...files];
    const [removed] = newFiles.splice(dragIndex, 1);
    newFiles.splice(dropIndex, 0, removed);
    setFiles(newFiles);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Drag and drop to organize files:</h2>
      {files.map((file, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) => onDragStart(e, index)}
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, index)}
        >
          <FileItem name={file.name} isFolder={file.isFolder} />
        </div>
      ))}
    </div>
  );
};

export default FileStructureVisualizer;