
const getNum = () => {
  return Math.floor(Math.random() * 10) + 1;
}

const changeNum = () => {
  window.location.reload();
}

class NumPicker extends React.Component {
  render(){
    const num = getNum();
    return (
      <div>
        <h1>Your number is... {num}</h1>
        <p>{num === 7 ? 
          'Congrats!' && <img src="https://media3.giphy.com/media/xT8qBepJQzUjXpeWU8/giphy.gif?cid=ecf05e47w0sy1yp4e1ax2f130kkttr2v8p9pdxnbfznul33m&rid=giphy.gif&ct=g"/> 
          : 
          'Try again'}</p>
        <button onClick={changeNum}>Change number</button>
      </div>
      )
  }
}