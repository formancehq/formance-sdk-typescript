/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Stats, Stats$ } from "./stats";
import * as z from "zod";

export type StatsResponse = {
    data: Stats;
};

/** @internal */
export namespace StatsResponse$ {
    export const inboundSchema: z.ZodType<StatsResponse, z.ZodTypeDef, unknown> = z.object({
        data: Stats$.inboundSchema,
    });

    export type Outbound = {
        data: Stats$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StatsResponse> = z.object({
        data: Stats$.outboundSchema,
    });
}
