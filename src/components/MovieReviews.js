// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => <div className='review-list'>{
    props.reviews.map(review => <p key={review.display_title + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)} className='review'>{review.display_title}</p>)
}</div>

export default MovieReviews

