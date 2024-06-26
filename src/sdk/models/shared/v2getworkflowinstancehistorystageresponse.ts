/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    V2WorkflowInstanceHistoryStage,
    V2WorkflowInstanceHistoryStage$,
} from "./v2workflowinstancehistorystage";
import * as z from "zod";

export type V2GetWorkflowInstanceHistoryStageResponse = {
    data: Array<V2WorkflowInstanceHistoryStage>;
};

/** @internal */
export namespace V2GetWorkflowInstanceHistoryStageResponse$ {
    export const inboundSchema: z.ZodType<
        V2GetWorkflowInstanceHistoryStageResponse,
        z.ZodTypeDef,
        unknown
    > = z.object({
        data: z.array(V2WorkflowInstanceHistoryStage$.inboundSchema),
    });

    export type Outbound = {
        data: Array<V2WorkflowInstanceHistoryStage$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        V2GetWorkflowInstanceHistoryStageResponse
    > = z.object({
        data: z.array(V2WorkflowInstanceHistoryStage$.outboundSchema),
    });
}
