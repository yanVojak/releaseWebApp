import react, { useCallback, useState } from "react";

import { ReactComponent as AccountIcon } from '../../assets/account.svg';
import { ReactComponent as LingoLogo } from '../../assets/lingo-logo.svg';

import styles from "./styles.module.scss";

import classNames from "classnames";
import { Link } from "react-router-dom";
import SecondaryLogo from "../SecondaryLogo/SecondaryLogo";

const Account = () => {
  const [location, setlocation] = useState<string>();

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
      <div className={styles.headerLine}>
        <div className={styles.item}>
          <div className={styles.secondaryLogo}>
            <SecondaryLogo />
          </div>
        </div>
        <div className={classNames(styles.item)}>
            <LingoLogo className={styles.logo} />
        </div>
        <div className={styles.item}>
          <Link to='' className={styles.account}>
            <AccountIcon />
          </Link>
        </div>
      </div>

      <button onClick={getLocation}>get location</button>
      <p>current location: {location}</p>

      <h2>host</h2>
      <p>{window.location.host}</p>

      <h2>hostname</h2>
      <p>{window.location.hostname}</p>

      <h2>origin</h2>
      <p>{window.location.origin}</p>
    </div>
  );
};

export { Account };
