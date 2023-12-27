/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { V2WorkflowInstance } from "./v2workflowinstance";
import { Expose, Transform, Type } from "class-transformer";

export class V2TriggerOccurrence extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    date: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "event" })
    event: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "triggerID" })
    triggerID: string;

    @SpeakeasyMetadata()
    @Expose({ name: "workflowInstance" })
    @Type(() => V2WorkflowInstance)
    workflowInstance: V2WorkflowInstance;

    @SpeakeasyMetadata()
    @Expose({ name: "workflowInstanceID" })
    workflowInstanceID: string;
}
