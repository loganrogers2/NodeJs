import './UserCard.css'

export function UserCard({ user }) {
    return (
        <div className='user-card'>
            <img className='user-card-avatar' src={`https://robohash.org/${user.id}`} alt="" />
            <p>Nome:{user.name}</p>
            <p>Email:{user.email}</p>
            <p>Idade:{user.age}</p>
        </div>
    )
}
export default UserCard