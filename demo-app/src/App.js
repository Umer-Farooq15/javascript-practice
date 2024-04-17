import React from 'react';
import ActivityButtons from './ActivityButtons';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center text-2xl font-bold text-blue-700 mb-8">
        Hello, this is my React main components practice!
      </div>
      <ActivityButtons />
    </div>
  );
}

export default App;
