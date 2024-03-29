/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2ActivityVoidHold = {
    id: string;
};

/** @internal */
export namespace V2ActivityVoidHold$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<V2ActivityVoidHold, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ActivityVoidHold> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}
