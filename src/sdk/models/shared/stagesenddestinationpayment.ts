/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type StageSendDestinationPayment = {
    psp: string;
};

/** @internal */
export namespace StageSendDestinationPayment$ {
    export const inboundSchema: z.ZodType<StageSendDestinationPayment, z.ZodTypeDef, unknown> =
        z.object({
            psp: z.string(),
        });

    export type Outbound = {
        psp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StageSendDestinationPayment> =
        z.object({
            psp: z.string(),
        });
}
