/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2ActivityGetWallet = {
    id: string;
};

/** @internal */
export namespace V2ActivityGetWallet$ {
    export const inboundSchema: z.ZodType<V2ActivityGetWallet, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
    });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ActivityGetWallet> = z.object({
        id: z.string(),
    });
}
