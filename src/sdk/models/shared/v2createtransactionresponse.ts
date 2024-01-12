/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Transaction, V2Transaction$ } from "./v2transaction";
import { z } from "zod";

export type V2CreateTransactionResponse = {
    data: V2Transaction;
};

/** @internal */
export namespace V2CreateTransactionResponse$ {
    export type Inbound = {
        data: V2Transaction$.Inbound;
    };

    export const inboundSchema: z.ZodType<V2CreateTransactionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            data: V2Transaction$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: V2Transaction$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2CreateTransactionResponse> = z
        .object({
            data: V2Transaction$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}