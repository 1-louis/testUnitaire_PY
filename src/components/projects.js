import React, { useState } from 'react';
import { Tabs, Tab, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography, Box, AppBar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const projects = [
  { name: 'React Project #1', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" },
  { name: 'React Project #2', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" },
  { name: 'React Project #3', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" },
];

function Projects() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={activeTab} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="React Javascript" />
          <Tab label="Ionic Angular" />
          <Tab label="ASP.NET" />
          <Tab label="Symfony" />
        </Tabs>
      </AppBar>
      <TabPanel value={activeTab} index={0}>
        <Grid container spacing={3} className="projects-grid">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  style={{ height: 176 }}
                  image="images/IMG-20231104-WA0008.jpg"
                  title={project.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">GitHub</Button>
                  <Button size="small" color="primary">CodePen</Button>
                  <Button size="small" color="primary">Live Demo</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <h1>This is Angular</h1>
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        <h1>This is ASP.NET</h1>
      </TabPanel>
      <TabPanel value={activeTab} index={3}>
        <h1>This is Symfony</h1>
      </TabPanel>
    </div>
  );
}

export default Projects;
