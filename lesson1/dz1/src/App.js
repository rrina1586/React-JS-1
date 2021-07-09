import './App.css';

function Message(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p className="text">Hello, {props.name}!</p>
      </header>
    </div>
  );
}

export default Message;