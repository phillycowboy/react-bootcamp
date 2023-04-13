const getMood = () => {
  const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
  return moods[Math.floor(Math.random() * moods.length)];
}

const handleOnClick = () => {
  window.location.reload();
}

class MoodPicker extends React.Component {

  render(){
    return(
      <div>
        <h1>My number is: { 2 * 8.4 }</h1>
        <h1>My current mood is: { getMood() }</h1>
        <button onClick={handleOnClick}>Change mood</button>
      </div>
    )
  }
}