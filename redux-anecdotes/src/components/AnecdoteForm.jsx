import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value.trim()
    if (!content) return

    dispatch(createAnecdote(content))
    dispatch(showNotification(`Has agregado la Anecdota: "${content}"`, 5))
    event.target.anecdote.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <div><input name="anecdote" placeholder="Deseas agregar una nueva Anecdota?" /></div>
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm
