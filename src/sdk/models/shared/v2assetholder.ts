/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type V2AssetHolder = {
    assets: Record<string, number>;
};

/** @internal */
export namespace V2AssetHolder$ {
    export type Inbound = {
        assets: Record<string, number>;
    };

    export const inboundSchema: z.ZodType<V2AssetHolder, z.ZodTypeDef, Inbound> = z
        .object({
            assets: z.record(z.number().int()),
        })
        .transform((v) => {
            return {
                assets: v.assets,
            };
        });

    export type Outbound = {
        assets: Record<string, number>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2AssetHolder> = z
        .object({
            assets: z.record(z.number().int()),
        })
        .transform((v) => {
            return {
                assets: v.assets,
            };
        });
}
