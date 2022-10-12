import react,{useState} from 'react';
import './App.css';
import{numbers,upperCaseLetters,lowerCaseLetters,specialCharacters} from'./characters'

function App() { 
  const[password,setPassword]=useState("");
  const[passwordLength,setPasswordLength]=useState(20);
  const[includeUppercase,setIncludeUppercase]=useState(false);
  const[includeLowercase,setIncludeLowercase]=useState(false);
  const[includeNumbers,setIncludeNumbers]=useState(false);
  const[includeSymbols,setIncludeSymbols]=useState(false);
  const handleGeneratePassword=(e)=>{
    let characterList=''
    if(includeLowercase){
      characterList=characterList+includeLowercase;
    }
    if(includeUppercase){
      characterList=characterList+includeUppercase;
    }
    if(includeNumbers){
      characterList=characterList+includeNumbers;
    }
    if(includeSymbols){
      characterList=characterList+includeSymbols;
    }

    setPassword(characterList);
  };
  return (
    <div className="App">
      <div className="container">
      <div className="generator">
        <h2 className="generator__header">password generator</h2>
        <div className="generator__password">
          <h3>{password}</h3>
          <button className="copy__btn">
            <i className="far fa-clipboard"></i>
          </button>
        </div>
        <div className="form-group">
          <label htmlFor="password-length">password length</label>
          
          <input defaultValue={passwordLength} onChange={(e)=>setPasswordLength(e.target.value)} type="number" id="password-length" name="password-length" max="20"min="10"></input>
        </div>
        <div className="form-group">
          <label htmlFor="uppercase-letters">include uppercase letters</label>
          <input checked={includeUppercase}
          onChange={(e)=>setIncludeUppercase(e.target.checked)} type="checkbox" id="uppercase-letters" name="uppercase-letters" ></input>
        </div>
        <div className="form-group">
          <label htmlFor="lowercase-letters">include lowercase letters</label>
          <input checked={includeLowercase}
          onChange={(e)=>setIncludeLowercase(e.target.checked)} type="checkbox" id="lowercase-letters" name="lowercase-letters" ></input>
        </div>
        <div className="form-group">
          <label htmlFor="include-number">include numbers</label>
          <input checked={includeNumbers}
          onChange={(e)=>setIncludeNumbers(e.target.checked)} type="checkbox" id="include-number" name="include-number" ></input>
        </div>
        <div className="form-group">
          <label htmlFor="include-symbols">include symbols</label>
          <input checked={includeSymbols} onChange={(e)=>setIncludeSymbols(e.target.checked)} type="checkbox" id="include-symbols" name="include-symbols"></input>
        </div>
        <button onClick={handleGeneratePassword} className="generator__btn">generate password</button>


      </div>
      </div>
    </div>
  );
}

export default App;
