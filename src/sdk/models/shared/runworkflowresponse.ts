/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { WorkflowInstance, WorkflowInstance$ } from "./workflowinstance";
import * as z from "zod";

export type RunWorkflowResponse = {
    data: WorkflowInstance;
};

/** @internal */
export namespace RunWorkflowResponse$ {
    export const inboundSchema: z.ZodType<RunWorkflowResponse, z.ZodTypeDef, unknown> = z.object({
        data: WorkflowInstance$.inboundSchema,
    });

    export type Outbound = {
        data: WorkflowInstance$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunWorkflowResponse> = z.object({
        data: WorkflowInstance$.outboundSchema,
    });
}
