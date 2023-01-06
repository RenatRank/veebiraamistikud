import "./header.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="headerLeft">
                <span className="logo">SNTK</span>
            </div>
            <div className="headerMiddle">
                <div className="search">
                    <Search className="search_icon"/><input className="searchInput" placeholder="Otsing"/>
                </div>
            </div>
            <div className="headerRight">
                <div className="headerLinks">
                    <span className="mainPage">Main</span>
                    <span className="timeline">Uudistevoog</span>
                </div>
            
                <div className="icons">
                    <div className="headerIcon"><Person /><span className="icon-notif">1</span></div>
                    <div className="headerIcon"><Chat /><span className="icon-notif">1</span></div>
                    <div className="headerIcon"><Notifications /><span className="icon-notif">1</span></div>
                    
                </div>

            <img src="./Assets/Profile_pic/1.jfif" alt="Profile image" className="prof-img" />
            </div>
        </div>
    )
}