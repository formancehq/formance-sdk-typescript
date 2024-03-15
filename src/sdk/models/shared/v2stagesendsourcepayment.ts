/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2StageSendSourcePayment = {
    id: string;
};

/** @internal */
export namespace V2StageSendSourcePayment$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<V2StageSendSourcePayment, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2StageSendSourcePayment> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}
