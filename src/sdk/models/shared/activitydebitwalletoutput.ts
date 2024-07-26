/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { Hold, Hold$inboundSchema, Hold$Outbound, Hold$outboundSchema } from "./hold.js";
import * as z from "zod";

export type ActivityDebitWalletOutput = {
    data: Hold;
};

/** @internal */
export const ActivityDebitWalletOutput$inboundSchema: z.ZodType<
    ActivityDebitWalletOutput,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: Hold$inboundSchema,
});

/** @internal */
export type ActivityDebitWalletOutput$Outbound = {
    data: Hold$Outbound;
};

/** @internal */
export const ActivityDebitWalletOutput$outboundSchema: z.ZodType<
    ActivityDebitWalletOutput$Outbound,
    z.ZodTypeDef,
    ActivityDebitWalletOutput
> = z.object({
    data: Hold$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivityDebitWalletOutput$ {
    /** @deprecated use `ActivityDebitWalletOutput$inboundSchema` instead. */
    export const inboundSchema = ActivityDebitWalletOutput$inboundSchema;
    /** @deprecated use `ActivityDebitWalletOutput$outboundSchema` instead. */
    export const outboundSchema = ActivityDebitWalletOutput$outboundSchema;
    /** @deprecated use `ActivityDebitWalletOutput$Outbound` instead. */
    export type Outbound = ActivityDebitWalletOutput$Outbound;
}
