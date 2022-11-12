import Counter from './Counter';
import CustomInput from './CustomInput';

function App() {

  const counterRef = useRef();
  const customInputRef = useRef();

  return (
    <>
      <Counter ref={counterRef} />
      <CustomInput ref={customInputRef} placeholder="Type something..." />
      <button onClick={() => {
        counterRef.current.reset();
        customInputRef.current.reset();
      }}>
        Reset
      </button>
    </>
  );
}

export default App;
