/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Heading, TextField } from "@aws-amplify/ui-react";
export default function Frame1(props) {
  const { idinput, employees, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      height="417px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Frame1")}
    >
      <Heading
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        level="1"
        children="Time Tracker"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <TextField
        display="flex"
        direction="column"
        width="530px"
        height="357px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="30px 15px 30px 15px"
        label="Employee ID"
        placeholder="“0001”"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        signin={employees?.id}
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
    </Flex>
  );
}
