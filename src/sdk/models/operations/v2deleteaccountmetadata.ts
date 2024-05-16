/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2DeleteAccountMetadataRequest = {
    /**
     * Name of the ledger.
     */
    ledger: string;
    /**
     * Account address
     */
    address: string;
    /**
     * The key to remove.
     */
    key: string;
};

export type V2DeleteAccountMetadataResponse = {};

/** @internal */
export namespace V2DeleteAccountMetadataRequest$ {
    export const inboundSchema: z.ZodType<V2DeleteAccountMetadataRequest, z.ZodTypeDef, unknown> = z
        .object({
            ledger: z.string(),
            address: z.string(),
            key: z.string(),
        })
        .transform((v) => {
            return {
                ledger: v.ledger,
                address: v.address,
                key: v.key,
            };
        });

    export type Outbound = {
        ledger: string;
        address: string;
        key: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2DeleteAccountMetadataRequest> =
        z
            .object({
                ledger: z.string(),
                address: z.string(),
                key: z.string(),
            })
            .transform((v) => {
                return {
                    ledger: v.ledger,
                    address: v.address,
                    key: v.key,
                };
            });
}

/** @internal */
export namespace V2DeleteAccountMetadataResponse$ {
    export const inboundSchema: z.ZodType<V2DeleteAccountMetadataResponse, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        V2DeleteAccountMetadataResponse
    > = z.object({});
}
