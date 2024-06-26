/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateBankAccountMetadataRequest = {
    metadata: { [k: string]: string } | null;
};

/** @internal */
export namespace UpdateBankAccountMetadataRequest$ {
    export const inboundSchema: z.ZodType<UpdateBankAccountMetadataRequest, z.ZodTypeDef, unknown> =
        z.object({
            metadata: z.nullable(z.record(z.string())),
        });

    export type Outbound = {
        metadata: { [k: string]: string } | null;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateBankAccountMetadataRequest
    > = z.object({
        metadata: z.nullable(z.record(z.string())),
    });
}
