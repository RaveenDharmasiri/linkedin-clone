import "./HeaderOption.css";

// material-ui
import { Avatar } from "@material-ui/core";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <a href={title}>
        <h3 className="headerOption__title">{title}</h3>
      </a>
    </div>
  );
}

export default HeaderOption;
