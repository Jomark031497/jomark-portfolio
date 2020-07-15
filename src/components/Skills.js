import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HTML5 from "../portfolio-project-files/skill-logos/html5.png";
import CSS from "../portfolio-project-files/skill-logos/css.png";
import JSCRIPT from "../portfolio-project-files/skill-logos/javascript.png";
import PYTHON from "../portfolio-project-files/skill-logos/python.png";
import REACT from "../portfolio-project-files/skill-logos/react.png";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "275px",
    textAlign: "center",
    padding: "10px 20px 0 20px",
    background: "rgba(34, 51, 51,0.7)",
    color: "tan",
    borderRadius: "20px",
    margin: "0 auto",
  },
  cardMedia: {
    height: "175px",
    width: "175px",
    margin: "0 auto",
  },
  skillCards: {
    justifyContent: "center",
    margin: "0 20px",
    
  },
}));

const mySkills = [
  {
    name: "HTML5",
    description: "lorem ipsum greek stuffs that is a placeholder for evetryone",
    imgSrc: HTML5,
  },
  {
    name: "CSS",
    description: "lorem ipsum greek stuffs that is a placeholder for evetryone",
    imgSrc: CSS,
  },
  {
    name: "JAVASCRIPT",
    description: "lorem ipsum greek stuffs that is a placeholder for evetryone",
    imgSrc: JSCRIPT,
  },
  {
    name: "PYTHON",
    description: "lorem ipsum greek stuffs that is a placeholder for evetryone",
    imgSrc: PYTHON,
  },
  {
    name: "REACT",
    description: "lorem ipsum greek stuffs that is a placeholder for evetryone",
    imgSrc: REACT,
  },
];

const Skills = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item container justify="center">
          <Typography variant="h3" color="primary">
            SKILLS
          </Typography>
        </Grid>

        <Grid item container spacing={10} className={classes.skillCards}>
          {mySkills.map((skill) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cardMedia}
                  title={skill.name}
                  image={`${skill.imgSrc}`}
                />
                <CardContent>
                  <Typography variant="h4">{skill.name}</Typography>
                  <Typography variant="body">{skill.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;
