import React from 'react'
import { useState } from 'react'

import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, method, cookingTime)
  }

  return (
    <div className="create">
      <h2 className="page">Add a new Recipe</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)} 
            value={title} 
            required
          />
        </label>

       { /* ingredients */}

        <label>
          <span>Recipe method:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes)</span>
          <input 
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            required
          />
        </label>

        <button className="btn"> Submit </button>
      </form>
    </div>
  )
}
