import "./online.css"

export default function Online({user}) {
  return (
    <li className="onlineFriend">
        <div className="imgContainer">
                                    
            <div className="rightBarOnline">
                <img src={user.profilePicture} alt="" className="onlineProfileImg" />
            </div>
            <span className="onlineFriendListUserName">{user.username}</span>
        </div>
    </li>
  )
}
