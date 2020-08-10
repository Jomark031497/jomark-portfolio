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
    height: "30px",
    width: "30px",
  },
  techContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

const myProjects = [
  {
    title: "Bloggerino",
    description:
      "A Fullstack blogging app created using MERN Stack where you can post or share your blogs.",
    usedTech: [REACT, NODE, EXPRESS, MONGO, JSCRIPT],
    imgSrc: placeholderImg,
  },
  {
    title: "Taskerino",
    description:
      "A project-based todo-list web app I made as part of The Odin Project's curriculum.",
    usedTech: [REACT, HTML5, CSS, JSCRIPT],
    imgSrc: placeholderImg,
  },
  {
    title: "Wheres Waldo?",
    description:
      "A classic game where you are tasked to find waldo and other special characters. Done as a part of The Odin Project's curriculum.",
    usedTech: [REACT, NODE, EXPRESS, MONGO],
    imgSrc: placeholderImg,
  },
  {
    title: "Weatherino",
    description:
      "A Weather App created using React and OpenWeatherMap API. Done as a part of The Odin Project's Curriculum.",
    usedTech: [REACT, HTML5, CSS, JSCRIPT],
    imgSrc: placeholderImg,
  },
  {
    title: "Book-Tracker",
    description:
      "A Book Tracker App that allow users to add books with their authors,genre, personal rating, and indicate if the user has already read it or not.",
    usedTech: [REACT, HTML5, CSS, JSCRIPT],
    imgSrc: placeholderImg,
  },
  {
    title: "Integrated Patient Management System",
    description:
      "A Paperless, digital Hospital Management System. This system computerizes information keeping of patients, To permit Doctors to retrieve entire patient history instantly, and help minimize paperworks.  ",
    usedTech: [JAVA, MYSQL],
    imgSrc: placeholderImg,
  },
  {
    title: "Self Navigating Moss Removing Machine",
    description:
      "A Machine/Vehicle that cleans moss on a specific area. This project used  Python libraries such as NumPy, OpenCV and Tensorflow.",
    usedTech: [PYTHON],
    imgSrc: placeholderImg,
  },
  {
    title: "Truck Drivers Drowsiness Detector",
    description:
      "A safety mechanism device which will wake up the Truck driver if it detects drowsiness. This project used the Python library OpenCV and HaarCascade.",
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

                {/* <CardActions className={classes.cardButtons}>
                  <Button size="small" color="primary" variant="outlined">
                    Source Code
                  </Button>
                  <Button size="small" color="primary" variant="outlined">
                    Live Demo
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
