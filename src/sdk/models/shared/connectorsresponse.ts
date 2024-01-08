/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Connector } from "./connector";
import { Expose, Type } from "class-transformer";

export class ConnectorsResponseData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "connectorID" })
    connectorID: string;

    @SpeakeasyMetadata()
    @Expose({ name: "enabled" })
    enabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "provider" })
    provider: Connector;
}

export class ConnectorsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ConnectorsResponseData })
    @Expose({ name: "data" })
    @Type(() => ConnectorsResponseData)
    data: ConnectorsResponseData[];
}
