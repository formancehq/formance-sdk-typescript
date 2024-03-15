/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Stats, V2Stats$ } from "./v2stats";
import * as z from "zod";

export type V2StatsResponse = {
    data: V2Stats;
};

/** @internal */
export namespace V2StatsResponse$ {
    export type Inbound = {
        data: V2Stats$.Inbound;
    };

    export const inboundSchema: z.ZodType<V2StatsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            data: V2Stats$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: V2Stats$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2StatsResponse> = z
        .object({
            data: V2Stats$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}
