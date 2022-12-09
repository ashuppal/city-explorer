//create a class component for movies.

import React from 'react';
// import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import CardGroup from 'react-bootstrap/CardGroup';
 
class Movies extends React.Component {
  render() {
    return (
      <div>
        {this.props.movies.map((movie, index) => {
          return (
            <CardGroup>
            <Card style={{ width: '18rem' }} key={index}>
              <Card.Img variant="top" src={movie.image_url} className="img-fluid" alt="Responsive image" style={{ width: '300px' }}/>
              <Card.Body>
                <Card.Subtitle>
                  Title: {movie.title}
                </Card.Subtitle>
                <Card.Subtitle>
                  Overview: {movie.overview}
                </Card.Subtitle>
                <Card.Text>
                  Average votes: {movie.average_votes}
                </Card.Text>
                <Card.Text>
                  Total votes: {movie.total_votes}
                </Card.Text>
                <Card.Text>
                  Popularity: {movie.popularity}
                </Card.Text>
                <Card.Text>
                  Released on: {movie.released_on}
                </Card.Text>
              </Card.Body>
            </Card>
            </CardGroup>
          )
        })}
        
      </div>
      
    )
  }
}


export default Movies;
