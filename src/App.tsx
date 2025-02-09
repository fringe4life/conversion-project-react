
import React from 'react';
import './App.css'
import Header from './components/Header'
import Wrapper from './components/Wrapper';
import Conversion from './components/Conversion';

function App() {

  /**
   * The ref for the input field.
   */
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  /**
   * The state to hold the current value of the input field.
   * Initial value is 1.
   */
  const [value, setValue] = React.useState(1);

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
   * @abstract Returns the current value of the input field.
   */
  const getCurrentValue = (): number => {
		if (isInputElement(inputRef.current)) {
			return Number.parseInt(inputRef.current?.value);
		} 
    return 1;
	}
  /**
   * @abstract Updates the state with the current value of the input field.
   * @param event The event object from the button click event.
   * @returns returns nothing.
   */
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (_): void => {
    setValue(() => getCurrentValue());
  }

  return (
    <>
      <Header ref={inputRef} handleClick={handleClick} />
      <Wrapper>
        <Conversion convertToUnit1={3.28084} convertToUnit2={0.3408} input={value} title={"Length (Meter/Feet)"} unit1={'meters'} unit2={'feet'} />
        <Conversion convertToUnit1={3.7854}  convertToUnit2={0.2641729} input={value} title={"Volume (Liters/Gallons)"} unit1={'liters'} unit2={'gallons'} />
        <Conversion convertToUnit1={0.4535924} convertToUnit2={2.204623} input={value} title={"Weight (Kilograms/Pounds)"} unit1={'kilograms'} unit2={'pounds'} />
      </Wrapper>
      <footer className=' text-center p-4'>
        <a className='hover:underline hover:cursor-pointer' rel='noreferrer' target="_blank" href="https://icons8.com/icon/qrOXrfUDKkOX/calculator">Calculator</a> icon by <a className='hover:underline hover:cursor-pointer' rel='noreferrer' target="_blank" href="https://icons8.com">Icons8</a>
        </footer>
    </>
  )
}

export default App
