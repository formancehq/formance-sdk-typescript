/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

export class LogData extends SpeakeasyBase {}

export enum LogType {
    NewTransaction = "NEW_TRANSACTION",
    SetMetadata = "SET_METADATA",
}

export class Log extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => LogData)
    data: LogData;

    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    date: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "hash" })
    hash: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: LogType;
}