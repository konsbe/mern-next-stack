import React, { useState, useEffect } from "react";

import { Container, Typography, Grid, Button } from "@material-ui/core";
import Box from "@mui/material/Box";
import Projects from "../clientF/components/Projects";
import ProjectsForm from "../clientF/components/ProjectsForm";

import { useDispatch, useSelector } from "react-redux";
import getProjects from "../clientF/redux/Projects/projects.actions";
import styles from "./styles/Project.module.scss";



function ProjectsV(props) {
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getProjects());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg" className={styles.trigger}>
      {/* <Button className={classes.root}> */}
      <Typography variant="h2" align="center" className={styles.header}>
        here goes your projects
      </Typography>
      {/* </Button> */}
      <Box>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={8}>
              <Projects setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ProjectsForm currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}

// projects.getInitialProps = ({ query }) => {
//   // console.log(query, "fetch_data_query from pages/projects.js");
//   return { myParams: query };
// };

export default ProjectsV;
