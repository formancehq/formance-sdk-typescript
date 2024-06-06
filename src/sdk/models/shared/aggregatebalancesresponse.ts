/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type AggregateBalancesResponse = {
    data: { [k: string]: number };
};

/** @internal */
export namespace AggregateBalancesResponse$ {
    export const inboundSchema: z.ZodType<AggregateBalancesResponse, z.ZodTypeDef, unknown> =
        z.object({
            data: z.record(z.number().int()),
        });

    export type Outbound = {
        data: { [k: string]: number };
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AggregateBalancesResponse> =
        z.object({
            data: z.record(z.number().int()),
        });
}
