/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type ModulrConfig = {
    apiKey: string;
    apiSecret: string;
    endpoint?: string | undefined;
    name: string;
    /**
     * The frequency at which the connector will try to fetch new BalanceTransaction objects from Modulr API.
     *
     * @remarks
     *
     */
    pollingPeriod?: string | undefined;
};

/** @internal */
export namespace ModulrConfig$ {
    export type Inbound = {
        apiKey: string;
        apiSecret: string;
        endpoint?: string | undefined;
        name: string;
        pollingPeriod?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ModulrConfig, z.ZodTypeDef, Inbound> = z
        .object({
            apiKey: z.string(),
            apiSecret: z.string(),
            endpoint: z.string().optional(),
            name: z.string(),
            pollingPeriod: z.string().default("120s"),
        })
        .transform((v) => {
            return {
                apiKey: v.apiKey,
                apiSecret: v.apiSecret,
                ...(v.endpoint === undefined ? null : { endpoint: v.endpoint }),
                name: v.name,
                ...(v.pollingPeriod === undefined ? null : { pollingPeriod: v.pollingPeriod }),
            };
        });

    export type Outbound = {
        apiKey: string;
        apiSecret: string;
        endpoint?: string | undefined;
        name: string;
        pollingPeriod: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ModulrConfig> = z
        .object({
            apiKey: z.string(),
            apiSecret: z.string(),
            endpoint: z.string().optional(),
            name: z.string(),
            pollingPeriod: z.string().default("120s"),
        })
        .transform((v) => {
            return {
                apiKey: v.apiKey,
                apiSecret: v.apiSecret,
                ...(v.endpoint === undefined ? null : { endpoint: v.endpoint }),
                name: v.name,
                pollingPeriod: v.pollingPeriod,
            };
        });
}