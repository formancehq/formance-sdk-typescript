/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2TriggerData = {
    event: string;
    filter?: string | undefined;
    name?: string | undefined;
    vars?: { [k: string]: any } | undefined;
    workflowID: string;
};

/** @internal */
export const V2TriggerData$inboundSchema: z.ZodType<V2TriggerData, z.ZodTypeDef, unknown> =
    z.object({
        event: z.string(),
        filter: z.string().optional(),
        name: z.string().optional(),
        vars: z.record(z.any()).optional(),
        workflowID: z.string(),
    });

/** @internal */
export type V2TriggerData$Outbound = {
    event: string;
    filter?: string | undefined;
    name?: string | undefined;
    vars?: { [k: string]: any } | undefined;
    workflowID: string;
};

/** @internal */
export const V2TriggerData$outboundSchema: z.ZodType<
    V2TriggerData$Outbound,
    z.ZodTypeDef,
    V2TriggerData
> = z.object({
    event: z.string(),
    filter: z.string().optional(),
    name: z.string().optional(),
    vars: z.record(z.any()).optional(),
    workflowID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2TriggerData$ {
    /** @deprecated use `V2TriggerData$inboundSchema` instead. */
    export const inboundSchema = V2TriggerData$inboundSchema;
    /** @deprecated use `V2TriggerData$outboundSchema` instead. */
    export const outboundSchema = V2TriggerData$outboundSchema;
    /** @deprecated use `V2TriggerData$Outbound` instead. */
    export type Outbound = V2TriggerData$Outbound;
}
