/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2CreateWorkflowRequest = {
    name?: string | undefined;
    stages: Array<{ [k: string]: any }>;
};

/** @internal */
export const V2CreateWorkflowRequest$inboundSchema: z.ZodType<
    V2CreateWorkflowRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string().optional(),
    stages: z.array(z.record(z.any())),
});

/** @internal */
export type V2CreateWorkflowRequest$Outbound = {
    name?: string | undefined;
    stages: Array<{ [k: string]: any }>;
};

/** @internal */
export const V2CreateWorkflowRequest$outboundSchema: z.ZodType<
    V2CreateWorkflowRequest$Outbound,
    z.ZodTypeDef,
    V2CreateWorkflowRequest
> = z.object({
    name: z.string().optional(),
    stages: z.array(z.record(z.any())),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2CreateWorkflowRequest$ {
    /** @deprecated use `V2CreateWorkflowRequest$inboundSchema` instead. */
    export const inboundSchema = V2CreateWorkflowRequest$inboundSchema;
    /** @deprecated use `V2CreateWorkflowRequest$outboundSchema` instead. */
    export const outboundSchema = V2CreateWorkflowRequest$outboundSchema;
    /** @deprecated use `V2CreateWorkflowRequest$Outbound` instead. */
    export type Outbound = V2CreateWorkflowRequest$Outbound;
}
