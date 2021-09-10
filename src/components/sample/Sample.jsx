import { makeStyles } from '@material-ui/styles'
import { Container, Button, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Collapse } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import React from 'react'
import { ExpandMoreOutlined } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  button1: {
    color: theme.palette.primary.light,
    background: theme.palette.primary.main
  },
  button2: {
    ...theme.myButton
  },
  media: {
    height: 0,
    paddingTop: () => `${9 / 16 * 100}%`
  }
}))

function Sample() {

  const [expanded, setExpanded] = useState(false)
  const classes = useStyles()

  const handleExpandClick = () => {
    return setExpanded(!expanded)
  }

  return (
    <Container>

      <Typography variant="h1">Heading</Typography>
      <Typography variant="h2">Heading</Typography>
      <Typography variant="h3">Heading</Typography>
      <Typography variant="h4">Heading</Typography>
      <Typography variant="h5">Heading</Typography>
      <Typography variant="h6">Heading</Typography>

      <Card>
        <CardMedia 
          className={classes.media}
          title="hihi"
          image="https://picsum.photos/seed/picsum/2000/3000"   
        />
        <CardHeader 
          title="Lizards"
          avatar={<Avatar src="https://picsum.photos/200/300?grayscale" />}
        />
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreOutlined />
        </IconButton>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent 
            children="Lizard are a widespread group of squamate reptiles, with over 6.000 species, ranging across all continents except Antarctica"
          />
        </Collapse>
        <CardActions 
          disableSpacing
          children={
          <IconButton children={<VisibilityIcon />} color="primary" />
          }
        />
      </Card>

    </Container>
  )
}

export default Sample