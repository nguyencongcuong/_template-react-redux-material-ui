import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  fullPageBackgroundVideo: {
    objectFit: "cover",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: "0",
    left: "0"
  }
}))

function FullPageBackgroundVideo() {
  const classes = useStyles()
  return (
    <video
      className={classes.fullPageBackgroundVideo} 
      controls 
      autoPlay 
      muted 
      loop 
    >
      <source 
        src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4" 
        type="video/mp4" 
    />
    </video>
  )
}

export default FullPageBackgroundVideo