import React from "react";
import {View} from "react-native";

const Bird = ({birdBottom, birdLeft}) => {
  const birdWidth = 50;
  const birdHeight = 50;

  return (
    <View
      style={{
        backgroundColor: "red",
        width: birdWidth,
        height: birdHeight,
        position: "absolute",
        left: birdLeft - birdWidth / 2, //to center it
        bottom: birdBottom,
        borderRadius: 100
      }}
    />
  );
};

export default Bird;
