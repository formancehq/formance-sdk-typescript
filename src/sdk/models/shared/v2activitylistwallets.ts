/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2ActivityListWallets = {
    name?: string | undefined;
};

/** @internal */
export namespace V2ActivityListWallets$ {
    export const inboundSchema: z.ZodType<V2ActivityListWallets, z.ZodTypeDef, unknown> = z.object({
        name: z.string().optional(),
    });

    export type Outbound = {
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ActivityListWallets> =
        z.object({
            name: z.string().optional(),
        });
}
