import React, { useState } from 'react'

export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault(),
            console.log(formData)
        setFormData({
            email: "",
            password: ""
        })
    }
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

    }
    return (
        <div>
            <form action='' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>Email: </label>
                <input type="email" name='email' value={formData.email} onChange={handleChange} />
                <label>Password:</label>
                <input type='password' name='password' value={formData.password} onChange={handleChange} />
                <input type='submit' />
            </form>
        </div>
    )
}
