import { useState } from 'react';
import './App.css';





function App() {
  const [extract, setExtract] = useState("")
  const [link, setLink] = useState("")
  const [data, setData] = useState("")
  const [error, setError] = useState("")

  const postLink = async () => {
    {
      try {
        const response = await fetch('https://aisideback.vercel.app/aiapp/')
        console.log(response)
        const jsonData = await response.json()
        console.log(jsonData)
        setData(jsonData)
        setError("")
      } catch (e) {
        setError(e)
      }
    }
  }

  return (
    <div className="App">
      <input
        className='input'
        value={extract}
        onChange={(e) => setExtract(e.target.value)}
        placeholder='What you want to Extract'
      />

      <input
        className='input'
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder='Paste here youtube video link'
      />

      <button onClick={postLink}>Extract</button>

    </div>
  );
}

export default App;
