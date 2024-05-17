import React from 'react'
import './product.css'

const Product = () => {
  return (
    <div>
      <div className="feedback-product">
        <h2>Feedback Form</h2>
        <form id="feedback-form">
            <input type="text" id="feedback-for" name="feedback_for" value="Products" />
            <div className='input'>
                <label for="category">Category:</label><br />
                <input type="text" id="category" name="category" value="" />
            </div>
            <div className="input">
                <label for="name">Name:</label><br />
                <input type="text" id="name" name="name" required />
            </div>
            <div className="input">
                <label for="email">Email:</label><br />
                <input type="email" id="email" name="email" required />
            </div>
            <div className="input">
                <label for="brand-name">Brand Name:</label><br />
                <input type="text" id="brand-name" name="brand-name" required />
            </div>
            <div className="input">
                <label for="feedback">Feedback:</label><br />
                <textarea id="feedback" name="feedback" rows="4" required></textarea>
            </div>
            <div className="rating">
                <label for="rating">Rating:</label><br />
                <fieldset className="stars">
                    <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="5 stars"></label>
                    <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="4 stars"></label>
                    <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="3 stars"></label>
                    <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="2 stars"></label>
                    <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="1 star"></label>
                </fieldset>
            </div>
            <button type="submit">Submit Feedback</button>
        </form>
    </div>
    </div>
  )
}

export default Product
