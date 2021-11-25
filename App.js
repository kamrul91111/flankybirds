import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View, Dimensions} from "react-native";

// grab screen width and height
const {width, height} = Dimensions.get("window");

// components
import Bird from "./components/Bird";
import Obstacles from "./components/Obstacles";

const App = () => {
  // to drop the bird, grab the bottom, we just increase & decrease this value to give the illusion of droping bird
  const [birdBottom, setBirdBottom] = useState(height / 2); //start at the middle of the screen
  const [obstaclesLeft, setObstaclesLeft] = useState(width); //starts off screen
  const [obstaclesLeft1, setObstaclesLeft1] = useState(width + width / 2 + 30); //starts off screen
  const [negHeight, setNegHeight] = useState(0); // randomize the height

  // left position of bird
  const birdLeft = width / 2;
  // by which value to draw down the bird
  const gravity = 3;
  const speed = 3; //how fast the columns move

  // to be able to access interval functions globally
  let gravityTimer;
  let obstaclesLeftTimer;
  let obstaclesLeftTimer1;

  // obstacle props
  const obstacleWidth = 60;
  const obstacleHeight = 300;
  const gap = 200; //gap between obstacles
  const color1 = "green";
  const color2 = "red";
  const color3 = "yellow";
  const color4 = "pink";

  // drop the bird
  useEffect(() => {
    // as long as the bird is not at the end of the screen
    if (birdBottom > 0) {
      // invoke this function every 30ms
      gravityTimer = setInterval(() => {
        setBirdBottom(y => y - gravity); //reduce by integer, so bird goes down, 0 means absolute bottom
      }, 30);

      // clearing the interval
      return () => {
        clearInterval(gravityTimer);
      };
    }

    // cleanup
    return () => {
      setBirdBottom(height / 2);
    };
  }, [birdBottom]); //fire if bottom changes

  // start first obstacles
  useEffect(() => {
    // makes the obstacle go off screen using its width
    if (obstaclesLeft > -obstacleWidth) {
      obstaclesLeftTimer = setInterval(() => {
        setObstaclesLeft(x => x - speed);
      }, 30);

      // clear interval
      return () => {
        clearInterval(obstaclesLeftTimer);
      };
    } else {
      // essentially turning this into a recursive function as, when if condition is fullfilled,
      // it is reset back to screen width and if condition starts again
      setObstaclesLeft(width);
      setNegHeight( -Math.random() * 100); //assign a random number
    }

    // cleanup
    return () => {
      setObstaclesLeft(width);
    };
  }, [obstaclesLeft]);

  // start second obstacles
  useEffect(() => {
    // makes the obstacle go off screen using its width
    if (obstaclesLeft1 > -obstacleWidth) {
      obstaclesLeftTimer1 = setInterval(() => {
        setObstaclesLeft1(x => x - speed);
      }, 30);

      // clear interval
      return () => {
        clearInterval(obstaclesLeftTimer1);
      };
    } else {
      // essentially turning this into a recursive function as, when if condition is fullfilled,
      // it is reset back to screen width and if condition starts again
      setObstaclesLeft1(width);
    }

    // cleanup
    return () => {
      setObstaclesLeft1(width);
    };
  }, [obstaclesLeft1]);

  console.log(negHeight)

  return (
    <View style={styles.container}>
      {/* pass the position props */}
      <Bird birdBottom={birdBottom} birdLeft={birdLeft} />
      {/* first set */}
      <Obstacles
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        gap={gap}
        obstaclesLeft={obstaclesLeft}
        color1={color1}
        color2={color2}
        randomBottom={Number(negHeight)}
      />
      {/* second set */}
      <Obstacles
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        gap={gap}
        obstaclesLeft={obstaclesLeft1}
        color1={color3}
        color2={color4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
