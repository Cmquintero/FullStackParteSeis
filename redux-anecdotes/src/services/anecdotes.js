import axios from 'axios'

const baseUrl = import.meta.env.VITE_BACKEND_URL //en el archivo .env que es ignorado por github ya que asi lo modifique esta la creacion del baseurl,ya se hizo algo igual en las partes 2 y 3 
// pero agrego el comentario para revisar y aprender en el commit 6cc8206 se puede ver el archivo env si la base de datos se utiliza (dbatlas) tambien modificare para que se vea el .env

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

