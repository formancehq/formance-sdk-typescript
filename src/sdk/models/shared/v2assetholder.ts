/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2AssetHolder = {
    assets: { [k: string]: bigint };
};

/** @internal */
export namespace V2AssetHolder$ {
    export const inboundSchema: z.ZodType<V2AssetHolder, z.ZodTypeDef, unknown> = z
        .object({
            assets: z.record(z.number().transform((v) => BigInt(v))),
        })
        .transform((v) => {
            return {
                assets: v.assets,
            };
        });

    export type Outbound = {
        assets: { [k: string]: number };
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2AssetHolder> = z
        .object({
            assets: z.record(z.bigint().transform((v) => Number(v))),
        })
        .transform((v) => {
            return {
                assets: v.assets,
            };
        });
}
