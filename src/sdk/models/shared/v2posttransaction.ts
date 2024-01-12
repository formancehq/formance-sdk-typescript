/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Posting, V2Posting$ } from "./v2posting";
import { z } from "zod";

export type V2PostTransactionScript = {
    plain: string;
    vars?: Record<string, any> | undefined;
};

export type V2PostTransaction = {
    metadata: Record<string, string>;
    postings?: Array<V2Posting> | undefined;
    reference?: string | undefined;
    script?: V2PostTransactionScript | undefined;
    timestamp?: Date | undefined;
};

/** @internal */
export namespace V2PostTransactionScript$ {
    export type Inbound = {
        plain: string;
        vars?: Record<string, any> | undefined;
    };

    export const inboundSchema: z.ZodType<V2PostTransactionScript, z.ZodTypeDef, Inbound> = z
        .object({
            plain: z.string(),
            vars: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                plain: v.plain,
                ...(v.vars === undefined ? null : { vars: v.vars }),
            };
        });

    export type Outbound = {
        plain: string;
        vars?: Record<string, any> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2PostTransactionScript> = z
        .object({
            plain: z.string(),
            vars: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                plain: v.plain,
                ...(v.vars === undefined ? null : { vars: v.vars }),
            };
        });
}

/** @internal */
export namespace V2PostTransaction$ {
    export type Inbound = {
        metadata: Record<string, string>;
        postings?: Array<V2Posting$.Inbound> | undefined;
        reference?: string | undefined;
        script?: V2PostTransactionScript$.Inbound | undefined;
        timestamp?: string | undefined;
    };

    export const inboundSchema: z.ZodType<V2PostTransaction, z.ZodTypeDef, Inbound> = z
        .object({
            metadata: z.record(z.string()),
            postings: z.array(V2Posting$.inboundSchema).optional(),
            reference: z.string().optional(),
            script: z.lazy(() => V2PostTransactionScript$.inboundSchema).optional(),
            timestamp: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                metadata: v.metadata,
                ...(v.postings === undefined ? null : { postings: v.postings }),
                ...(v.reference === undefined ? null : { reference: v.reference }),
                ...(v.script === undefined ? null : { script: v.script }),
                ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
            };
        });

    export type Outbound = {
        metadata: Record<string, string>;
        postings?: Array<V2Posting$.Outbound> | undefined;
        reference?: string | undefined;
        script?: V2PostTransactionScript$.Outbound | undefined;
        timestamp?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2PostTransaction> = z
        .object({
            metadata: z.record(z.string()),
            postings: z.array(V2Posting$.outboundSchema).optional(),
            reference: z.string().optional(),
            script: z.lazy(() => V2PostTransactionScript$.outboundSchema).optional(),
            timestamp: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                metadata: v.metadata,
                ...(v.postings === undefined ? null : { postings: v.postings }),
                ...(v.reference === undefined ? null : { reference: v.reference }),
                ...(v.script === undefined ? null : { script: v.script }),
                ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
            };
        });
}