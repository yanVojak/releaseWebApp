import react, { useCallback, useState } from "react";

import { ReactComponent as AccountIcon } from '../../assets/account.svg';
import { ReactComponent as LingoLogo } from '../../assets/lingo-logo.svg';

import styles from "./styles.module.scss";

import classNames from "classnames";
import { Link } from "react-router-dom";
import SecondaryLogo from "../SecondaryLogo/SecondaryLogo";

const Account = () => {
  const [location, setlocation] = useState<string>();
  const [userIp, setUserIp] = useState('');


  const getUserIp = useCallback(() => {
    const apiKey = '59b3c5f3c1454cbeb2420a6368a967f4';

    fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey).then((data: Response) => {
      data.json().then((data) => {
        setUserIp(data.ip_address)
      })
    })
  }, [setUserIp])

  const getLocation = useCallback(() => {

    const showPosition = (position: GeolocationPosition) => {
      setlocation(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`)
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, function showError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            setlocation("User denied the request for Geolocation.")
            break;
          case error.POSITION_UNAVAILABLE:
            setlocation("Location information is unavailable.")
            break;
          case error.TIMEOUT:
            setlocation("The request to get user location timed out.")
        }
      });
    } else {
      setlocation("Geolocation is not supported by this browser.")
    }
  }, [setlocation])

  return (
    <div className={styles.container}>

      <button onClick={getLocation}>get location</button>
      <p>current location: {location}</p>

      <h2>host</h2>
      <p>{window.location.host}</p>

      <h2>hostname</h2>
      <p>{window.location.hostname}</p>

      <h2>origin</h2>
      <p>{window.location.origin}</p>

      <h2>ip</h2>
      <button onClick={getUserIp}>get ip</button>
      <p>{userIp}</p>
    </div>
  );
};

export { Account };
