/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2Ledger = {
    addedAt: Date;
    bucket: string;
    metadata?: { [k: string]: string } | undefined;
    name: string;
};

/** @internal */
export namespace V2Ledger$ {
    export const inboundSchema: z.ZodType<V2Ledger, z.ZodTypeDef, unknown> = z.object({
        addedAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        bucket: z.string(),
        metadata: z.record(z.string()).optional(),
        name: z.string(),
    });

    export type Outbound = {
        addedAt: string;
        bucket: string;
        metadata?: { [k: string]: string } | undefined;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2Ledger> = z.object({
        addedAt: z.date().transform((v) => v.toISOString()),
        bucket: z.string(),
        metadata: z.record(z.string()).optional(),
        name: z.string(),
    });
}
