import React from 'react';
import map from '../images/map.png';
import restaurantData from '../data/restaurants.json';
import locationData from '../data/location.json';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import '../style.css'


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

  handleLocationSearch = (event) => {
    event.preventDefault();
    this.setState({
      locationSearch: event.target.value

    });
    console.log(this.state);

  }

  cityData = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${ACCESS_KEY}&q=${this.state.locationSearch}&format=json`;

    try {
      let response = await axios.get(url);
      console.log(response.data[0].display_name);
      let city = response.data[0].display_name.split(',')
      console.log(city);

      this.setState({
        location: city[0],
        latitude: response.data[0].lat,
        longitude: response.data[0].lon,
        locationData: response.data[0]
        
      });
    } catch (err) {
      console.log('error happened');
      this.setState({error: err.response.data})
    }
    this.weatherData(this.state.latitude, this.state.longitude);
  }
  weatherData = async (lat, lon) => {
    try{
      console.log(this.state);
      let weather = await axios.get(`http://localhost:3001/weather?searchQuery=${this.state.location}`);
      console.log(weather);
      this.setState({
        weather: weather.data
      })
      
      
      
    } catch(err){
      console.log('err', err);
    }
  }
  // console.log(this.state);
handleError = () => {
  this.setState({error: null});
}

  render() {
    return (
      <div id="city-search">
        <form onSubmit={this.cityData}>
          <label>City</label>
          <input onChange={this.handleLocationSearch} type="text" name="search" placeholder="Enter City here" />
          <Button variant="success" type="submit">Explore! </Button>
        </form>
        {this.state.error
          ? <Alert>
         Invalid entry<Button onClick={this.handleError}> Ok! Got it! </Button></Alert>
          : null
        }

        city : {this.state.location } 
        latitude : {this.state.latitude }
        longitude : {this.state.longitude}
        {this.state.locationSearch && this.state.locationData
          ? <div id="map"><img src={map} alt="location map" /></div>
          : null
        }
        {/* <Weather /> */}
      </div>



    )
  }
}



export default Search;