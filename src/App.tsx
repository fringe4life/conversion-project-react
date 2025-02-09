
import React from 'react';
import './App.css'
import Header from './components/Header'

function App() {

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  /**
   * @abstract A way of checking if the provided element is an HTMLInputElement.
   * @param elem the element or item you are checking the type of. 
   * @returns returns that the type is either a HTMLInputElement or not.
   */
  const isInputElement = (elem: HTMLElement | null): elem is HTMLInputElement => {
    if (!elem) {
      return false;
    }
    return elem.tagName === "INPUT";
  };

  /**
   * 
   */
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if(isInputElement(inputRef.current)){
			const inputValue = Number.parseInt(inputRef.current?.value);
			console.log(inputValue);
			// TODO: Display conversion result to user
		}
  }

  return (
    <Header ref={inputRef} handleClick={handleClick} />
  )
}

export default App
