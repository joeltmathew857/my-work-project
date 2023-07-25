import React, { useState } from 'react';

const TextInput = () => {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-bold">Text Input</h2>
      <input
        type="text"
        className="border border-gray-400 px-3 py-2 rounded"
        value={inputText}
        onChange={handleChange}
      />
      <p className="mt-2">You typed: {inputText}</p>
    </div>
  );
};

export default TextInput;
