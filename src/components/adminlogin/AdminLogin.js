import React from 'react'
import './adminlogin.css'

const AdminLogin = () => {
  return (
    <div className='adminlogin-container'>
        <div class="login">
        <h1>ADMIN LOGIN</h1>
        <form action="/login" method="post">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">LOGIN</button>
        </form>
    </div>
    </div>
  )
}

export default AdminLogin
