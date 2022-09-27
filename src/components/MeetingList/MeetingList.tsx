import react from "react";
import { MeetingItem } from "../MeetingItem/MeetingItem";

export const MeetingList = () => {
  const meetings = [
    { label: "first", date: "25.09.2022" },
    { label: "second", date: "26.10.2022" },
    { label: "third", date: "25.09.2022" },
    { label: "fourth", date: "27.09.2022" },
  ];

  return (
    <div style={{width: '100%'}}>
      {meetings.map((meeting) => (
        <MeetingItem key={meeting.label} date={meeting.date} />
      ))}
    </div>
  );
};
