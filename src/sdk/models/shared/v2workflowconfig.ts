/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type V2WorkflowConfig = {
    name?: string | undefined;
    stages: Array<{ [k: string]: any }>;
};

/** @internal */
export const V2WorkflowConfig$inboundSchema: z.ZodType<V2WorkflowConfig, z.ZodTypeDef, unknown> =
    z.object({
        name: z.string().optional(),
        stages: z.array(z.record(z.any())),
    });

/** @internal */
export type V2WorkflowConfig$Outbound = {
    name?: string | undefined;
    stages: Array<{ [k: string]: any }>;
};

/** @internal */
export const V2WorkflowConfig$outboundSchema: z.ZodType<
    V2WorkflowConfig$Outbound,
    z.ZodTypeDef,
    V2WorkflowConfig
> = z.object({
    name: z.string().optional(),
    stages: z.array(z.record(z.any())),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2WorkflowConfig$ {
    /** @deprecated use `V2WorkflowConfig$inboundSchema` instead. */
    export const inboundSchema = V2WorkflowConfig$inboundSchema;
    /** @deprecated use `V2WorkflowConfig$outboundSchema` instead. */
    export const outboundSchema = V2WorkflowConfig$outboundSchema;
    /** @deprecated use `V2WorkflowConfig$Outbound` instead. */
    export type Outbound = V2WorkflowConfig$Outbound;
}
