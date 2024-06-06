/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Posting, V2Posting$ } from "./v2posting";
import * as z from "zod";

export type V2PostTransactionScript = {
    plain: string;
    vars?: { [k: string]: any } | undefined;
};

export type V2PostTransaction = {
    metadata: { [k: string]: string };
    postings?: Array<V2Posting> | undefined;
    reference?: string | undefined;
    script?: V2PostTransactionScript | undefined;
    timestamp?: Date | undefined;
};

/** @internal */
export namespace V2PostTransactionScript$ {
    export const inboundSchema: z.ZodType<V2PostTransactionScript, z.ZodTypeDef, unknown> =
        z.object({
            plain: z.string(),
            vars: z.record(z.any()).optional(),
        });

    export type Outbound = {
        plain: string;
        vars?: { [k: string]: any } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2PostTransactionScript> =
        z.object({
            plain: z.string(),
            vars: z.record(z.any()).optional(),
        });
}

/** @internal */
export namespace V2PostTransaction$ {
    export const inboundSchema: z.ZodType<V2PostTransaction, z.ZodTypeDef, unknown> = z.object({
        metadata: z.record(z.string()),
        postings: z.array(V2Posting$.inboundSchema).optional(),
        reference: z.string().optional(),
        script: z.lazy(() => V2PostTransactionScript$.inboundSchema).optional(),
        timestamp: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
    });

    export type Outbound = {
        metadata: { [k: string]: string };
        postings?: Array<V2Posting$.Outbound> | undefined;
        reference?: string | undefined;
        script?: V2PostTransactionScript$.Outbound | undefined;
        timestamp?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2PostTransaction> = z.object({
        metadata: z.record(z.string()),
        postings: z.array(V2Posting$.outboundSchema).optional(),
        reference: z.string().optional(),
        script: z.lazy(() => V2PostTransactionScript$.outboundSchema).optional(),
        timestamp: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
    });
}
