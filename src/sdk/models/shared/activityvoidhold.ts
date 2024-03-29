/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ActivityVoidHold = {
    id: string;
};

/** @internal */
export namespace ActivityVoidHold$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<ActivityVoidHold, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ActivityVoidHold> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}
