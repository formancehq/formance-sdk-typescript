/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type WiseConfig = {
    apiKey: string;
    name: string;
    /**
     * The frequency at which the connector will try to fetch new BalanceTransaction objects from Wise API.
     *
     * @remarks
     *
     */
    pollingPeriod?: string | undefined;
};

/** @internal */
export const WiseConfig$inboundSchema: z.ZodType<WiseConfig, z.ZodTypeDef, unknown> = z.object({
    apiKey: z.string(),
    name: z.string(),
    pollingPeriod: z.string().default("120s"),
});

/** @internal */
export type WiseConfig$Outbound = {
    apiKey: string;
    name: string;
    pollingPeriod: string;
};

/** @internal */
export const WiseConfig$outboundSchema: z.ZodType<WiseConfig$Outbound, z.ZodTypeDef, WiseConfig> =
    z.object({
        apiKey: z.string(),
        name: z.string(),
        pollingPeriod: z.string().default("120s"),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WiseConfig$ {
    /** @deprecated use `WiseConfig$inboundSchema` instead. */
    export const inboundSchema = WiseConfig$inboundSchema;
    /** @deprecated use `WiseConfig$outboundSchema` instead. */
    export const outboundSchema = WiseConfig$outboundSchema;
    /** @deprecated use `WiseConfig$Outbound` instead. */
    export type Outbound = WiseConfig$Outbound;
}
