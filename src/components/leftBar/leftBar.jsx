import "./leftBar.css";
import {RssFeed, Group} from "@mui/icons-material";
import {Users} from "../../mockData.js"
import AllFriends from "../AllFriends/AllFriends.jsx";


export default function LeftBar() {
    return (
        <div className="leftBar">
            <div className="leftBarWrapper">
                <ul className="leftBarList">
                    <li className="leftBarListItem">
                        <RssFeed className="leftBarIcon"/>
                        <span className="leftBarIconText">Uudistevoog</span>
                    </li>
                    <li className="leftBarListItem">
                        <Group className="leftBarIcon"/>
                        <span className="leftBarIconText">Kasutajad</span>
                    </li>
                    <ul className="leftBarFriendList">
                        {Users.map((u) => (
                            <AllFriends key={u.id} user={u}/>
                        ))}
                    </ul>
                </ul>
            </div>
        </div>
    )
}