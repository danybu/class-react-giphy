import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [
        { id: "xT9IgDEI1iZyb2wqo8" },
        { id: "Zk9mW5OmXTz9e" }
      ],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };
    this.search("homer thinking");
  }

  search = (query) => {
    giphy('d3J9eVZupzuEqbNjQbWrQlcmcNEKHmvU').search({
      q: query,
      rating: 'g',
      limit: 8,
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
