import React, { useEffect, useState } from 'react'
import './feedback.css'

const Service = () => {
    useEffect(() => {
        const stars = document.querySelectorAll('.stars input[type="radio"]');

        const highlightStars = (radio) => {
            const selectedStar = radio.nextElementSibling;
            let current = selectedStar;
            while (current) {
                current.style.color = '#DC5F00';
                current = current.previousElementSibling;
            }
        };

        const resetStarColors = () => {
            const starLabels = document.querySelectorAll('.stars label');
            starLabels.forEach(label => {
                label.style.color = '#ccc';
            });
        };

        stars.forEach(star => {
            star.addEventListener('change', function() {
                resetStarColors();
                highlightStars(this);
            });
        });

        // Cleanup function to remove event listeners
        return () => {
            stars.forEach(star => {
                star.removeEventListener('change', function() {
                    resetStarColors();
                    highlightStars(this);
                });
            });
        };
    }, []);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        Servicename: '',
        feedback: '',
        rating: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/submit-feedback', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ ...formData, feedback_for: 'Products' })
            });
        // Simulate form submission
        if(response.ok) {
            setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // Hide message after 3 seconds
        setFormData({
            name: '',
            email: '',
            Servicename: '',
            feedback: '',
            rating: ''
        }); // Clear form fields
        } else {
            const data = await response.json();
            alert(data.message);
          }
        } catch (error) {
          alert('Error submitting feedback');
        }
    };
  return (
    <div className='product-container'>
      <div className="feedback-product">
        <h2>Feedback Form</h2>
        <form id="feedback-form" onSubmit={handleSubmit}>
            <div className='input'>
                <label htmlFor="feedback_for">Feedback for: </label><br/>
                <input type="text" id="feedback-for" name="feedback_for" value=" Services" readOnly/>
            </div>
            <div className="input">
                <label htmlFor="name">Name: </label><br/>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="input">
                <label htmlFor="email">Email: </label><br/>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input">
                <label htmlFor="brand-name">Service Name: </label><br/>
                <input type="text" id="Servicename" name="Servicename" value={formData.Servicename} onChange={handleChange} required />
            </div>
            <div className="input">
                <label htmlFor="feedback">Feedback:</label><br />
                <textarea id="feedback" name="feedback" rows="3" value={formData.feedback} onChange={handleChange} required></textarea>
            </div>
            <div className="rating">
                <label htmlFor="rating">Rating:</label><br />
                <fieldset className="stars">
                    <input type="radio" id="star5" name="rating" value="5" checked={formData.rating === '5'} onChange={handleChange} /><label htmlFor="star5" title="5 stars"></label>
                    <input type="radio" id="star4" name="rating" value="4" checked={formData.rating === '4'} onChange={handleChange}/><label htmlFor="star4" title="4 stars"></label>
                    <input type="radio" id="star3" name="rating" value="3" checked={formData.rating === '3'} onChange={handleChange}/><label htmlFor="star3" title="3 stars"></label>
                    <input type="radio" id="star2" name="rating" value="2" checked={formData.rating === '2'} onChange={handleChange}/><label htmlFor="star2" title="2 stars"></label>
                    <input type="radio" id="star1" name="rating" value="1" checked={formData.rating === '1'} onChange={handleChange}/><label htmlFor="star1" title="1 star"></label>
                </fieldset>
            </div>
            <button type="submit">Submit Feedback</button>
        </form>
    </div>
    {submitted && (
                <div className="success-message">
                    <div className="message-content">
                        <span>&#10003;</span> Feedback submitted successfully
                    </div>
                </div>
    )}
    </div>
  )
}

export default Service
