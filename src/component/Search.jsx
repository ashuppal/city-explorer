import React from 'react';
import map from '../images/map.png';
// import restaurantData from '../data/restaurants.json';
// import locationData from '../data/location.json';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import '../style.css'
import Movies from './Movies';
// import Weather from './Weather';


const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      location: null,
      locationSearch: '',
      error: null,
    }
  }

  handleError = (e) => {
    if (e) {
      console.log('Error occurred while requesting');
      this.setState({ error: e });
    } else {
      this.setState({ error: null });
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
        description: response.data[0].description,
        date : response.data[0].date,
        locationData: response.data[0],
  

      }, () => this.weatherData(response.data[0].lat, response.data[0].lon) && this.movieData(city[0]));
    } catch (err) {
      console.log('error happened');
      this.setState({error: err.response.data})
    }
 
  }
  weatherData = async (lat, lon) => {
    try{
      // console.log(this.state);
      let weather = await axios.get(`https://city-explorer-rump.onrender.com/weather?searchQuery=${this.state.location}&lat=${lat}&lon=${lon}`);
      // console.log(weather);
      this.setState({
        weather: weather.data
      });
    } catch(err){
      console.log('err', err);
    }
  }

  movieData = async (city) => {
    try{
      let movie = await axios.get(`https://city-explorer-rump.onrender.com/movies?city=${city}`);
      console.log(movie);
      this.setState({
        movies: movie.data
      });
    } catch(err){
      console.log('err', err);
    }
  }

  // eslint-disable-next-line no-dupe-class-members
  handleError = () => {
    this.setState({error: null});
  }

  render() {
    console.log(this.state.weather);
    return (
      <div id="city-search">
        <form onSubmit={this.cityData}>
          <label>City</label>
          <input onChange={this.handleLocationSearch} type="text" name="search" placeholder="Enter City here" />
          <button type="submit">Explore</button>
        </form>
        {this.state.error
          ? <Alert>
          {JSON.stringify(this.state.error)}<Button onClick={this.handleError}>Thank you!</Button></Alert>
          : null
        }
        {this.state.locationSearch && this.state.locationData
          ? <>
            <span><strong>city:</strong> {this.state.location}</span>
            <span><strong>lat:</strong> {this.state.latitude}</span>
            <span><strong>lon:</strong> {this.state.longitude}</span>
            <div id="map"><img width="50%" src={map} alt="location map" /></div>
          </>
          : null
        }
        {/* <Weather /> */}
      
        {this.state.weather
          ? <div id="weather"><strong>Weather forecast: </strong>
          {/* <Weather weather= {this.state.weather[0].date} />  */}
          <span>{this.state.weather[0].weather.datetime}</span>
            <span>{this.state.weather[0].weather.description}</span>
          </div>
          : null
        }
     
        {this.state.movies
          ? <div id="movie">
            <span><strong>Movies in '{this.state.location}'</strong></span>
            <Movies movies={this.state.movies} />
          </div>
          : null
        }
      </div>

    )
  }
}





export default Search;

