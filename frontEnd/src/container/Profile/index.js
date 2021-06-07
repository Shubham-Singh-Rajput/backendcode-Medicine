import React, { useEffect, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Avatar from "@material-ui/core/Avatar";

import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { useSelector, useDispatch } from "react-redux";
import userProfile from "./../../redux/action/User/profile";
import shoapkeperProfile from "./../../redux/action/Shopkeper/profile";
import { Redirect } from "react-router";
import PATH from "./../../config/webPath";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PROFILE({ history, loaction }) {
  const classes = useStyles();
  const TOKEN = useSelector(({ Token }) => Token);
  const PROFILE = useSelector(({ Profile }) => Profile);
  const TYPE = useSelector(({ Type }) => Type);
  const dispatch = useDispatch();
  const url = useMemo(() => {
    return TYPE === "user"
    
      ? PROFILE?.currentUser?.profilePic
      : PROFILE?.Shoapkeper?.profilePic;
  }, [PROFILE, TYPE]);
  useEffect(() => {
    if (TYPE === "shopkeper") {
      dispatch(shoapkeperProfile.PROFILE);
    } else {
      dispatch(userProfile.PROFILE);
    }
  }, [loaction, dispatch, TYPE]);
  return (
    <>
      {TOKEN.length > 0 && TYPE.length > 0 ? (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {TYPE === "user"
                  ? PROFILE?.currentUser?.type
                  : PROFILE?.Shoapkeper?.type}
              </Avatar>
            }
            title={
              TYPE === "user"
                ? PROFILE?.currentUser?.name
                : PROFILE?.Shoapkeper?.name
            }
          />
          {url ? (
            <CardMedia className={classes.media} image={url} />
          ) : (
            <h1 style={{ textAlign: "center" }}>PIC IS NOT UPLOADED{url}</h1>
          )}

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {TYPE === "user"
                ? PROFILE?.currentUser?.Address
                : PROFILE?.Shoapkeper?.Address}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {TYPE === "user"
                ? PROFILE?.currentUser?.email
                : PROFILE?.Shoapkeper?.email}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {TYPE === "user" ? "" : PROFILE?.Shoapkeper?.shopName}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Redirect to={PATH.HOME}></Redirect>
      )}
    </>
  );
}
