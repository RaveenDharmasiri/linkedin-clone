import "./LeftSide.css";

// material-ui
import { Avatar } from "@material-ui/core";

const LeftSide = () => {

    const recentItem = (topic) => (
        <div className="leftside__recentItem">
            <span className="leftside__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return(
        <div className="leftside">
            <div className="leftside__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt="" />
                <Avatar className="leftside__avatar" />
                <h2>Raveen Dharmasiri</h2>
                <h4>raveen.dharmasiri@gmail.com</h4>
            </div> 

            <div className="leftside__stats">
                <div className="leftside__stat">
                    <p>Who view you</p>
                    <p className="leftside__stateNumber">2,543</p>
                </div>
                <div className="leftside__stat">
                    <p>Views on post</p>
                    <p className="leftside__stateNumber">2,448</p>
                </div>
            </div>

            <div className="leftside__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('gaming')}
                {recentItem('bestintheworld')}
                {recentItem('linkedinclone')}
            </div>
        </div>
    );
}

export default LeftSide;