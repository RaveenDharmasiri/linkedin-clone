import "./HeaderOption.css";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectUser } from "../../../features/userSlice";

// material-ui
import { Avatar } from "@material-ui/core";

function HeaderOption({avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoUrl}>
          {user?.displayName[0]}
        </Avatar>
      )}
      <a href={title}>
        <h3 className="headerOption__title">{title}</h3>
      </a>
    </div>
  );
}

export default HeaderOption;
