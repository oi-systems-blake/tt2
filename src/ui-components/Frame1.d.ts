/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Employees } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type Frame1Props = React.PropsWithChildren<Partial<FlexProps> & {
    idinput?: (event: SyntheticEvent) => void;
    employees?: Employees;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Frame1(props: Frame1Props): React.ReactElement;
