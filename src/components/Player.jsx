import {useState, useRef} from 'react';


export default function Player() {
  let nameInput = useRef();
  const [enteredName, setEnteredName] = useState(null);

  function handleClick(){
    setEnteredName(nameInput.current.value);
    nameInput.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? 'unknown entity'}</h2>
      <p>
        <input ref={nameInput} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
