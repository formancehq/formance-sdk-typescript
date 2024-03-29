/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ConfigChangeSecret = {
    secret: string;
};

/** @internal */
export namespace ConfigChangeSecret$ {
    export type Inbound = {
        secret: string;
    };

    export const inboundSchema: z.ZodType<ConfigChangeSecret, z.ZodTypeDef, Inbound> = z
        .object({
            secret: z.string(),
        })
        .transform((v) => {
            return {
                secret: v.secret,
            };
        });

    export type Outbound = {
        secret: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ConfigChangeSecret> = z
        .object({
            secret: z.string(),
        })
        .transform((v) => {
            return {
                secret: v.secret,
            };
        });
}
