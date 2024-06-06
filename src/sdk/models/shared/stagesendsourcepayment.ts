/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type StageSendSourcePayment = {
    id: string;
};

/** @internal */
export namespace StageSendSourcePayment$ {
    export const inboundSchema: z.ZodType<StageSendSourcePayment, z.ZodTypeDef, unknown> = z.object(
        {
            id: z.string(),
        }
    );

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StageSendSourcePayment> =
        z.object({
            id: z.string(),
        });
}
