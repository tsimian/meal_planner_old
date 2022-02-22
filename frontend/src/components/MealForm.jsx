import { useState } from 'react'

const MealForm = () => {
    const [input, setInput] = useState('')

    const onSubmit = e => {
        e.preventDefault()

        console.log(input);
        setInput('')
    }


  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="input">Food</label>
                <input 
                    type="text" 
                    name="input" 
                    id="input" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">Add Food</button> 
            </div>
        </form>
    </section>
  )
}

export default MealForm