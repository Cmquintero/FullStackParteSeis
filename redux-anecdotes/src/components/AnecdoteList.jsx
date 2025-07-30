import { useDispatch, useSelector } from 'react-redux'
import { addVotes } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const filtered = filter
      ? anecdotes.filter(a =>
          a.content.toLowerCase().includes(filter.toLowerCase())
        )
      : anecdotes

    return [...filtered].sort((a, b) => b.votes - a.votes)
  })

  const vote = (id) => {
    dispatch(addVotes(id))
  }

  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
