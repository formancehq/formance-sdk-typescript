/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    V2Posting,
    V2Posting$inboundSchema,
    V2Posting$Outbound,
    V2Posting$outboundSchema,
} from "./v2posting.js";
import * as z from "zod";

export type V2Transaction = {
    id: bigint;
    metadata: { [k: string]: string };
    postings: Array<V2Posting>;
    reference?: string | undefined;
    reverted: boolean;
    timestamp: Date;
};

/** @internal */
export const V2Transaction$inboundSchema: z.ZodType<V2Transaction, z.ZodTypeDef, unknown> =
    z.object({
        id: z.number().transform((v) => BigInt(v)),
        metadata: z.record(z.string()),
        postings: z.array(V2Posting$inboundSchema),
        reference: z.string().optional(),
        reverted: z.boolean(),
        timestamp: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
    });

/** @internal */
export type V2Transaction$Outbound = {
    id: number;
    metadata: { [k: string]: string };
    postings: Array<V2Posting$Outbound>;
    reference?: string | undefined;
    reverted: boolean;
    timestamp: string;
};

/** @internal */
export const V2Transaction$outboundSchema: z.ZodType<
    V2Transaction$Outbound,
    z.ZodTypeDef,
    V2Transaction
> = z.object({
    id: z.bigint().transform((v) => Number(v)),
    metadata: z.record(z.string()),
    postings: z.array(V2Posting$outboundSchema),
    reference: z.string().optional(),
    reverted: z.boolean(),
    timestamp: z.date().transform((v) => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2Transaction$ {
    /** @deprecated use `V2Transaction$inboundSchema` instead. */
    export const inboundSchema = V2Transaction$inboundSchema;
    /** @deprecated use `V2Transaction$outboundSchema` instead. */
    export const outboundSchema = V2Transaction$outboundSchema;
    /** @deprecated use `V2Transaction$Outbound` instead. */
    export type Outbound = V2Transaction$Outbound;
}
