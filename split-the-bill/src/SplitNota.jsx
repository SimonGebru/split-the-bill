import { useState } from "react";
import "./SplitNota.css";

function SplitNota() {
  const [totalAmount, setTotalAmount] = useState("");
  const [numFriends, setNumFriends] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [result, setResult] = useState(null); 

  const calculateSplit = () => {
    const amount = parseFloat(totalAmount);
    const friends = parseInt(numFriends);
    const tip = parseFloat(tipPercentage);

    if (!amount || !friends || isNaN(tip)) {
      setResult("Fyll i alla fält korrekt!"); 
      console.log("Fyll i alla fält korrekt!");
      return;
    }

    const totalWithTip = amount + amount * tip;
    const perPerson = totalWithTip / friends;
    const formattedResult = `Varje person ska betala: ${perPerson.toFixed(2)} kr`;

    setResult(formattedResult); 
    console.log(formattedResult); 
  };

  return (
    <div className="container">
      <h2>Split the nota</h2>

      <div className="input-group">
        <label>Summa</label>
        <input
          type="number"
          placeholder="Ange totalsumma"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Antal vänner</label>
        <input
          type="number"
          placeholder="Antal personer"
          value={numFriends}
          onChange={(e) => setNumFriends(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Dricks</label>
        <input
          type="number"
          step="0.01"
          placeholder="Dricks i decimal (ex. 0.10)"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
        />
      </div>

      <button onClick={calculateSplit}>Räkna</button>

      {/* Här visas resultatet i UI */}
      {result && <p className="result">{result}</p>}
    </div>
  );
}

export default SplitNota;