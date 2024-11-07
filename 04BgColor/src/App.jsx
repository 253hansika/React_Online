import { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-gray-400 px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor('red')}
            className="outline-none px-5 py-1.5 rounded-full shadow-xl"
            style={{ backgroundColor: 'red', color: 'white' }}
          >
            Red
          </button>
          <button
            onClick={() => setColor('green')}
            className="outline-none px-5 py-1.5 rounded-full shadow-xl"
            style={{ backgroundColor: 'green', color: 'white' }}
          >
            Green
          </button>
          <button
            onClick={() => setColor('blue')}
            className="outline-none px-5 py-1.5 rounded-full shadow-xl"
            style={{ backgroundColor: 'blue', color: 'white' }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor('Yellow')}
            className="outline-none px-5 py-1.5 rounded-full shadow-xl"
            style={{ backgroundColor: 'yellow', color: 'black' }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor('Pink')}
            className="outline-none px-5 py-1.5 rounded-full shadow-xl "
            style={{ backgroundColor: 'Pink', color: 'black' }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor('Orange')}
            className="outline-none px-5 py-1.5 rounded-full shadow-xl"
            style={{ backgroundColor: 'orange', color: 'white' }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor('Black')}
            className="outline-none px-5 py-1.5 rounded-full shadow-xl"
            style={{ backgroundColor: 'black', color: 'white' }}
          >
            Black
          </button>
          <button
            onClick={() => setColor('White')}
            className="outline-none px-5 py-1.5 rounded-full shadow-xl"
            style={{ backgroundColor: 'white', color: 'black' }}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
