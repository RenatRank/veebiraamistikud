import "./rightBar.css"
import {Redeem} from "@mui/icons-material"
import {Users} from "../../mockData.js"
import Online from "../online/Online.jsx"

export default function RightBar(profile) {
    return (
        <div className="rightBar">
            <div className="rightBarWrapper">
                <div className="birthdayContainer">
                    <span className="birthdayText">
                       <Redeem className="birthdayIcon"/>
                        Kasutajal Jane Doe on täna sünnipäev
                    </span>
                </div>
                    <h3 className="onlineText">Online sõbrad</h3>
                        <ul className="onlineFriendList">
                            {Users.map(u=>(
                                <Online key= {u.id} user={u}/>    
                            )
                                
                            )}
                        </ul>
                
            </div>
        </div>
    )
}