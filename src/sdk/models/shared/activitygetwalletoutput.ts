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

export type ActivityGetWalletOutput = {
    data: WalletWithBalances;
};

/** @internal */
export const ActivityGetWalletOutput$inboundSchema: z.ZodType<
    ActivityGetWalletOutput,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: WalletWithBalances$inboundSchema,
});

/** @internal */
export type ActivityGetWalletOutput$Outbound = {
    data: WalletWithBalances$Outbound;
};

/** @internal */
export const ActivityGetWalletOutput$outboundSchema: z.ZodType<
    ActivityGetWalletOutput$Outbound,
    z.ZodTypeDef,
    ActivityGetWalletOutput
> = z.object({
    data: WalletWithBalances$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivityGetWalletOutput$ {
    /** @deprecated use `ActivityGetWalletOutput$inboundSchema` instead. */
    export const inboundSchema = ActivityGetWalletOutput$inboundSchema;
    /** @deprecated use `ActivityGetWalletOutput$outboundSchema` instead. */
    export const outboundSchema = ActivityGetWalletOutput$outboundSchema;
    /** @deprecated use `ActivityGetWalletOutput$Outbound` instead. */
    export type Outbound = ActivityGetWalletOutput$Outbound;
}
