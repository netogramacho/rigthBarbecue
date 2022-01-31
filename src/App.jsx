import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/layout/Content';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
