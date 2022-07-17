import "./Feed.css";
import React, { useState } from "react";
import { useEffect } from "react";
import InputOption from "./InputOption/InputOption";
import Post from "./Post/Post";

// material-ui
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/Event";
import CalendarViewDayIcon from "@material-ui/icons/CalendarToday";

// firebase
import { db } from "../../../firebase";
import firebase from "firebase/compat/app";

//Redux
import { useSelector, selectUser } from "../../commonExports/reduxExport";

import FlipMove from "react-flip-move";

const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    if (input !== "") {
      db.collection("posts").add({
        name: user.displayName,
        description: user.email,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />

          <form action="">
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            name={post.data.name}
            description={post.data.description}
            message={post.data.message}
          />
        );
      })}
      </FlipMove>
    </div>
  );
};

export default Feed;
