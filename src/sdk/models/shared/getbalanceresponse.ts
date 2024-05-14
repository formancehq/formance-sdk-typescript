/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BalanceWithAssets, BalanceWithAssets$ } from "./balancewithassets";
import * as z from "zod";

export type GetBalanceResponse = {
    data: BalanceWithAssets;
};

/** @internal */
export namespace GetBalanceResponse$ {
    export const inboundSchema: z.ZodType<GetBalanceResponse, z.ZodTypeDef, unknown> = z
        .object({
            data: BalanceWithAssets$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: BalanceWithAssets$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalanceResponse> = z
        .object({
            data: BalanceWithAssets$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}
