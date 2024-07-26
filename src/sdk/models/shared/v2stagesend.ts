/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    V2Monetary,
    V2Monetary$inboundSchema,
    V2Monetary$Outbound,
    V2Monetary$outboundSchema,
} from "./v2monetary.js";
import {
    V2StageSendDestination,
    V2StageSendDestination$inboundSchema,
    V2StageSendDestination$Outbound,
    V2StageSendDestination$outboundSchema,
} from "./v2stagesenddestination.js";
import {
    V2StageSendSource,
    V2StageSendSource$inboundSchema,
    V2StageSendSource$Outbound,
    V2StageSendSource$outboundSchema,
} from "./v2stagesendsource.js";
import * as z from "zod";

export type V2StageSend = {
    amount?: V2Monetary | undefined;
    destination?: V2StageSendDestination | undefined;
    metadata?: { [k: string]: string } | undefined;
    source?: V2StageSendSource | undefined;
    timestamp?: Date | undefined;
};

/** @internal */
export const V2StageSend$inboundSchema: z.ZodType<V2StageSend, z.ZodTypeDef, unknown> = z.object({
    amount: V2Monetary$inboundSchema.optional(),
    destination: V2StageSendDestination$inboundSchema.optional(),
    metadata: z.record(z.string()).optional(),
    source: V2StageSendSource$inboundSchema.optional(),
    timestamp: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
});

/** @internal */
export type V2StageSend$Outbound = {
    amount?: V2Monetary$Outbound | undefined;
    destination?: V2StageSendDestination$Outbound | undefined;
    metadata?: { [k: string]: string } | undefined;
    source?: V2StageSendSource$Outbound | undefined;
    timestamp?: string | undefined;
};

/** @internal */
export const V2StageSend$outboundSchema: z.ZodType<
    V2StageSend$Outbound,
    z.ZodTypeDef,
    V2StageSend
> = z.object({
    amount: V2Monetary$outboundSchema.optional(),
    destination: V2StageSendDestination$outboundSchema.optional(),
    metadata: z.record(z.string()).optional(),
    source: V2StageSendSource$outboundSchema.optional(),
    timestamp: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2StageSend$ {
    /** @deprecated use `V2StageSend$inboundSchema` instead. */
    export const inboundSchema = V2StageSend$inboundSchema;
    /** @deprecated use `V2StageSend$outboundSchema` instead. */
    export const outboundSchema = V2StageSend$outboundSchema;
    /** @deprecated use `V2StageSend$Outbound` instead. */
    export type Outbound = V2StageSend$Outbound;
}
