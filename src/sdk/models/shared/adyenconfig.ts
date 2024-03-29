/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type AdyenConfig = {
    apiKey: string;
    hmacKey: string;
    liveEndpointPrefix?: string | undefined;
    name: string;
    /**
     * The frequency at which the connector will try to fetch new BalanceTransaction objects from Adyen API.
     *
     * @remarks
     *
     */
    pollingPeriod?: string | undefined;
};

/** @internal */
export namespace AdyenConfig$ {
    export type Inbound = {
        apiKey: string;
        hmacKey: string;
        liveEndpointPrefix?: string | undefined;
        name: string;
        pollingPeriod?: string | undefined;
    };

    export const inboundSchema: z.ZodType<AdyenConfig, z.ZodTypeDef, Inbound> = z
        .object({
            apiKey: z.string(),
            hmacKey: z.string(),
            liveEndpointPrefix: z.string().optional(),
            name: z.string(),
            pollingPeriod: z.string().default("120s"),
        })
        .transform((v) => {
            return {
                apiKey: v.apiKey,
                hmacKey: v.hmacKey,
                ...(v.liveEndpointPrefix === undefined
                    ? null
                    : { liveEndpointPrefix: v.liveEndpointPrefix }),
                name: v.name,
                pollingPeriod: v.pollingPeriod,
            };
        });

    export type Outbound = {
        apiKey: string;
        hmacKey: string;
        liveEndpointPrefix?: string | undefined;
        name: string;
        pollingPeriod: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AdyenConfig> = z
        .object({
            apiKey: z.string(),
            hmacKey: z.string(),
            liveEndpointPrefix: z.string().optional(),
            name: z.string(),
            pollingPeriod: z.string().default("120s"),
        })
        .transform((v) => {
            return {
                apiKey: v.apiKey,
                hmacKey: v.hmacKey,
                ...(v.liveEndpointPrefix === undefined
                    ? null
                    : { liveEndpointPrefix: v.liveEndpointPrefix }),
                name: v.name,
                pollingPeriod: v.pollingPeriod,
            };
        });
}
