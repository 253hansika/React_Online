import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  //use state
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [characterAllow, setCharacterAllow] = useState(false);
  const [password, setPassword] = useState();

  //useRef Hook

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //usecallback hook
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllow) str += '0123456789';
    if (characterAllow) str += '!@#$%^&*()~`{}[]';

    for (let i = 1; i <= length; i++) {
      let charNum = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(charNum);
    }

    setPassword(pass);
  }, [length, numberAllow, characterAllow, setPassword]); //here we are giving the dependencies for optimization
  //above dependencies store in cache so that whenever it require for optimization we can us it

  //useeffect hook
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, characterAllow, passwordGenerator]); //here we giving the dependencies so that any changes
  // with depen.. will automatically call use effect method and generate password

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-700 text-white px-5 outline-none shrink-0 hover:bg-blue-500"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              className="cursor-pointer"
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllow}
              onChange={() => {
                setCharacterAllow((prev) => !prev);
              }}
              id="characterInput"
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
