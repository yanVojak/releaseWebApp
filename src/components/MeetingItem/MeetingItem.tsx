import react from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

interface IMeetingItemProps {
  date: string;
}

const MeetingItem: React.FC<IMeetingItemProps> = ({ date }) => {
  return (
    <NavLink to={'/meeting'} className={styles.container} >
      <span style={{marginRight: '10px'}}>{date}</span>
      <span>meeting</span>
    </NavLink>
  );
};

export { MeetingItem };
