/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Trigger } from "./trigger";
import { Expose, Type } from "class-transformer";

export class ListTriggersResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Trigger })
    @Expose({ name: "data" })
    @Type(() => Trigger)
    data: Trigger[];
}
