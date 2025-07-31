import axios from 'axios'

const baseUrl = import.meta.env.VITE_BACKEND_URL

const getId = () => (100000 * Math.random()).toFixed(0)

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
export const updateVote = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  const anecdote = response.data

  const updatedAnecdote = {
    ...anecdote,
    votes: (anecdote.votes || 0) + 1
  }

  const updated = await axios.put(`${baseUrl}/${id}`, updatedAnecdote)
  return updated.data
}
export const createNew = async (content) => {
  const object = { content, id: getId(), votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

