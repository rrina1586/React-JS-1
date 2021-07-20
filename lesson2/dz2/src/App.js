import React from 'react';
import { useState } from 'react';
import './App.css';

const AUTHORS = {
  ME: "Me",
  BOT: "Bot"
}

function Message(props) {
  return <p>{props.author}: {props.text}</p>
}

function App() {
  const [messageList, setMessageList] = React.useState([]);//поле стейта
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== AUTHORS.BOT) {
      setTimeout(() => {
        setMessageList(currentMessageList => ([...currentMessageList, { author: AUTHORS.BOT, text: "Привет" }]));
      }, 1500)
    }
  }, [messageList]);

  const handleMessageChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();//предотвращает дефолтное поведение
    setMessageList(currentMessageList => ([...currentMessageList, { author: AUTHORS.ME, text: inputValue }]));
    setInputValue("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="messageList">
          {messageList.map((message, index) => (
            <Message key={index} text={message.text} author={message.author} />
          ))}
        </div>

        <form className="app__form" onSubmit={handleMessageSubmit}>
          <input
            className="input"
            placeholder="Введите сообщение"
            value={inputValue}
            onChange={handleMessageChange}
          />
          <button>Отправить</button>
        </form>
      </header>
    </div>
  );
}

export default App;
