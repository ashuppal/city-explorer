//   // this should query location IQ for geolocation data
//   handleLocationSearch = async (e) => {

//     e.preventDefault();

//      const key = ACCESS_KEY ?? 'pk.39ceb2668b4ab7fc0bca0c8f6d7f5c31';

//     let request = {

//       method: 'GET',
      
//      url: `https://us1.locationiq.com/v1/search?key=${ACCESS_KEY}&q=${e.target.search.value}&format=json`
     

//     };

//     // // make our location IQ request;
 

//     try{
//       let response = await axios(request);
//       this.setState({
//         locationSearch: e.target.search.value,
//          locationData: response.data,
  
//       },()=>this.handleWeatherSearch('Seattle'));
  
//     } catch(err){
//       this.setState({error: err.response.data});
//     }
//     this.handleWeatherSearch(this.state.latitude, this.state.longitude);
//   }

//   handleWeatherSearch= async (cityName) =>{
//     let request = {
//       method: 'GET',
//       url : `http://localhost:3001/weather?city_name=${cityName}`
//     }
//     try{
//       let response = await axios(request);
//       this.setState({
//         // locationSearch: cityName.target.search.value,
//          weatherData: response.data,
//          locationSearch: cityName.target.search.value,
  
//       });
  
//     } catch(err){
//       this.setState({error: err.response.data});
//     }
//   }


//   handleError = () =>{
//     this.setState ({error: null});
//   }

//   render() {
//     console.log(ACCESS_KEY);
//     return (
//       <div id="city-search">
//         <form onSubmit={this.handleLocationSearch}>
//           <label>Search for a location</label>
//           <input type="text" name="search" placeholder="Enter City here"/>
         
//           <Button variant="success" type="submit">Explore! </Button>
//         </form>
//         {this.state.error 
//         ? <><Alert>There was an error : Invalid request <Button onClick={this.handleError}>Got it!</Button></Alert></>
//          : null
//         }
//         city= {this.state.location}
//         lat= {this.state.latitude}
//         lon= {this.state.longitude}
//         {this.state.locationSearch && this.state.locationData
//           ? <div id="map"><img src={map} alt="location map" /></div>
//           : null
//         }
// {/*         

//         {this.state.locationData 
//           ? <>
//               <p>{this.state.locationData.display_name}</p>
//               <p>{this.state.locationData.lat}</p>
//               <p> {this.state.locationData.lon}</p>
//           </>
//           : <p>Please search for a city!</p>
//         }
//         {this.state.weatherData
//           ? <div>City : {this.state.weatherData.city_name}longitude : {this.state.weatherData.lon}latitude : {this.state.weatherData.lat}</div>
//           :null
//         }
//         {this.state.locationSearch && this.state.locationData
//           ? <div id="map"><img src={map} alt="location map"/></div>
//           : null
//         }
//         {this.state.locationSearch && this.state.restaurantData
//           ? <ul>{this.state.restaurantData.map(place => <li>{place.restaurant}</li>)}</ul>
//           : null
//         } */}
//       </div>
//     )
//   }
// }