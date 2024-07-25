// src/utils/openaiUtils.js
export async function getOpenAIResponse(userInput) {
  try {
    const response = await fetch('http://localhost:5001/api/get-response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userInput })
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error fetching response from backend:', error);
    throw new Error('Failed to get response from backend');
  }
}
