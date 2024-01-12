/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Posting, V2Posting$ } from "./v2posting";
import { z } from "zod";

export type V2Transaction = {
    id: number;
    metadata: Record<string, string>;
    postings: Array<V2Posting>;
    reference?: string | undefined;
    reverted: boolean;
    timestamp: Date;
};

/** @internal */
export namespace V2Transaction$ {
    export type Inbound = {
        id: number;
        metadata: Record<string, string>;
        postings: Array<V2Posting$.Inbound>;
        reference?: string | undefined;
        reverted: boolean;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<V2Transaction, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.number().int(),
            metadata: z.record(z.string()),
            postings: z.array(V2Posting$.inboundSchema),
            reference: z.string().optional(),
            reverted: z.boolean(),
            timestamp: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
        })
        .transform((v) => {
            return {
                id: v.id,
                metadata: v.metadata,
                postings: v.postings,
                ...(v.reference === undefined ? null : { reference: v.reference }),
                reverted: v.reverted,
                timestamp: v.timestamp,
            };
        });

    export type Outbound = {
        id: number;
        metadata: Record<string, string>;
        postings: Array<V2Posting$.Outbound>;
        reference?: string | undefined;
        reverted: boolean;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2Transaction> = z
        .object({
            id: z.number().int(),
            metadata: z.record(z.string()),
            postings: z.array(V2Posting$.outboundSchema),
            reference: z.string().optional(),
            reverted: z.boolean(),
            timestamp: z.date().transform((v) => v.toISOString()),
        })
        .transform((v) => {
            return {
                id: v.id,
                metadata: v.metadata,
                postings: v.postings,
                ...(v.reference === undefined ? null : { reference: v.reference }),
                reverted: v.reverted,
                timestamp: v.timestamp,
            };
        });
}