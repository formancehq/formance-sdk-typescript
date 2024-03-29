/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum V2Connector {
    Stripe = "STRIPE",
    DummyPay = "DUMMY-PAY",
    Wise = "WISE",
    Modulr = "MODULR",
    CurrencyCloud = "CURRENCY-CLOUD",
    BankingCircle = "BANKING-CIRCLE",
    Mangopay = "MANGOPAY",
    Moneycorp = "MONEYCORP",
}

/** @internal */
export const V2Connector$ = z.nativeEnum(V2Connector);
