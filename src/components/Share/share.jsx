import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material"

export default function Share() {
  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="./Assets/Profile_pic/1.jfif" alt="" className="shareProfileImg"/>
          <input placeholder="Kuidas sul läheb?" className="shareInput"/>
        </div>
      <hr className="shareHr"/>
      <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor= "green" className="shareMediaIcon"/>
              <span className="text">Foto/video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor= "blue" className="shareMediaIcon"/>
              <span className="text">Märgi</span>
            </div>
            <div className="shareOption">
              <Room className="shareMediaIcon"/>
              <span className="text">Asukoht</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor= "gold" className="shareMediaIcon"/>
              <span className="text">Emoji</span>
            </div>
          </div>
          <button className="shareButton">Jaga</button>
        </div>
      </div>
    </div>
  )
}
