import React, { useState } from 'react';
import { getOpenAIResponse } from '../utils/openaiUtils';

const Form = () => {
  const [inputValue, setInputValue] = useState(''); // State for input field
  const [output, setOutput] = useState('');

  // Function to handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle button click (placeholder function)
  const handleButtonClick = async () => {
    const response = await getOpenAIResponse(inputValue)
    setOutput(response)
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="mb-4">
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text"
          rows="5" // Adjust rows for height
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <textarea
          readOnly
          value={output}
          placeholder="Output will be displayed here"
          rows="5" // Adjust rows for height
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm bg-gray-100"
        />
      </div>
      <button
        onClick={handleButtonClick}
        className="w-full py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send to AI
      </button>
    </div>
  );
};

export default Form;
