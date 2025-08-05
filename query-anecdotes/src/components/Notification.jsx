import { useNotificationValue } from '../notificationContext'

const Notification = () => {
  const message = useNotificationValue()

  if (!message) return null

  const style = {
    color: 'green',
    background: '#e6ffe6',
    fontSize: 16,
    border: '2px solid green',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    maxWidth: '400px',
  }

  return <div style={style}>{message}</div>
}

export default Notification
