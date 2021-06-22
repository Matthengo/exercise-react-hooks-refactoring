// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

// class Provider extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cars: {
//         red: false,
//         blue: false,
//         yellow: false,
//       },
//       signal: {
//         color: 'red',
//       },
//     }
//     this.moveCar = this.moveCar.bind(this);
//     this.changeSignal = this.changeSignal.bind(this);
//   }

//   moveCar(car, side) {
//     this.setState({
//       cars: {
//         ...this.state.cars,
//         [car]: side,
//       },
//     });
//   };

//   changeSignal(signalColor) {
//     this.setState({
//       signal: {
//         ...this.state.signal,
//         color: signalColor,
//       },
//     });
//   };

//   render() {
//     const context = {
//       ...this.state,
//       moveCar: this.moveCar,
//       changeSignal: this.changeSignal,
//     };

//     const { children } = this.props;

//     return (
//       <CarsContext.Provider value={context}>
//         {children}
//       </CarsContext.Provider>
//     );
//   }
// };

function Provider({children}){
  const [cars, setCars] = useState({ red: false, blue: false, yellow: false})
  const [signal, setSignal] = useState({ color: 'red' })
  
  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    })
  };

  const changeSignal = (signalColor) => {
    setSignal({
      ...signal,
      color: signalColor,
    })
  };

  const context = {
    cars,
    signal,
    moveCar,
    changeSignal,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;