/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Ledger, V2Ledger$ } from "./v2ledger";
import * as z from "zod";

export type V2GetLedgerResponse = {
    data: V2Ledger;
};

/** @internal */
export namespace V2GetLedgerResponse$ {
    export const inboundSchema: z.ZodType<V2GetLedgerResponse, z.ZodTypeDef, unknown> = z
        .object({
            data: V2Ledger$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: V2Ledger$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2GetLedgerResponse> = z
        .object({
            data: V2Ledger$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}
