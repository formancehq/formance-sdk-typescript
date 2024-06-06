/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ActivityAddAccountMetadata = {
    id: string;
    ledger: string;
    metadata: { [k: string]: string };
};

/** @internal */
export namespace ActivityAddAccountMetadata$ {
    export const inboundSchema: z.ZodType<ActivityAddAccountMetadata, z.ZodTypeDef, unknown> =
        z.object({
            id: z.string(),
            ledger: z.string(),
            metadata: z.record(z.string()),
        });

    export type Outbound = {
        id: string;
        ledger: string;
        metadata: { [k: string]: string };
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ActivityAddAccountMetadata> =
        z.object({
            id: z.string(),
            ledger: z.string(),
            metadata: z.record(z.string()),
        });
}
