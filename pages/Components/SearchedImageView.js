import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import GetAppIcon from "@material-ui/icons/GetApp";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  image: {
    objectFit: "contain",
  },
}));

const ImageView = (props) => {
  const classes = useStyles();

  const getGridListCols = () => {
    if (isWidthUp("lg", props.width)) {
      return 3;
    }

    if (isWidthUp("md", props.width)) {
      return 2;
    }

    return 1;
  };

  return (
    <div className={classes.root}>
      <GridList cols={getGridListCols()} cellHeight={300} spacing={5}>
        {props.searchedImages.map((item) => (
          <GridListTile key={`${Math.random()}`} md={12}>
            <img
              src={item.urls}
              alt={item.description}
              className={classes.image}
            />
            <GridListTileBar
              title={item.description}
              titlePosition={"top"}
              subtitle={
                <span style={{ fontSize: 15 }}>
                  <FavoriteIcon
                    style={{ color: "red", fontSize: 15, marginRight: 10 }}
                  />
                  {item.likes}
                </span>
              }
              actionPosition={"right"}
              actionIcon={
                <IconButton
                  className={classes.icon}
                  onClick={() => window.open(item.downloadLink, "_blank")}
                >
                  <GetAppIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default withWidth()(ImageView);
