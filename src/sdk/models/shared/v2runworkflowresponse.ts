/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    V2WorkflowInstance,
    V2WorkflowInstance$inboundSchema,
    V2WorkflowInstance$Outbound,
    V2WorkflowInstance$outboundSchema,
} from "./v2workflowinstance.js";
import * as z from "zod";

export type V2RunWorkflowResponse = {
    data: V2WorkflowInstance;
};

/** @internal */
export const V2RunWorkflowResponse$inboundSchema: z.ZodType<
    V2RunWorkflowResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: V2WorkflowInstance$inboundSchema,
});

/** @internal */
export type V2RunWorkflowResponse$Outbound = {
    data: V2WorkflowInstance$Outbound;
};

/** @internal */
export const V2RunWorkflowResponse$outboundSchema: z.ZodType<
    V2RunWorkflowResponse$Outbound,
    z.ZodTypeDef,
    V2RunWorkflowResponse
> = z.object({
    data: V2WorkflowInstance$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2RunWorkflowResponse$ {
    /** @deprecated use `V2RunWorkflowResponse$inboundSchema` instead. */
    export const inboundSchema = V2RunWorkflowResponse$inboundSchema;
    /** @deprecated use `V2RunWorkflowResponse$outboundSchema` instead. */
    export const outboundSchema = V2RunWorkflowResponse$outboundSchema;
    /** @deprecated use `V2RunWorkflowResponse$Outbound` instead. */
    export type Outbound = V2RunWorkflowResponse$Outbound;
}
