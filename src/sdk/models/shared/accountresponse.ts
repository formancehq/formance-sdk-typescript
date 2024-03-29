/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    AccountWithVolumesAndBalances,
    AccountWithVolumesAndBalances$,
} from "./accountwithvolumesandbalances";
import * as z from "zod";

export type AccountResponse = {
    data: AccountWithVolumesAndBalances;
};

/** @internal */
export namespace AccountResponse$ {
    export type Inbound = {
        data: AccountWithVolumesAndBalances$.Inbound;
    };

    export const inboundSchema: z.ZodType<AccountResponse, z.ZodTypeDef, Inbound> = z
        .object({
            data: AccountWithVolumesAndBalances$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: AccountWithVolumesAndBalances$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountResponse> = z
        .object({
            data: AccountWithVolumesAndBalances$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}
