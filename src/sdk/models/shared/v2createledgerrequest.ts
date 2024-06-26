/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2CreateLedgerRequest = {
    bucket?: string | undefined;
    metadata?: { [k: string]: string } | undefined;
};

/** @internal */
export namespace V2CreateLedgerRequest$ {
    export const inboundSchema: z.ZodType<V2CreateLedgerRequest, z.ZodTypeDef, unknown> = z.object({
        bucket: z.string().optional(),
        metadata: z.record(z.string()).optional(),
    });

    export type Outbound = {
        bucket?: string | undefined;
        metadata?: { [k: string]: string } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2CreateLedgerRequest> =
        z.object({
            bucket: z.string().optional(),
            metadata: z.record(z.string()).optional(),
        });
}
