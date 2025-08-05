import { useQueryClient, useMutation } from "@tanstack/react-query"
import { createAnecdote } from "../request"
import { useNotificationDispatch } from "../notificationContext"

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

const newAnecdoteMutation = useMutation({
  mutationFn: createAnecdote,
  onSuccess: (newAnecdote) => {
    queryClient.invalidateQueries(['anecdotes'])

    dispatch({
      type: 'showNotification',
      payload: `You added: "${newAnecdote.content}"`
    })  
    setTimeout(() => {
      dispatch({ type: 'hideNotification' })
    }, 5000)
  },
  onError: () => {
    dispatch({
      type: 'showNotification',
      payload: 'ERROR: Aca nada de migajas,agrega una anecdota de mas de 5 caracteres'
    })
    setTimeout(() => {
      dispatch({ type: 'hideNotification' })
    }, 5000)
  }
})


const onCreate = (event) => {
  event.preventDefault()
  const content = event.target.anecdote.value.trim()
  event.target.anecdote.value = ''

  if (content.length < 5) {
    dispatch({
      type: 'showNotification',
      payload: 'ERROR: Aca nada de migajas,agrega una anecdota de mas de 5 caracteres'
    })
    setTimeout(() => {
      dispatch({ type: 'hideNotification' })
    }, 5000)
    return
  }

  newAnecdoteMutation.mutate({ content })
}


  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
