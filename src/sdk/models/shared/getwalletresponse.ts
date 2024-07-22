/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    WalletWithBalances,
    WalletWithBalances$inboundSchema,
    WalletWithBalances$Outbound,
    WalletWithBalances$outboundSchema,
} from "./walletwithbalances.js";
import * as z from "zod";

export type GetWalletResponse = {
    data: WalletWithBalances;
};

/** @internal */
export const GetWalletResponse$inboundSchema: z.ZodType<GetWalletResponse, z.ZodTypeDef, unknown> =
    z.object({
        data: WalletWithBalances$inboundSchema,
    });

/** @internal */
export type GetWalletResponse$Outbound = {
    data: WalletWithBalances$Outbound;
};

/** @internal */
export const GetWalletResponse$outboundSchema: z.ZodType<
    GetWalletResponse$Outbound,
    z.ZodTypeDef,
    GetWalletResponse
> = z.object({
    data: WalletWithBalances$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWalletResponse$ {
    /** @deprecated use `GetWalletResponse$inboundSchema` instead. */
    export const inboundSchema = GetWalletResponse$inboundSchema;
    /** @deprecated use `GetWalletResponse$outboundSchema` instead. */
    export const outboundSchema = GetWalletResponse$outboundSchema;
    /** @deprecated use `GetWalletResponse$Outbound` instead. */
    export type Outbound = GetWalletResponse$Outbound;
}
