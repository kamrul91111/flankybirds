import React from "react";
import {View, Text} from "react-native";
import {backgroundColor} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Obstacles = ({obstacleWidth, obstacleHeight, gap, obstaclesLeft, color1, color2, randomBottom}) => {
  return (
    <>
      {/* obstacle 1 */}
      <View
        style={{
          position: "absolute",
          backgroundColor: color1,
          width: obstacleWidth,
          height: obstacleHeight,
          left: obstaclesLeft,
          bottom: 0 + obstacleHeight + gap, //positioning at the top
        }}
      />
      {/* obstacle 2 */}
      <View
        style={{
          position: "absolute",
          backgroundColor: color2,
          width: obstacleWidth,
          height: obstacleHeight,
          left: obstaclesLeft,
          bottom: 0
        }}
      />
    </>
  );
};

export default Obstacles;
