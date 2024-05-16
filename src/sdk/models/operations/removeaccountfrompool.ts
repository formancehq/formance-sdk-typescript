/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type RemoveAccountFromPoolRequest = {
    /**
     * The pool ID.
     */
    poolId: string;
    /**
     * The account ID.
     */
    accountId: string;
};

export type RemoveAccountFromPoolResponse = {};

/** @internal */
export namespace RemoveAccountFromPoolRequest$ {
    export const inboundSchema: z.ZodType<RemoveAccountFromPoolRequest, z.ZodTypeDef, unknown> = z
        .object({
            poolId: z.string(),
            accountId: z.string(),
        })
        .transform((v) => {
            return {
                poolId: v.poolId,
                accountId: v.accountId,
            };
        });

    export type Outbound = {
        poolId: string;
        accountId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveAccountFromPoolRequest> = z
        .object({
            poolId: z.string(),
            accountId: z.string(),
        })
        .transform((v) => {
            return {
                poolId: v.poolId,
                accountId: v.accountId,
            };
        });
}

/** @internal */
export namespace RemoveAccountFromPoolResponse$ {
    export const inboundSchema: z.ZodType<RemoveAccountFromPoolResponse, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveAccountFromPoolResponse> =
        z.object({});
}
