/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ActivityGetPayment = {
    id: string;
};

/** @internal */
export namespace ActivityGetPayment$ {
    export const inboundSchema: z.ZodType<ActivityGetPayment, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
    });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ActivityGetPayment> = z.object({
        id: z.string(),
    });
}
