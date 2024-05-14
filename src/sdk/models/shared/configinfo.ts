/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Config, Config$ } from "./config";
import * as z from "zod";

export type ConfigInfo = {
    config: Config;
    server: string;
    version: string;
};

/** @internal */
export namespace ConfigInfo$ {
    export const inboundSchema: z.ZodType<ConfigInfo, z.ZodTypeDef, unknown> = z
        .object({
            config: Config$.inboundSchema,
            server: z.string(),
            version: z.string(),
        })
        .transform((v) => {
            return {
                config: v.config,
                server: v.server,
                version: v.version,
            };
        });

    export type Outbound = {
        config: Config$.Outbound;
        server: string;
        version: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ConfigInfo> = z
        .object({
            config: Config$.outboundSchema,
            server: z.string(),
            version: z.string(),
        })
        .transform((v) => {
            return {
                config: v.config,
                server: v.server,
                version: v.version,
            };
        });
}
