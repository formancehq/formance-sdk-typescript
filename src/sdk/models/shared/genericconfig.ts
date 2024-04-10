/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GenericConfig = {
    apiKey: string;
    endpoint: string;
    name: string;
    /**
     * The frequency at which the connector will try to fetch new BalanceTransaction objects from the API.
     *
     * @remarks
     *
     */
    pollingPeriod?: string | undefined;
};

/** @internal */
export namespace GenericConfig$ {
    export type Inbound = {
        apiKey: string;
        endpoint: string;
        name: string;
        pollingPeriod?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GenericConfig, z.ZodTypeDef, Inbound> = z
        .object({
            apiKey: z.string(),
            endpoint: z.string(),
            name: z.string(),
            pollingPeriod: z.string().default("120s"),
        })
        .transform((v) => {
            return {
                apiKey: v.apiKey,
                endpoint: v.endpoint,
                name: v.name,
                pollingPeriod: v.pollingPeriod,
            };
        });

    export type Outbound = {
        apiKey: string;
        endpoint: string;
        name: string;
        pollingPeriod: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GenericConfig> = z
        .object({
            apiKey: z.string(),
            endpoint: z.string(),
            name: z.string(),
            pollingPeriod: z.string().default("120s"),
        })
        .transform((v) => {
            return {
                apiKey: v.apiKey,
                endpoint: v.endpoint,
                name: v.name,
                pollingPeriod: v.pollingPeriod,
            };
        });
}