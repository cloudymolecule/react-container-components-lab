import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    
    state = {
        reviews: [],
        searchTerm: ''
    }

    render() {
        return (
            <form onSubmit={this.handleSubmission} className='searchable-movie-reviews'>
                <input onChange={this.handleChange}></input>
                <MovieReviews reviews={this.state.reviews}/>
            </form>
        )
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmission = (e) => {
        e.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`).then(res => res.json()).then(data => this.setState({reviews: data.results}))
    }

}


