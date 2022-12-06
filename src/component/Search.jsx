import React from 'react';
import map from '../images/map.png';
import restaurantData from '../data/restaurants.json';
// import locationData from '../data/location.json';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      locationSearch: '',
      restaurantData: restaurantData,
      locationData: undefined
    }
  } 

  // this should query location IQ for geolocation data
  handleLocationSearch = async (e) => {

    e.preventDefault();

    const key = ACCESS_KEY ?? 'pk.39ceb2668b4ab7fc0bca0c8f6d7f5c31';

    let request = {

      method: 'GET',
      
      url: `https://us1.locationiq.com/v1/search?key=${key}&q=${e.target.search.value}&format=json`

    };

    // make our location IQ request;
    let response = await axios(request);
    
    this.setState({
      locationSearch: e.target.search.value,
       locationData: response.data[0],

    });

  }

  render() {
    return (
      <div id="city-search">
        <form onSubmit={this.handleLocationSearch}>
          <label>Search for a location</label>
          <input type="text" name="search" placeholder="Enter City here"/>
         
          <Button variant="success" type="submit">Explore! </Button>
        </form>
        {this.state.locationData 
          ? <>
              <p>{this.state.locationData.display_name}</p>
              <p>Latitude: {this.state.locationData.lat}</p>
              <p>Lontitude: {this.state.locationData.lon}</p>
          </>
          : <p>Please search for a city!</p>
        }
        {this.state.locationSearch && this.state.locationData
          ? <div id="map"><img src={map} alt="location map"/></div>
          : null
        }
        {this.state.locationSearch && this.state.restaurantData
          ? <ul>{this.state.restaurantData.map(place => <li>{place.restaurant}</li>)}</ul>
          : null
        }
      </div>
    )
  }
}

export default Search;