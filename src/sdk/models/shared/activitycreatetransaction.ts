/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OrchestrationPostTransaction } from "./orchestrationposttransaction";
import { Expose, Type } from "class-transformer";

export class ActivityCreateTransaction extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => OrchestrationPostTransaction)
    data?: OrchestrationPostTransaction;

    @SpeakeasyMetadata()
    @Expose({ name: "ledger" })
    ledger?: string;
}
