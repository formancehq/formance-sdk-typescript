/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2WorkflowInstanceHistory, V2WorkflowInstanceHistory$ } from "./v2workflowinstancehistory";
import * as z from "zod";

export type V2GetWorkflowInstanceHistoryResponse = {
    data: Array<V2WorkflowInstanceHistory>;
};

/** @internal */
export namespace V2GetWorkflowInstanceHistoryResponse$ {
    export const inboundSchema: z.ZodType<
        V2GetWorkflowInstanceHistoryResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            data: z.array(V2WorkflowInstanceHistory$.inboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: Array<V2WorkflowInstanceHistory$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        V2GetWorkflowInstanceHistoryResponse
    > = z
        .object({
            data: z.array(V2WorkflowInstanceHistory$.outboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}
