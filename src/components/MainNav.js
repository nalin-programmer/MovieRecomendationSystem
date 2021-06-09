import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    // backgroundColor: "#122442",
    backgroundColor: "#24468b",
    zIndex: 100,
  },
  nav: {
    backgroundColor: "#122442",
    borderRadius: "50%",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/movies");
    } else if (value === 2) {
      history.push("/series");
    } else if (value === 3) {
      history.push("/search");
    }
  }, [value, history]);

  return (
    <Fade>
      <Fade bottom>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Trending"
            icon={<WhatshotIcon />}
            className={classes.nav}
          />

          <BottomNavigationAction
            style={{ color: "white" }}
            label="Movies"
            icon={<MovieIcon />}
          />

          <BottomNavigationAction
            style={{ color: "white" }}
            label="TV Series"
            icon={<TvIcon />}
          />

          <BottomNavigationAction
            style={{ color: "white" }}
            label="Search"
            icon={<SearchIcon />}
          />
        </BottomNavigation>
      </Fade>
    </Fade>
  );
}