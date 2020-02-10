import React from 'react';
import './App.css';
import Vacationlist from './components/Vacationlist';

const vacationArray = [
  {
    name: "Virtanen Matti",
    startingday: "2020-06-01",
    endingday: "2020-06-30",
  },
  {
    name: "Laaksonen Liisa",
    startingday: "2020-06-26",
    endingday: "2020-07-27",
  },
  {
    name: "Korhonen Maija",
    startingday: "2020-08-03",
    endingday: "2020-08-30",
  },
];

const App = () => {
  return (
    <Vacationlist vacations ={vacationArray} />
  );
}

export default App;
