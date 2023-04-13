// all components rendered by app component.
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Hello />
        <Hello />
        <NumPicker />
        <MoodPicker />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));