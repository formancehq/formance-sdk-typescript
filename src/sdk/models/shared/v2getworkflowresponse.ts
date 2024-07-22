/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    V2Workflow,
    V2Workflow$inboundSchema,
    V2Workflow$Outbound,
    V2Workflow$outboundSchema,
} from "./v2workflow.js";
import * as z from "zod";

export type V2GetWorkflowResponse = {
    data: V2Workflow;
};

/** @internal */
export const V2GetWorkflowResponse$inboundSchema: z.ZodType<
    V2GetWorkflowResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: V2Workflow$inboundSchema,
});

/** @internal */
export type V2GetWorkflowResponse$Outbound = {
    data: V2Workflow$Outbound;
};

/** @internal */
export const V2GetWorkflowResponse$outboundSchema: z.ZodType<
    V2GetWorkflowResponse$Outbound,
    z.ZodTypeDef,
    V2GetWorkflowResponse
> = z.object({
    data: V2Workflow$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2GetWorkflowResponse$ {
    /** @deprecated use `V2GetWorkflowResponse$inboundSchema` instead. */
    export const inboundSchema = V2GetWorkflowResponse$inboundSchema;
    /** @deprecated use `V2GetWorkflowResponse$outboundSchema` instead. */
    export const outboundSchema = V2GetWorkflowResponse$outboundSchema;
    /** @deprecated use `V2GetWorkflowResponse$Outbound` instead. */
    export type Outbound = V2GetWorkflowResponse$Outbound;
}
