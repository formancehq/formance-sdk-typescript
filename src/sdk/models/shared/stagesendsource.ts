/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    StageSendSourceAccount,
    StageSendSourceAccount$inboundSchema,
    StageSendSourceAccount$Outbound,
    StageSendSourceAccount$outboundSchema,
} from "./stagesendsourceaccount.js";
import {
    StageSendSourcePayment,
    StageSendSourcePayment$inboundSchema,
    StageSendSourcePayment$Outbound,
    StageSendSourcePayment$outboundSchema,
} from "./stagesendsourcepayment.js";
import {
    StageSendSourceWallet,
    StageSendSourceWallet$inboundSchema,
    StageSendSourceWallet$Outbound,
    StageSendSourceWallet$outboundSchema,
} from "./stagesendsourcewallet.js";
import * as z from "zod";

export type StageSendSource = {
    account?: StageSendSourceAccount | undefined;
    payment?: StageSendSourcePayment | undefined;
    wallet?: StageSendSourceWallet | undefined;
};

/** @internal */
export const StageSendSource$inboundSchema: z.ZodType<StageSendSource, z.ZodTypeDef, unknown> =
    z.object({
        account: StageSendSourceAccount$inboundSchema.optional(),
        payment: StageSendSourcePayment$inboundSchema.optional(),
        wallet: StageSendSourceWallet$inboundSchema.optional(),
    });

/** @internal */
export type StageSendSource$Outbound = {
    account?: StageSendSourceAccount$Outbound | undefined;
    payment?: StageSendSourcePayment$Outbound | undefined;
    wallet?: StageSendSourceWallet$Outbound | undefined;
};

/** @internal */
export const StageSendSource$outboundSchema: z.ZodType<
    StageSendSource$Outbound,
    z.ZodTypeDef,
    StageSendSource
> = z.object({
    account: StageSendSourceAccount$outboundSchema.optional(),
    payment: StageSendSourcePayment$outboundSchema.optional(),
    wallet: StageSendSourceWallet$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StageSendSource$ {
    /** @deprecated use `StageSendSource$inboundSchema` instead. */
    export const inboundSchema = StageSendSource$inboundSchema;
    /** @deprecated use `StageSendSource$outboundSchema` instead. */
    export const outboundSchema = StageSendSource$outboundSchema;
    /** @deprecated use `StageSendSource$Outbound` instead. */
    export type Outbound = StageSendSource$Outbound;
}
