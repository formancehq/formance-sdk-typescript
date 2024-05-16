/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type ChangeConfigSecretRequest = {
    /**
     * Config ID
     */
    id: string;
    configChangeSecret?: shared.ConfigChangeSecret | undefined;
};

/** @internal */
export namespace ChangeConfigSecretRequest$ {
    export const inboundSchema: z.ZodType<ChangeConfigSecretRequest, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            ConfigChangeSecret: shared.ConfigChangeSecret$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.ConfigChangeSecret === undefined
                    ? null
                    : { configChangeSecret: v.ConfigChangeSecret }),
            };
        });

    export type Outbound = {
        id: string;
        ConfigChangeSecret?: shared.ConfigChangeSecret$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ChangeConfigSecretRequest> = z
        .object({
            id: z.string(),
            configChangeSecret: shared.ConfigChangeSecret$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.configChangeSecret === undefined
                    ? null
                    : { ConfigChangeSecret: v.configChangeSecret }),
            };
        });
}
