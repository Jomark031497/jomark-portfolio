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

import { makeStyles } from "@material-ui/core/styles";
import HTML5 from "../portfolio-project-files/skill-logos/html5.png";
import CSS from "../portfolio-project-files/skill-logos/css.png";
import JSCRIPT from "../portfolio-project-files/skill-logos/javascript.png";
import PYTHON from "../portfolio-project-files/skill-logos/python.png";
import REACT from "../portfolio-project-files/skill-logos/react.png";
import JAVA from "../portfolio-project-files/skill-logos/java.png";
import EXPRESS from "../portfolio-project-files/skill-logos/express.png";
import NODE from "../portfolio-project-files/skill-logos/node.png";
import MONGO from "../portfolio-project-files/skill-logos/mongo.png";
import MYSQL from "../portfolio-project-files/skill-logos/MYSQL.png";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2rem",
  },
  cardMedia: {
    height: 0,
    paddingTop: "56.25%",
    borderRadius: "20px",
    border: "1px solid black",
    margin: "20px",
  },
  cardContainer: {
    background: "rgba(0,0,0,0.4)",
    color: "tan",
    borderRadius: "20px",
    textAlign: "center",
    height: "100%",
    margin: "0 20px",
  },
  cardButtons: {
    justifyContent: "center",
  },
  techImage: {
    height: "60px",
    width: "50px",
  },
  techContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

const myProjects = [
  {
    title: "Taskerino",
    description: "A Todo-List App",
    usedTech: [REACT, HTML5, CSS, JSCRIPT],
    imgSrc: placeholderImg,
  },
  {
    title: "Wheres Waldo?",
    description: "A classic game where you are tasked to find waldog",
    usedTech: [REACT, HTML5, CSS, JSCRIPT, NODE, EXPRESS, MONGO],
    imgSrc: placeholderImg,
  },
  {
    title: "Weatherino",
    description: "A Weather App",
    usedTech: [REACT, HTML5, CSS, JSCRIPT],
    imgSrc: placeholderImg,
  },
  {
    title: "Book-Tracker",
    description: "A Book Tracker App",
    usedTech: [REACT, HTML5, CSS, JSCRIPT],
    imgSrc: placeholderImg,
  },
  {
    title: "Integrated Patient Management System",
    description: "A Paperless, digital Hospital Management System",
    usedTech: [JAVA, MYSQL],
    imgSrc: placeholderImg,
  },
  {
    title: "Self Navigating Moss Removing Machine",
    description: "A Shitty Thesis which cleans moss",
    usedTech: [PYTHON],
    imgSrc: placeholderImg,
  },
  {
    title: "Truck Drivers Drowsiness Detector",
    description: "A Shitty Thesis which detects if the driver is sleepy/drowsy",
    usedTech: [PYTHON],
    imgSrc: placeholderImg,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.root}>
        <Grid
          container
          justify="center"
          className={classes.gridContainer}
          spacing={3}
        >
          <Grid item container justify="center">
            <Typography variant="h3" color="primary">
              Projects
            </Typography>
          </Grid>
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
