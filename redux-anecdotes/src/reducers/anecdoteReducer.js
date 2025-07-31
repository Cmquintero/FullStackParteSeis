import { createSlice } from '@reduxjs/toolkit'
import { getAll, createNew, updateVote } from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
 updateAnecdote(state, action) {
  const updated = action.payload
  return state.map(anec =>
    anec.id !== updated.id ? anec : updated
  )
}

  }
})

export const { appendAnecdote, setAnecdotes, updateAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (id) => {
  return async dispatch => {
    const updated = await updateVote(id)
    dispatch(updateAnecdote(updated))
  }
}


export default anecdoteSlice.reducer
