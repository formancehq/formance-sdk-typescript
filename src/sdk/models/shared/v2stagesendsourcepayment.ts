/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2StageSendSourcePayment = {
    id: string;
};

/** @internal */
export namespace V2StageSendSourcePayment$ {
    export const inboundSchema: z.ZodType<V2StageSendSourcePayment, z.ZodTypeDef, unknown> =
        z.object({
            id: z.string(),
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2StageSendSourcePayment> =
        z.object({
            id: z.string(),
        });
}
