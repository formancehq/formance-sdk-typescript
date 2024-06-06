/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { WalletWithBalances, WalletWithBalances$ } from "./walletwithbalances";
import * as z from "zod";

export type GetWalletResponse = {
    data: WalletWithBalances;
};

/** @internal */
export namespace GetWalletResponse$ {
    export const inboundSchema: z.ZodType<GetWalletResponse, z.ZodTypeDef, unknown> = z.object({
        data: WalletWithBalances$.inboundSchema,
    });

    export type Outbound = {
        data: WalletWithBalances$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWalletResponse> = z.object({
        data: WalletWithBalances$.outboundSchema,
    });
}
