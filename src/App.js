import './App.css';
import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Clock from "./Clock"

const breakPoints = [{ width: 1, itemsToShow: 1 }];



function App() {
  const [items, setItems] = useState([<Slide key={Math.random()}/>]);
  const [currIdx, setCurrIdx] = useState(0);

  const addItem = () => {
    setItems([...items, <Slide key={Math.random()}/>]);
  };

  const removeItem = () => {
    if (items.length > 1) {
      setItems((items) => items.filter((_, index) => index !== currIdx));
    }
  };

  return (
    <div className="App">
      <div className='time'>
        <div className='time-background'>
          <Clock/>
        </div>
      </div>
        
      <div className='content'>
        <div className="carousel-wrapper">
          <Carousel enableSwipe={false} onChange={(currItem, pageIndex) => setCurrIdx(pageIndex)} breakPoints={breakPoints}>
            {items}
          </Carousel>
        </div>
      </div>

      <div className="controls-wrapper">
        <button className="button-17" onClick={removeItem}>Delete This Topic</button>
        <button className="button-17" onClick={addItem}>Add New Topic</button>
      </div>
    </div>
  );
}

function Slide() {
  return (
    <div className="panel-background">
      <input className="header-text" placeholder='Topic Title'/>

      <div className='time-container'>
        <div className="time-text">Time Estimate:&nbsp;</div>
        <input className="time-input" placeholder='?'/>
        <div className="time-text">&nbsp;minutes</div>
      </div>

      <p className='desc-input' contentEditable="true" data-placeholder="Type your topic description in here..."/>
    </div>
  )
}

export default App;
