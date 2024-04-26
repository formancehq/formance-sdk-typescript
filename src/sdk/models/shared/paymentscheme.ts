/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
export const PaymentScheme$: z.ZodNativeEnum<typeof PaymentScheme> = z.nativeEnum(PaymentScheme);
