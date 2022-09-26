import react, { useState, useCallback, useEffect } from "react";
import { Dayjs } from "dayjs";
import { Button, TextField } from "@mui/material/";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

interface ILevelListProps {
  changeDate: (date: Date) => void;
}

export const DateAndTime: React.FC<ILevelListProps> = ({ changeDate }) => {
  const [date, setValue] = useState<Dayjs | null>(null);
  const [time, setTime] = useState('');

  useEffect(() => {
    if(date && time) {
        const newDate = new Date()
    }
  }, [date, time])

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={date}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};
