import { useState } from 'react';
import './App.css';





function App() {
  const [prompt, setPrompt] = useState("")
  const [data, setData] = useState("")
  const [error, setError] = useState("")

  const postLink = async () => {
    {
      try {
        const response = await fetch('https://edumindai.vercel.app/aiapp/', {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            prompt,
          })
        })
        console.log(response)
        const jsonData = await response.json()
        console.log(jsonData)
        setData(jsonData["message"])
        setError("")
      } catch (e) {
        setError(e)
      }
    }
  }

  return (
    <div className="App">
      <div>{error}</div>
      <div>{data}</div>
      <input
        className='input'
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder='What you want to Extract'
      />

      <button onClick={postLink}>Extract</button>

    </div>
  );
}

export default App;
