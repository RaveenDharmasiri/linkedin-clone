import "./Feed.css";
import React, {useState} from "react";
import InputOption from "./InputOption/InputOption";
import Post from "./Post/Post";

// material-ui
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/Event";
import CalendarViewDayIcon from "@material-ui/icons/CalendarToday";


const Feed = () => {
    const [posts, setPosts] = useState([]);

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />

                    <form action="">
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5f9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E"/>
                </div>
            </div>

            {posts.map( (post) => {
                return (<Post name={post.name} description={post.description} message={post.message}/> );
            })}

            <Post name="Raveen Dharmasiri" description="This is a test" message="WOW this worked" />
            
        </div>
    );
}

export default Feed;