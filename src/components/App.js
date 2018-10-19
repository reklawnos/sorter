import React, { Component } from 'react';
import Sorter from './Sorter';
import OptionsInput from './OptionsInput';
import './App.css';

/*
const kpop = [
  'Shinee',
  'Seventeen',
  'BTS',
  'Red Velvet',
  'Blackpink',
  'Big Bang',
  'Twice',
  'Pentagon',
  'NCT',
  'EXO',
  'G Friend',
  'Sistar',
  'Wonder Girls',
  'Got 7',
  '2 PM',
  'Wanna One',
  'IOI',
];

const numbers = [
  10,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
];


const numbersAsc = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];
*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: null,
      result: null,
    };
  }

  onTextSubmit = (text) => {
    this.setState({ options: text.split('\n') });
  };

  onRankingComplete = (rankedOptions) => {
    this.setState({ result: rankedOptions });
  };

  render() {
    const { options, result } = this.state;
    return (
      <div>
        {!options &&
          <OptionsInput onSubmit={this.onTextSubmit} />
        }
        {options && !result &&
          <Sorter
            options={options}
            onRankingComplete={this.onRankingComplete}
          />
        }
        {(result || []).map((result, i) => (
          <div key={i}>
            {result}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
