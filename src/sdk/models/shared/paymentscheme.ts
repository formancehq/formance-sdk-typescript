/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

export const PaymentScheme = {
    Unknown: "unknown",
    Other: "other",
    Visa: "visa",
    Mastercard: "mastercard",
    Amex: "amex",
    Diners: "diners",
    Discover: "discover",
    Jcb: "jcb",
    Unionpay: "unionpay",
    Alipay: "alipay",
    Cup: "cup",
    SepaDebit: "sepa debit",
    SepaCredit: "sepa credit",
    Sepa: "sepa",
    ApplePay: "apple pay",
    GooglePay: "google pay",
    Doku: "doku",
    Dragonpay: "dragonpay",
    Maestro: "maestro",
    Molpay: "molpay",
    A2a: "a2a",
    AchDebit: "ach debit",
    Ach: "ach",
    Rtp: "rtp",
} as const;
export type PaymentScheme = ClosedEnum<typeof PaymentScheme>;

/** @internal */
export namespace PaymentScheme$ {
    export const inboundSchema = z.nativeEnum(PaymentScheme);
    export const outboundSchema = inboundSchema;
}
