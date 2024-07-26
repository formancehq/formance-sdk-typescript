/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    V2Workflow,
    V2Workflow$inboundSchema,
    V2Workflow$Outbound,
    V2Workflow$outboundSchema,
} from "./v2workflow.js";
import * as z from "zod";

export type V2CreateWorkflowResponse = {
    data: V2Workflow;
};

/** @internal */
export const V2CreateWorkflowResponse$inboundSchema: z.ZodType<
    V2CreateWorkflowResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: V2Workflow$inboundSchema,
});

/** @internal */
export type V2CreateWorkflowResponse$Outbound = {
    data: V2Workflow$Outbound;
};

/** @internal */
export const V2CreateWorkflowResponse$outboundSchema: z.ZodType<
    V2CreateWorkflowResponse$Outbound,
    z.ZodTypeDef,
    V2CreateWorkflowResponse
> = z.object({
    data: V2Workflow$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2CreateWorkflowResponse$ {
    /** @deprecated use `V2CreateWorkflowResponse$inboundSchema` instead. */
    export const inboundSchema = V2CreateWorkflowResponse$inboundSchema;
    /** @deprecated use `V2CreateWorkflowResponse$outboundSchema` instead. */
    export const outboundSchema = V2CreateWorkflowResponse$outboundSchema;
    /** @deprecated use `V2CreateWorkflowResponse$Outbound` instead. */
    export type Outbound = V2CreateWorkflowResponse$Outbound;
}
