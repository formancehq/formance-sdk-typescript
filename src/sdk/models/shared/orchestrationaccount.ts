/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Volume, Volume$ } from "./volume";
import { z } from "zod";

export type OrchestrationAccount = {
    address: string;
    effectiveVolumes?: Record<string, Volume> | undefined;
    metadata: Record<string, string>;
    volumes?: Record<string, Volume> | undefined;
};

/** @internal */
export namespace OrchestrationAccount$ {
    export type Inbound = {
        address: string;
        effectiveVolumes?: Record<string, Volume$.Inbound> | undefined;
        metadata: Record<string, string>;
        volumes?: Record<string, Volume$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<OrchestrationAccount, z.ZodTypeDef, Inbound> = z
        .object({
            address: z.string(),
            effectiveVolumes: z.record(Volume$.inboundSchema).optional(),
            metadata: z.record(z.string()),
            volumes: z.record(Volume$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                address: v.address,
                ...(v.effectiveVolumes === undefined
                    ? null
                    : { effectiveVolumes: v.effectiveVolumes }),
                metadata: v.metadata,
                ...(v.volumes === undefined ? null : { volumes: v.volumes }),
            };
        });

    export type Outbound = {
        address: string;
        effectiveVolumes?: Record<string, Volume$.Outbound> | undefined;
        metadata: Record<string, string>;
        volumes?: Record<string, Volume$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OrchestrationAccount> = z
        .object({
            address: z.string(),
            effectiveVolumes: z.record(Volume$.outboundSchema).optional(),
            metadata: z.record(z.string()),
            volumes: z.record(Volume$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                address: v.address,
                ...(v.effectiveVolumes === undefined
                    ? null
                    : { effectiveVolumes: v.effectiveVolumes }),
                metadata: v.metadata,
                ...(v.volumes === undefined ? null : { volumes: v.volumes }),
            };
        });
}
