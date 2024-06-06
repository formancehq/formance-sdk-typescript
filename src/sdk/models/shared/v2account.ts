/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Volume, V2Volume$ } from "./v2volume";
import * as z from "zod";

export type V2Account = {
    address: string;
    effectiveVolumes?: { [k: string]: V2Volume } | undefined;
    metadata: { [k: string]: string };
    volumes?: { [k: string]: V2Volume } | undefined;
};

/** @internal */
export namespace V2Account$ {
    export const inboundSchema: z.ZodType<V2Account, z.ZodTypeDef, unknown> = z.object({
        address: z.string(),
        effectiveVolumes: z.record(V2Volume$.inboundSchema).optional(),
        metadata: z.record(z.string()),
        volumes: z.record(V2Volume$.inboundSchema).optional(),
    });

    export type Outbound = {
        address: string;
        effectiveVolumes?: { [k: string]: V2Volume$.Outbound } | undefined;
        metadata: { [k: string]: string };
        volumes?: { [k: string]: V2Volume$.Outbound } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2Account> = z.object({
        address: z.string(),
        effectiveVolumes: z.record(V2Volume$.outboundSchema).optional(),
        metadata: z.record(z.string()),
        volumes: z.record(V2Volume$.outboundSchema).optional(),
    });
}
