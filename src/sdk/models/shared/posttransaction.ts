/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Posting, Posting$ } from "./posting";
import * as z from "zod";

export type PostTransactionScript = {
    plain: string;
    vars?: Record<string, any> | undefined;
};

export type PostTransaction = {
    metadata?: Record<string, any> | null | undefined;
    postings?: Array<Posting> | undefined;
    reference?: string | undefined;
    script?: PostTransactionScript | undefined;
    timestamp?: Date | undefined;
};

/** @internal */
export namespace PostTransactionScript$ {
    export type Inbound = {
        plain: string;
        vars?: Record<string, any> | undefined;
    };

    export const inboundSchema: z.ZodType<PostTransactionScript, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostTransactionScript> = z
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
export namespace PostTransaction$ {
    export type Inbound = {
        metadata?: Record<string, any> | null | undefined;
        postings?: Array<Posting$.Inbound> | undefined;
        reference?: string | undefined;
        script?: PostTransactionScript$.Inbound | undefined;
        timestamp?: string | undefined;
    };

    export const inboundSchema: z.ZodType<PostTransaction, z.ZodTypeDef, Inbound> = z
        .object({
            metadata: z.nullable(z.record(z.any())).optional(),
            postings: z.array(Posting$.inboundSchema).optional(),
            reference: z.string().optional(),
            script: z.lazy(() => PostTransactionScript$.inboundSchema).optional(),
            timestamp: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.postings === undefined ? null : { postings: v.postings }),
                ...(v.reference === undefined ? null : { reference: v.reference }),
                ...(v.script === undefined ? null : { script: v.script }),
                ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
            };
        });

    export type Outbound = {
        metadata?: Record<string, any> | null | undefined;
        postings?: Array<Posting$.Outbound> | undefined;
        reference?: string | undefined;
        script?: PostTransactionScript$.Outbound | undefined;
        timestamp?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostTransaction> = z
        .object({
            metadata: z.nullable(z.record(z.any())).optional(),
            postings: z.array(Posting$.outboundSchema).optional(),
            reference: z.string().optional(),
            script: z.lazy(() => PostTransactionScript$.outboundSchema).optional(),
            timestamp: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.postings === undefined ? null : { postings: v.postings }),
                ...(v.reference === undefined ? null : { reference: v.reference }),
                ...(v.script === undefined ? null : { script: v.script }),
                ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
            };
        });
}
