import "./AllFriends.css"

export default function AllFriends({user}) {
  return (
    <li className="leftBarFriend">
        <img className="leftBarFriendImg" src={user.profilePicture} alt="" />
        <span className="leftBarFriendName">{user.username}</span>
        
    </li>
    
  )
}
