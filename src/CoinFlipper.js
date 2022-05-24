import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin';

class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      {
        side: 'heads',
        // imgSrc: 'https://tinyurl.com/react-coin-heads-jpg',
        imgSrc: './head.jpg',
      },
      {
        side: 'tails',
        // imgSrc: 'https://tinyurl.com/react-coin-tails-jpg',
        imgSrc: './tail.jpg',
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    // Flip the coin (Randomly choose coin's side)
    const newCoin = choice(this.props.coins);
    // Update state
    this.setState((oldState) => {
      // let newState = {
      //   ...oldState,
      //   currCoin: newCoin,
      //   nFlips: oldState.nFlips + 1,
      // };
      // newCoin.side === 'heads'
      //   ? (newState.nHeads += 1)
      //   : (newState.nTails += 1);
      // return newState;
      return {
        currCoin: newCoin,
        nFlips: oldState.nFlips + 1,
        nHeads: oldState.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: oldState.nTails + (newCoin.side === 'tails' ? 1 : 0),
      };
    });
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Let's flip a coin!</h1>
        {/* <Coin
          side={this.state.currCoin.side}
          imgSrc={this.state.currCoin.imgSrc}
        /> */}
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>FLIP ME</button>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{' '}
          heads and {this.state.nTails} tails.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
