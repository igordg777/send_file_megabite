import logo from './logo.svg';
import './App.css';
import SendFile from './components/SendFile';

function App() {
  return (
    <div className="App">
      <h1>Приложение для отправки и сохранения файлов на backend</h1>
      <SendFile />
    </div>
  );
}

export default App;
