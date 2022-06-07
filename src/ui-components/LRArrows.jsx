/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MyIcon from "./MyIcon";
import { TextField, View } from "@aws-amplify/ui-react";
export default function LRArrows(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="560px"
      height="73px"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "LRArrows")}
    >
      <MyIcon
        position="absolute"
        top="0%"
        bottom="0%"
        left="86.96%"
        right="0%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        type="send"
        {...getOverrideProps(overrides, "MyIcon31512714")}
      ></MyIcon>
      <MyIcon
        position="absolute"
        top="0%"
        bottom="0%"
        left="13.04%"
        right="73.93%"
        overflow="hidden"
        transformOrigin="top left"
        transform="rotate(180deg)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        type="send"
        {...getOverrideProps(overrides, "MyIcon31512716")}
      ></MyIcon>
      <TextField
        display="flex"
        position="absolute"
        top="0px"
        left="130px"
        direction="column"
        width="300px"
        height="88px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        placeholder="Date"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
    </View>
  );
}
