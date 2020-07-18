import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@material-ui/core";
import placeholderImg from "../portfolio-project-files/images/placeholder.png";

import html5 from "../portfolio-project-files/skill-logos/html5.png";
import react from "../portfolio-project-files/skill-logos/react.png";
import css from "../portfolio-project-files/skill-logos/css.png";
import javascript from "../portfolio-project-files/skill-logos/javascript.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    borderRadius: "20px",
    border: "1px solid black",
  },
  cardContainer: {
    margin: "10px 20px",
    padding: "20px",
    background: "rgba(0,0,0,0.4)",
    color: "tan",
    borderRadius: "20px",
    textAlign: "center",
  },
  cardButtons: {
    justifyContent: "center",
  },
  techImage: {
    height: "50px",
    width: "50px",
  },
  techContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const myProjects = [
  {
    title: "Taskerino",
    description: "A Todo-List App",
    usedTech: [react, html5, css, javascript],
    imgSrc: placeholderImg,
  },
  {
    title: "Weatherino",
    description: "A Weather App",
    usedTech: [react, html5, css, javascript],
    imgSrc: placeholderImg,
  },
  {
    title: "Book-Tracker",
    description: "A Book Tracker App",
    usedTech: [react, html5, css, javascript],
    imgSrc: placeholderImg,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div">
        <Grid container justify="center" alignItems="center">
          {myProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    image={`${project.imgSrc}`}
                    title={project.title}
                    className={classes.cardMedia}
                  />
                </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" color="primary">
                    {project.title}
                  </Typography>

                  <Typography variant="body2" color="secondary" component="p">
                    {project.description}
                  </Typography>
                  <div className={classes.techContainer}>
                    {project.usedTech.map((tech, index) => (
                      <Typography variant="body2" component="div" key={index}>
                        <img
                          src={`${tech}`}
                          alt="a compo"
                          className={classes.techImage}
                        />
                      </Typography>
                    ))}
                  </div>
                </CardContent>

                <CardActions className={classes.cardButtons}>
                  <Button size="small" color="primary" variant="outlined">
                    Source Code
                  </Button>
                  <Button size="small" color="primary" variant="outlined">
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
