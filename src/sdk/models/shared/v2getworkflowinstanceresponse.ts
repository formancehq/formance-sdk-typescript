/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2WorkflowInstance, V2WorkflowInstance$ } from "./v2workflowinstance";
import * as z from "zod";

export type V2GetWorkflowInstanceResponse = {
    data: V2WorkflowInstance;
};

/** @internal */
export namespace V2GetWorkflowInstanceResponse$ {
    export const inboundSchema: z.ZodType<V2GetWorkflowInstanceResponse, z.ZodTypeDef, unknown> = z
        .object({
            data: V2WorkflowInstance$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: V2WorkflowInstance$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2GetWorkflowInstanceResponse> =
        z
            .object({
                data: V2WorkflowInstance$.outboundSchema,
            })
            .transform((v) => {
                return {
                    data: v.data,
                };
            });
}
