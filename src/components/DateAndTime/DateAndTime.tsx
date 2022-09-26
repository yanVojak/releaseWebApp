import react, { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Button, TextField } from "@mui/material/";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

interface ILevelListProps {
  changeDate: (date: Date) => void;
}

export const DateAndTime: React.FC<ILevelListProps> = ({ changeDate }) => {
  const [value, setValue] = useState<Dayjs | null>(null);
  const minutes = ["00", "15", "30", "45"];
  const hours = [];
  for (let i = 0; i < 24; i++) {
    if (i < 10) {
      hours[i] = "0" + i;
    } else {
      hours[i] = String(i);
    }
  }

  const times: string[] = [];

  for (let index = 0; index < 50; index++) {
    if (index < 10) {
      times[index] = `0${index}:0${index}`;
    } else {
      times[index] = `${index}:${index}`;
    }
  }

  const [time, setTime] = useState({ hours: "", minutes: "" });

  useEffect(() => {
    if (time.hours && time.minutes) {
      console.log(time);
    }
  }, [time]);

  return (
    <div>
        <h3>
          {value ? (
            <button
              style={{
                border: "none",
                padding: ".5em",
              }}
              onClick={() => setValue(null)}
            >
              another date
            </button>
          ) : null}
          select {value ? "time" : "date"}
        </h3>
      {value ? (
        <div className="timeContainer">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {times.map((time) => (
              <div
                style={{
                  padding: ".2em .1em",
                  border: "1px solid black",
                  margin: "3px",
                  width: "80px",
                  textAlign: "center",
                  justifyContent: "space-between",
                }}
                key={time}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="date-time">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              openTo="day"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
              minDate={dayjs()}
            />
          </LocalizationProvider>
        </div>
      )}
    </div>
  );
};
