class Hello extends React.Component {
  render(){
    return (
      <div>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
      </div>
      )
  }
}

function Functional(){
  return (
    <div>
      <h1>Functional component!</h1>
      <h1>Functional component!</h1>
      <h1>Functional component!</h1>
    </div>
  )
}
ReactDOM.render(<Hello />, document.getElementById("root"));
ReactDOM.render(<Functional />, document.getElementById("root2"));