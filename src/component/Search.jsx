import React from 'react';
import map from '../images/map.png';
import restaurantData from '../data/restaurants.json';
 import locationData from '../data/location.json';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;


class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      locationSearch: '',
      restaurantData: restaurantData,
      locationData: locationData,
      error: null
    }
  } 

  // this should query location IQ for geolocation data
  handleLocationSearch = async (e) => {

    e.preventDefault();

    // const key = ACCESS_KEY ?? 'pk.39ceb2668b4ab7fc0bca0c8f6d7f5c31';

    let request = {

      method: 'GET',
      
      url: `https://us1.locationiq.com/v1/search?key=${ACCESS_KEY}&q=${e.target.search.value}&format=json`

    };

    // make our location IQ request;
    try{
      let response = await axios(request);
      this.setState({
        locationSearch: e.target.search.value,
         locationData: response.data[0],
  
      });
  
    } catch(err){
      this.setState({error: err.response.data})

    }
   

  }

  handleError = () =>{
    this.setState ({error: null})
  }

  render() {
    console.log(ACCESS_KEY);
    return (
      <div id="city-search">
        <form onSubmit={this.handleLocationSearch}>
          <label>Search for a location</label>
          <input type="text" name="search" placeholder="Enter City here"/>
         
          <Button variant="success" type="submit">Explore! </Button>
        </form>
        {this.state.error 
        ? <><Alert>There was an error : Invalid request <Button onClick={this.handleError}>Got it!</Button></Alert></>
         : null
        }
        
        {this.state.locationData 
          ? <>
              <p>{this.state.locationData.display_name}</p>
              <p>{this.state.locationData.lat}</p>
              <p> {this.state.locationData.lon}</p>
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