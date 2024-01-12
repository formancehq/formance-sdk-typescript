/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type V2ActivityConfirmHold = {
    id: string;
};

/** @internal */
export namespace V2ActivityConfirmHold$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<V2ActivityConfirmHold, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ActivityConfirmHold> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}
