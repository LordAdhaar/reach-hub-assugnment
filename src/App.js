import logo from './logo.svg';
import './App.css';
import { Equine } from 'equine'
import { useEffect, useState } from 'react';



function App() {

  const [query, setQuery] = useState("Hooligan64")
  const [rating, setRating] = useState(0)
  const [all, setAll] = useState(0)
  const [winRate, setWinRate] = useState(0)
  const [userId, setUserId] = useState("Hooligan64")


  async function handleSearchClick(){
    
    const lichess = new Equine('lip_rtcSENVx5xWDBmY225dP')
    const accountInfo = await lichess.user.info({username:query})

    setUserId(accountInfo.id)
    setRating(accountInfo.count.rated)
    setAll(accountInfo.count.all)
    setWinRate(accountInfo.count.win/accountInfo.count.all*100)

  }

  // lip_rtcSENVx5xWDBmY225dP
  useEffect(() => {
    const fetchData = async () => {

      const lichess = new Equine('lip_rtcSENVx5xWDBmY225dP')
      const accountInfo = await lichess.user.info({username:"Hooligan64"})

      setUserId(accountInfo.id)
      setRating(accountInfo.count.rated)
      setAll(accountInfo.count.all)
      setWinRate(accountInfo.count.win/accountInfo.count.all*100)
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <div>
          
          <input
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
            type="text"
            placeholder="Enter Username"
          />
          <button onClick={handleSearchClick}> SEARCH</button>  
          
        </div>        
        
        <div>
          <p>{userId}</p>
          <p>{rating}</p>
          <p>{all}</p>
          <p>{winRate}</p>
          
          
        </div>

      </div>


    </div>
  );
}

export default App;
