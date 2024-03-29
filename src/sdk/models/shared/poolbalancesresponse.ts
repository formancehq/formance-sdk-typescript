/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PoolBalances, PoolBalances$ } from "./poolbalances";
import * as z from "zod";

export type PoolBalancesResponse = {
    data: PoolBalances;
};

/** @internal */
export namespace PoolBalancesResponse$ {
    export type Inbound = {
        data: PoolBalances$.Inbound;
    };

    export const inboundSchema: z.ZodType<PoolBalancesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            data: PoolBalances$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: PoolBalances$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PoolBalancesResponse> = z
        .object({
            data: PoolBalances$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}
