import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@material-ui/core";
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
    width: "100%",
    margin: "0 auto"
  },
  cardContainer: {
    textAlign: "center",
    padding: "10px 20px",
    background: "rgba(0,0,0,0.4)",
    color: "tan",
    borderRadius: "20px",
    margin: "0 1rem",
    height: "100%",
  },
  cardMedia: {
    height: "170px",
    width: "140px",
    margin: "0 auto",
  },
  skillCards: {
    justifyContent: "center",
    margin: "0 20px",
  },
}));

const mySkills = [
  {
    name: "HTML 5",
    description: "Elements, Tags, Attributes, Classes and Ids, HTML5 Semantics",
    imgSrc: HTML5,
  },
  {
    name: "CSS 3",
    description:
      "Box Model, color system, CSS Units, Responsive Web Design (Flexbox/Grid)",
    imgSrc: CSS,
  },
  {
    name: "JavaScript (ES5/ES6)",
    description:
      "Object/Constructors, Modular Pattern, Classes, OOP Principles, Asynchronous Concepts",
    imgSrc: JSCRIPT,
  },
  {
    name: "React JS",
    description:
      "ReactDOM & JSX, Functional Components, Class Components, Hooks, Props, State, Lifecycle Methods, ",
    imgSrc: REACT,
  },
  {
    name: "Java",
    description: "Object/Constructors, Classes, Functions, OOP Principles",
    imgSrc: JAVA,
  },
  {
    name: "Python 3",
    description: "lorem ipsum greek stuffs that is a placeholder for evetryone",
    imgSrc: PYTHON,
  },

  {
    name: "Express JS",
    description: "lorem ipsum greek stuffs that is a placeholder for evetryone",
    imgSrc: EXPRESS,
  },
  {
    name: "NodeJS",
    description: "lorem ipsum greek stuffs that is a placeholder for evetryone",
    imgSrc: NODE,
  },
  {
    name: "MongoDB",
    description: "lorem ipsum greek stuffs that is a placeholder for evetryone",
    imgSrc: MONGO,
  },
  {
    name: "mySQL",
    description: "lorem ipsum greek stuffs that is a placeholder for evetryone",
    imgSrc: MYSQL,
  },
];

const Skills = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="div" className={classes.root}>
        <Grid container>
          <Grid item container justify="center">
            <Typography variant="h3" color="primary">
              Skills
            </Typography>
          </Grid>

          <Grid item container spacing={3} className={classes.skillCards}>
            {mySkills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className={classes.cardContainer}>
                  <CardMedia
                    className={classes.cardMedia}
                    title={skill.name}
                    image={`${skill.imgSrc}`}
                  />
                  <CardContent>
                    <Typography variant="h5" color="primary">
                      {skill.name}
                    </Typography>
                    <Typography variant="body2">{skill.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Skills;
