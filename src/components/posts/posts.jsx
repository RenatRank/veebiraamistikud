import "./posts.css"
import { useState } from "react";
import {MoreVert, Favorite, ThumbUp} from "@mui/icons-material"
import {Users} from "../../mockData.js"
export default function Post({post}) {
const [like, setLike] = useState(post.like);
const [isLiked, setIsLiked] = useState(false);

const LikeFunction = () => {
    if (isLiked === false){
        setLike (like + 1);
        setIsLiked (true);
    }else{
        setLike(like -1);
        setIsLiked(false);
    }
    
}

  return (
    <div className="post">
        <div className="postsWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="profilePic" src={Users.filter((u) =>u.id === post.userId)[0].profilePicture} alt="" />
                    <span className="postUserName">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight"><MoreVert/></div>
            </div>
            <div className="postCenter">
                <span className="postsText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <Favorite className="heart" onClick = {LikeFunction}/>
                    <ThumbUp className="like" onClick = {LikeFunction} />
                    <span className="likeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentText">{post.comment}</span>
                </div>
            </div>
        </div>
    </div>
  )
}
