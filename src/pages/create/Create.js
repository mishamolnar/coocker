import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useHistory } from 'react-router-dom'

import './Create.css'
import { useTheme } from '../../hooks/useTheme'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [img, setImage] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const history = useHistory( )
  const { mode } = useTheme()

  const { postData, data, error } = useFetch('https://fake-server-app-mmolnar.herokuapp.com/recipes', 'POST')

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, ingredients, method, img, cookingTime: cookingTime + ' minutes'})
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  } 

  //redirect user
  useEffect(() => {
    if (data && !error) {
      history.push('/')
    }
  }, [data, history, error])

  return (
    <div className={`create ${mode}`}>
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

        <label>
          <span>Recipe ingredients</span>
            <div className="ingredients">
              <input type="text"
                onChange={(e) => setNewIngredient(e.target.value)}
                value={newIngredient}
                ref={ingredientInput}
              />
              <button onClick={handleAdd} 
                className="btn">
                  add
              </button> 
            </div>
        </label>
        <p>Current ingredients: {ingredients.map(ing => <em key={ing}>{ing}, </em>)}</p>

        <label>
          <span>Recipe method:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Image:</span>
          <textarea 
            onChange={(e) => setImage(e.target.value)}
            value={img}
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

        <button className="btn" id="submit"> Submit </button>
      </form>
      {error && <p className="error">{ error }</p>}
    </div>
  )
}
