/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { WebhooksConfig, WebhooksConfig$ } from "./webhooksconfig";
import * as z from "zod";

export type ConfigResponse = {
    data: WebhooksConfig;
};

/** @internal */
export namespace ConfigResponse$ {
    export type Inbound = {
        data: WebhooksConfig$.Inbound;
    };

    export const inboundSchema: z.ZodType<ConfigResponse, z.ZodTypeDef, Inbound> = z
        .object({
            data: WebhooksConfig$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: WebhooksConfig$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ConfigResponse> = z
        .object({
            data: WebhooksConfig$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}
