/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2ServerInfo = {
    version: string;
};

/** @internal */
export namespace V2ServerInfo$ {
    export const inboundSchema: z.ZodType<V2ServerInfo, z.ZodTypeDef, unknown> = z
        .object({
            version: z.string(),
        })
        .transform((v) => {
            return {
                version: v.version,
            };
        });

    export type Outbound = {
        version: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ServerInfo> = z
        .object({
            version: z.string(),
        })
        .transform((v) => {
            return {
                version: v.version,
            };
        });
}
