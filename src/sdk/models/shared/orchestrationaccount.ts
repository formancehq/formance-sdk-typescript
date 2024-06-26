/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Volume, Volume$ } from "./volume";
import * as z from "zod";

export type OrchestrationAccount = {
    address: string;
    effectiveVolumes?: { [k: string]: Volume } | undefined;
    metadata: { [k: string]: string };
    volumes?: { [k: string]: Volume } | undefined;
};

/** @internal */
export namespace OrchestrationAccount$ {
    export const inboundSchema: z.ZodType<OrchestrationAccount, z.ZodTypeDef, unknown> = z.object({
        address: z.string(),
        effectiveVolumes: z.record(Volume$.inboundSchema).optional(),
        metadata: z.record(z.string()),
        volumes: z.record(Volume$.inboundSchema).optional(),
    });

    export type Outbound = {
        address: string;
        effectiveVolumes?: { [k: string]: Volume$.Outbound } | undefined;
        metadata: { [k: string]: string };
        volumes?: { [k: string]: Volume$.Outbound } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OrchestrationAccount> = z.object(
        {
            address: z.string(),
            effectiveVolumes: z.record(Volume$.outboundSchema).optional(),
            metadata: z.record(z.string()),
            volumes: z.record(Volume$.outboundSchema).optional(),
        }
    );
}
