// import logo from './logo.svg';
import './App.css';

const Person = (props) => {
  
  return (
    <>
    <h2>First Name: {props.firstName}</h2>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  
  return (
    <div className="App">
      <header className="App-header">
        <Person firstName='Meysam' lastName='Mahdavikhansari' age='31'/>
        <Person firstName='Jana' lastName='NSB' age='28'/>
        <Person firstName='Tanin' lastName='Ravangard' age='3'/>
      </header>
    </div>
  );
}

export default App;
