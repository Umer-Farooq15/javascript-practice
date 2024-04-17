import React, { useState } from 'react';
import HelloWorld from './HelloWorld';
import Welcome from './Welcome';
import Clock from './Clock';
import ActionLink from './ActionLink';
import Greeting from './Greeting';
import NumberList from './NumberList';
import NameForm from './NameForm';

function ActivityButtons() {
  const [activeExample, setActiveExample] = useState(null);

  const renderExample = (example) => {
    setActiveExample(example);
  };

  const renderActiveExample = () => {
    switch (activeExample) {
      case 'HelloWorld':
        return <HelloWorld />;
      case 'Welcome':
        return <Welcome name="Muhammad Umer Farooq" />;
      case 'Clock':
        return <Clock />;
      case 'ActionLink':
        return <ActionLink />;
      case 'Greeting':
        return <Greeting isLoggedIn={true} />;
      case 'NumberList':
        return <NumberList numbers={[1, 2, 3, 4, 5]} />;
      case 'NameForm':
        return <NameForm />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <div className="grid grid-cols-2 gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => renderExample('HelloWorld')}
        >
          Hello World
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => renderExample('Welcome')}
        >
          Welcome
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => renderExample('Clock')}
        >
          Clock
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => renderExample('ActionLink')}
        >
          Action Link
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => renderExample('Greeting')}
        >
          Greeting
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => renderExample('NumberList')}
        >
          Number List
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => renderExample('NameForm')}
        >
          Name Form
        </button>
      </div>

      <div className="mt-8">{renderActiveExample()}</div>
    </div>
  );
}

export default ActivityButtons;
