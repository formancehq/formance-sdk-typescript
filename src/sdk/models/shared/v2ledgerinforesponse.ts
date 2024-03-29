/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2LedgerInfo, V2LedgerInfo$ } from "./v2ledgerinfo";
import * as z from "zod";

export type V2LedgerInfoResponse = {
    data?: V2LedgerInfo | undefined;
};

/** @internal */
export namespace V2LedgerInfoResponse$ {
    export type Inbound = {
        data?: V2LedgerInfo$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<V2LedgerInfoResponse, z.ZodTypeDef, Inbound> = z
        .object({
            data: V2LedgerInfo$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });

    export type Outbound = {
        data?: V2LedgerInfo$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2LedgerInfoResponse> = z
        .object({
            data: V2LedgerInfo$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });
}
