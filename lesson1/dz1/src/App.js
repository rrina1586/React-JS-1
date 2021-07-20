import React from 'react';
import './App.css';

// class ExampleClass extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("constructor");
//     this.state = { count: 0 };
//   }
//   componentDidMount() {
//     console.log('componentDidMount');
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log('componentDidUpdate', { prevProps, prevState });
//   }
//   handleClick = () => {
//     this.setState(currentState => {
//       return { count: currentState.count + 1 }
//     })
//   }
//   render() {
//     console.log("render");
//     return <div className="text">
//       <p>Example Class Component - {this.props.text1}</p>
//       <p>Counter - {this.state.count}</p>
//       <button onClick={this.handleClick}>+1</button>
//     </div>
//   }
// }

function Message(props) {
  const [count, setCount] = React.useState(0);
  const [showChild, setShowChild] = React.useState(true);
  const handleToggleShowChild = () => {
    setShowChild(!showChild);
  }
  React.useEffect(() => {
    console.log("componentDidMount hook");
  }, []);
  React.useEffect(() => {
    console.log("componentDidUpdate hook", { count });
  }, [count]);
  const handleClick = () => {
    // setCount(currentCount => {
    //   return currentCount + 1;
    // });

    //то же самое
    setCount(currentCount => currentCount + 1);
  }
  console.log("render");
  return (
    <div className="App">
      <header className="App-header">
        {/* <ExampleClass text1="This is text 1" /> */}
        <p className="text">Hello, {props.name}!</p>
        <p>Counter - {count}</p>
        <button onClick={handleClick}>+1</button>
        {showChild ? <p>Welcome!</p> : null}
        <button onClick={handleToggleShowChild}>Toggle showChild</button>

      </header>
    </div>
  );
}

export default Message;