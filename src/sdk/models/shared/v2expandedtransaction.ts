/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    V2Posting,
    V2Posting$inboundSchema,
    V2Posting$Outbound,
    V2Posting$outboundSchema,
} from "./v2posting.js";
import {
    V2Volume,
    V2Volume$inboundSchema,
    V2Volume$Outbound,
    V2Volume$outboundSchema,
} from "./v2volume.js";
import * as z from "zod";

export type V2ExpandedTransaction = {
    id: bigint;
    metadata: { [k: string]: string };
    postCommitVolumes?: { [k: string]: { [k: string]: V2Volume } } | undefined;
    postings: Array<V2Posting>;
    preCommitVolumes?: { [k: string]: { [k: string]: V2Volume } } | undefined;
    reference?: string | undefined;
    reverted: boolean;
    timestamp: Date;
};

/** @internal */
export const V2ExpandedTransaction$inboundSchema: z.ZodType<
    V2ExpandedTransaction,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.number().transform((v) => BigInt(v)),
    metadata: z.record(z.string()),
    postCommitVolumes: z.record(z.record(V2Volume$inboundSchema)).optional(),
    postings: z.array(V2Posting$inboundSchema),
    preCommitVolumes: z.record(z.record(V2Volume$inboundSchema)).optional(),
    reference: z.string().optional(),
    reverted: z.boolean(),
    timestamp: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
});

/** @internal */
export type V2ExpandedTransaction$Outbound = {
    id: number;
    metadata: { [k: string]: string };
    postCommitVolumes?: { [k: string]: { [k: string]: V2Volume$Outbound } } | undefined;
    postings: Array<V2Posting$Outbound>;
    preCommitVolumes?: { [k: string]: { [k: string]: V2Volume$Outbound } } | undefined;
    reference?: string | undefined;
    reverted: boolean;
    timestamp: string;
};

/** @internal */
export const V2ExpandedTransaction$outboundSchema: z.ZodType<
    V2ExpandedTransaction$Outbound,
    z.ZodTypeDef,
    V2ExpandedTransaction
> = z.object({
    id: z.bigint().transform((v) => Number(v)),
    metadata: z.record(z.string()),
    postCommitVolumes: z.record(z.record(V2Volume$outboundSchema)).optional(),
    postings: z.array(V2Posting$outboundSchema),
    preCommitVolumes: z.record(z.record(V2Volume$outboundSchema)).optional(),
    reference: z.string().optional(),
    reverted: z.boolean(),
    timestamp: z.date().transform((v) => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ExpandedTransaction$ {
    /** @deprecated use `V2ExpandedTransaction$inboundSchema` instead. */
    export const inboundSchema = V2ExpandedTransaction$inboundSchema;
    /** @deprecated use `V2ExpandedTransaction$outboundSchema` instead. */
    export const outboundSchema = V2ExpandedTransaction$outboundSchema;
    /** @deprecated use `V2ExpandedTransaction$Outbound` instead. */
    export type Outbound = V2ExpandedTransaction$Outbound;
}
