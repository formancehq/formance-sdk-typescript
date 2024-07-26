/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ConfigUser = {
    endpoint: string;
    eventTypes: Array<string>;
    name?: string | undefined;
    secret?: string | undefined;
};

/** @internal */
export const ConfigUser$inboundSchema: z.ZodType<ConfigUser, z.ZodTypeDef, unknown> = z.object({
    endpoint: z.string(),
    eventTypes: z.array(z.string()),
    name: z.string().optional(),
    secret: z.string().optional(),
});

/** @internal */
export type ConfigUser$Outbound = {
    endpoint: string;
    eventTypes: Array<string>;
    name?: string | undefined;
    secret?: string | undefined;
};

/** @internal */
export const ConfigUser$outboundSchema: z.ZodType<ConfigUser$Outbound, z.ZodTypeDef, ConfigUser> =
    z.object({
        endpoint: z.string(),
        eventTypes: z.array(z.string()),
        name: z.string().optional(),
        secret: z.string().optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConfigUser$ {
    /** @deprecated use `ConfigUser$inboundSchema` instead. */
    export const inboundSchema = ConfigUser$inboundSchema;
    /** @deprecated use `ConfigUser$outboundSchema` instead. */
    export const outboundSchema = ConfigUser$outboundSchema;
    /** @deprecated use `ConfigUser$Outbound` instead. */
    export type Outbound = ConfigUser$Outbound;
}
