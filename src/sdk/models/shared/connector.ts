/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum Connector {
    Stripe = "STRIPE",
    DummyPay = "DUMMY-PAY",
    Wise = "WISE",
    Modulr = "MODULR",
    CurrencyCloud = "CURRENCY-CLOUD",
    BankingCircle = "BANKING-CIRCLE",
    Mangopay = "MANGOPAY",
    Moneycorp = "MONEYCORP",
    Atlar = "ATLAR",
    Adyen = "ADYEN",
    Generic = "GENERIC",
}

/** @internal */
export const Connector$: z.ZodNativeEnum<typeof Connector> = z.nativeEnum(Connector);
