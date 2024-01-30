/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type AtlarConfig = {
    /**
     * The access key used by the connector for authorizing requests to the Atlar API.
     *
     * @remarks
     * You can obtain it along with the associated secret from the Atlar dashboard.
     *
     */
    accessKey: string;
    /**
     * The base URL the client uses for making requests towards the Atlar API.
     *
     * @remarks
     *
     */
    baseUrl?: string | undefined;
    name: string;
    /**
     * Number of items to fetch when querying paginated APIs.
     *
     * @remarks
     *
     */
    pageSize?: number | undefined;
    /**
     * The frequency at which the connector tries to fetch new Transaction objects from the Atlar API.
     *
     * @remarks
     *
     */
    pollingPeriod?: string | undefined;
    /**
     * The secret used by the connector for authorizing requests to the Atlar API.
     *
     * @remarks
     * You can obtain it along with the associated access key from the Atlar dashboard.
     *
     */
    secret: string;
    /**
     * The frequency at which the connector tries to fetch the status of payment initiations from the Atlar API.
     *
     * @remarks
     *
     */
    transferInitiationStatusPollingPeriod?: string | undefined;
};

/** @internal */
export namespace AtlarConfig$ {
    export type Inbound = {
        accessKey: string;
        baseUrl?: string | undefined;
        name: string;
        pageSize?: number | undefined;
        pollingPeriod?: string | undefined;
        secret: string;
        transferInitiationStatusPollingPeriod?: string | undefined;
    };

    export const inboundSchema: z.ZodType<AtlarConfig, z.ZodTypeDef, Inbound> = z
        .object({
            accessKey: z.string(),
            baseUrl: z.string().default("https://api.atlar.com"),
            name: z.string(),
            pageSize: z.number().int().default(25),
            pollingPeriod: z.string().default("120s"),
            secret: z.string(),
            transferInitiationStatusPollingPeriod: z.string().default("120s"),
        })
        .transform((v) => {
            return {
                accessKey: v.accessKey,
                ...(v.baseUrl === undefined ? null : { baseUrl: v.baseUrl }),
                name: v.name,
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.pollingPeriod === undefined ? null : { pollingPeriod: v.pollingPeriod }),
                secret: v.secret,
                ...(v.transferInitiationStatusPollingPeriod === undefined
                    ? null
                    : {
                          transferInitiationStatusPollingPeriod:
                              v.transferInitiationStatusPollingPeriod,
                      }),
            };
        });

    export type Outbound = {
        accessKey: string;
        baseUrl: string;
        name: string;
        pageSize: number;
        pollingPeriod: string;
        secret: string;
        transferInitiationStatusPollingPeriod: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtlarConfig> = z
        .object({
            accessKey: z.string(),
            baseUrl: z.string().default("https://api.atlar.com"),
            name: z.string(),
            pageSize: z.number().int().default(25),
            pollingPeriod: z.string().default("120s"),
            secret: z.string(),
            transferInitiationStatusPollingPeriod: z.string().default("120s"),
        })
        .transform((v) => {
            return {
                accessKey: v.accessKey,
                baseUrl: v.baseUrl,
                name: v.name,
                pageSize: v.pageSize,
                pollingPeriod: v.pollingPeriod,
                secret: v.secret,
                transferInitiationStatusPollingPeriod: v.transferInitiationStatusPollingPeriod,
            };
        });
}