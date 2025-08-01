import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../request'

const AnecdoteForm = ({ setNotification }) => {
  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
      setNotification(`Has agregado la anécdota: "${data.content}"`)
      setTimeout(() => {
        setNotification('')
      }, 5000)
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate(content)
  }

  return (
    <form onSubmit={onCreate}>
      <input name="anecdote" placeholder="Nueva anécdota" />
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm
