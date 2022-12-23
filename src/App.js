import {useState} from 'react';
import './App.css';
import QuoteCard from './QuoteCard';
import Quotes from './Quotes';
import Colors from './Colors';

var j=0;

function App() {

  const[index,setIndex] = useState(0);
  const change =()=>{
    if(index === Quotes.length-1)
    { j=0
      setIndex(0)
    }
    else{
      setIndex(index+1)
    }
    var x = document.getElementsByTagName("BODY")[0];
    var y = document.getElementById('btn');
    if(j===Colors.length-1){
      j=0
    }
    else{
      j=j+1
    }
    console.log('j',j)
    x.style.backgroundColor = Colors[j];
    y.style.color = Colors[j];
  }
  return (
    <div className="App">
      <QuoteCard 
        quote={Quotes[index].quote} 
        name={Quotes[index].author}
        onSelect={change}
       />
    </div>
  );
}

export default App;
