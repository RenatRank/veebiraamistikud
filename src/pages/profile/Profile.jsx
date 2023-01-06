import "./Profile.css"
import Header from "../../components/header/header";
import RightBar from "../../components/rightBar/rightBar";
import LeftBar from "../../components/leftBar/leftBar";
import Feed from "../../components/feed/feed";

export default function Profile() {
  return (
    <div>
            <Header/>

            <div className="profile">
                <LeftBar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="Assets/Profile_pic/3.jfif" alt="" className="profileCoverImg" />
                            <img src="Assets/Profile_pic/6.jfif" alt="" className="profileUserImg" />
                        </div>
                    <div className="profileData">
                        <h4 className="profileName">Nimi</h4>
                        <h4 className="profileDesc">Tere</h4>
                    </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed/><RightBar/>
                    </div>
                </div>
            </div>


        </div>
  )
}
