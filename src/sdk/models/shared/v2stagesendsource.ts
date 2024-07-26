/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    V2StageSendSourceAccount,
    V2StageSendSourceAccount$inboundSchema,
    V2StageSendSourceAccount$Outbound,
    V2StageSendSourceAccount$outboundSchema,
} from "./v2stagesendsourceaccount.js";
import {
    V2StageSendSourcePayment,
    V2StageSendSourcePayment$inboundSchema,
    V2StageSendSourcePayment$Outbound,
    V2StageSendSourcePayment$outboundSchema,
} from "./v2stagesendsourcepayment.js";
import {
    V2StageSendSourceWallet,
    V2StageSendSourceWallet$inboundSchema,
    V2StageSendSourceWallet$Outbound,
    V2StageSendSourceWallet$outboundSchema,
} from "./v2stagesendsourcewallet.js";
import * as z from "zod";

export type V2StageSendSource = {
    account?: V2StageSendSourceAccount | undefined;
    payment?: V2StageSendSourcePayment | undefined;
    wallet?: V2StageSendSourceWallet | undefined;
};

/** @internal */
export const V2StageSendSource$inboundSchema: z.ZodType<V2StageSendSource, z.ZodTypeDef, unknown> =
    z.object({
        account: V2StageSendSourceAccount$inboundSchema.optional(),
        payment: V2StageSendSourcePayment$inboundSchema.optional(),
        wallet: V2StageSendSourceWallet$inboundSchema.optional(),
    });

/** @internal */
export type V2StageSendSource$Outbound = {
    account?: V2StageSendSourceAccount$Outbound | undefined;
    payment?: V2StageSendSourcePayment$Outbound | undefined;
    wallet?: V2StageSendSourceWallet$Outbound | undefined;
};

/** @internal */
export const V2StageSendSource$outboundSchema: z.ZodType<
    V2StageSendSource$Outbound,
    z.ZodTypeDef,
    V2StageSendSource
> = z.object({
    account: V2StageSendSourceAccount$outboundSchema.optional(),
    payment: V2StageSendSourcePayment$outboundSchema.optional(),
    wallet: V2StageSendSourceWallet$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2StageSendSource$ {
    /** @deprecated use `V2StageSendSource$inboundSchema` instead. */
    export const inboundSchema = V2StageSendSource$inboundSchema;
    /** @deprecated use `V2StageSendSource$outboundSchema` instead. */
    export const outboundSchema = V2StageSendSource$outboundSchema;
    /** @deprecated use `V2StageSendSource$Outbound` instead. */
    export type Outbound = V2StageSendSource$Outbound;
}
