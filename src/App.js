import React from 'react';
import Card from './components/Card';
import Counter from './components/Counter';
import TextInput from './components/TextInput';

const App = () => {
  return (
    <div className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">Hello, React with Tailwind CSS!</h1>
      <p>This is a simple React component using Tailwind CSS.</p>

      <Card title="Card 1" content="This is the content of Card 1." />
      <Card title="Card 2" content="This is the content of Card 2." />

      <Counter />

      <TextInput />
    </div>
  );
};

export default App;
