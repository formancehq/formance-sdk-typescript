/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type AssetHolder = {
    assets: Record<string, bigint>;
};

/** @internal */
export namespace AssetHolder$ {
    export type Inbound = {
        assets: Record<string, number>;
    };

    export const inboundSchema: z.ZodType<AssetHolder, z.ZodTypeDef, Inbound> = z
        .object({
            assets: z.record(z.number().transform((v) => BigInt(v))),
        })
        .transform((v) => {
            return {
                assets: v.assets,
            };
        });

    export type Outbound = {
        assets: Record<string, number>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AssetHolder> = z
        .object({
            assets: z.record(z.bigint().transform((v) => Number(v))),
        })
        .transform((v) => {
            return {
                assets: v.assets,
            };
        });
}
