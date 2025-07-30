import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector((state) => state.notification)

  if (!notification) return null

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

  return <div style={style}>{notification}</div>
}

export default Notification
