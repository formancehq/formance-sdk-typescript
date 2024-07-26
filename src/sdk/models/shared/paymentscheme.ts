/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export enum PaymentScheme {
    Unknown = "unknown",
    Other = "other",
    Visa = "visa",
    Mastercard = "mastercard",
    Amex = "amex",
    Diners = "diners",
    Discover = "discover",
    Jcb = "jcb",
    Unionpay = "unionpay",
    Alipay = "alipay",
    Cup = "cup",
    SepaDebit = "sepa debit",
    SepaCredit = "sepa credit",
    Sepa = "sepa",
    ApplePay = "apple pay",
    GooglePay = "google pay",
    Doku = "doku",
    Dragonpay = "dragonpay",
    Maestro = "maestro",
    Molpay = "molpay",
    A2a = "a2a",
    AchDebit = "ach debit",
    Ach = "ach",
    Rtp = "rtp",
}

/** @internal */
export const PaymentScheme$inboundSchema: z.ZodNativeEnum<typeof PaymentScheme> =
    z.nativeEnum(PaymentScheme);

/** @internal */
export const PaymentScheme$outboundSchema: z.ZodNativeEnum<typeof PaymentScheme> =
    PaymentScheme$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentScheme$ {
    /** @deprecated use `PaymentScheme$inboundSchema` instead. */
    export const inboundSchema = PaymentScheme$inboundSchema;
    /** @deprecated use `PaymentScheme$outboundSchema` instead. */
    export const outboundSchema = PaymentScheme$outboundSchema;
}
