import "./feed.css"
import Share from "../Share/share"
import Post from "../posts/posts"
import {Posts} from "../../mockData.js"



export default function Feed() {
    return (
        <div className="feedContainer">
            <div className="feedWrapper">
                <Share/>
                {Posts.map(p=>(
                    <Post key={p.id} post = {p}/>
                ))}

            </div>
        </div>
    )
}