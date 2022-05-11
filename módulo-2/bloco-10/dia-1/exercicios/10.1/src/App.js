import logo from './logo.svg';
import './App.css';

const Task = () => {
  const array = ['banana', 'maçã', 'uva', 'kiwi', 'jaca'];
  return (
    <div>
    <li>Igor Poldio</li>
    array.map((fruit) => <li>`${fruit}`</li>);
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Task/>
    </div>
  );
}

export default App;
