import { useState } from 'react'
import './Filters.css'

export function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)
  // const [category, setCategory] = useState('all')

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Precio a partir de:</label>
        <input
          type='range'
          id='price'
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor='price'>Categoría</label>
        <select id='category' onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Móviles</option>
          <option value='home-decoration'>Decoración Hogar</option>
          <option value='fragrances'>Perfumes</option>
          <option value='skincare'>Cuidado y Belleza</option>
          <option value='groceries'>Comestibles</option>
        </select>
      </div>
    </section>
  )
}
