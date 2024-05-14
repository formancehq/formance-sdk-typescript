/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type AddAccountToPoolRequest = {
    accountID: string;
};

/** @internal */
export namespace AddAccountToPoolRequest$ {
    export const inboundSchema: z.ZodType<AddAccountToPoolRequest, z.ZodTypeDef, unknown> = z
        .object({
            accountID: z.string(),
        })
        .transform((v) => {
            return {
                accountID: v.accountID,
            };
        });

    export type Outbound = {
        accountID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddAccountToPoolRequest> = z
        .object({
            accountID: z.string(),
        })
        .transform((v) => {
            return {
                accountID: v.accountID,
            };
        });
}
