/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
} from "@aws-amplify/ui-react/internal";
import { Timesheet } from "../models";
import { schema } from "../models/schema";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function PunchExitButtons(props) {
  const { timesheet, overrides, ...rest } = props;
  const punchinButtonOnClick = useDataStoreUpdateAction({
    fields: {},
    id: timesheet?.Clock_in,
    model: Timesheet,
    schema: schema,
  });
  return (
    <Flex
      gap="200px"
      direction="row"
      width="fit-content"
      height="48px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "PunchExitButtons")}
    >
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="180px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="46px"
        position="relative"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Punch In/Out"
        onClick={() => {
          punchinButtonOnClick();
        }}
        {...getOverrideProps(overrides, "Punch in Button")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="180px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="46px"
        position="relative"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Exit"
        {...getOverrideProps(overrides, "Exit Button")}
      ></Button>
    </Flex>
  );
}
