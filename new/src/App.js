import React from 'react';
//import { useState } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'

const AUTHORS = {
  ME: "Me",
  BOT: "Bot"
}

function Message(props) {
  const { nick = "1234id" } = props;

  return <p id={nick}>
    {props.author}: {props.text}
  </p>
}

Message.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
Message.defaultProps = {}

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
          <TextField
            label="Сообщение"
            variant="outlined"
            autoFocus
            className="input"
            required
            fullWidth
            value={inputValue}
            onChange={handleMessageChange}
            placeholder="Введите сообщение"
          />
          <button>Отправить</button>
        </form>
      </header>
    </div>
  );
}

export default App;
