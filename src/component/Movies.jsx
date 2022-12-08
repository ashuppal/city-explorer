//create a class component for movies.

import React from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
 
class Movies extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: this.props.movies,
      error: null,
    }
  }

  render() {
    return (
      <div>
        {this.state.movies.map((movie, index) => {
          return (
            <Card style={{ width: '18rem' }} key={index}>
              <Card.Img variant="top" src={movie.image_url
              } />
              <Card.Body>
                <Card.Text>
                  Title: {movie.title}
                </Card.Text>
                <Card.Text>
                  Overview: {movie.overview}
                </Card.Text>
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
          )
        })}
      </div>
    )
  }
}


export default Movies;



