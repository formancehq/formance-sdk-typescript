/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { V2Stats } from "./v2stats";
import { Expose, Type } from "class-transformer";

export class V2StatsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => V2Stats)
    data: V2Stats;
}
