/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type AddAccountToPoolRequest = {
    accountID: string;
};

/** @internal */
export namespace AddAccountToPoolRequest$ {
    export type Inbound = {
        accountID: string;
    };

    export const inboundSchema: z.ZodType<AddAccountToPoolRequest, z.ZodTypeDef, Inbound> = z
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