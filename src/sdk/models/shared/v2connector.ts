/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
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
export const V2Connector$inboundSchema: z.ZodNativeEnum<typeof V2Connector> = z
  .nativeEnum(V2Connector);

/** @internal */
export const V2Connector$outboundSchema: z.ZodNativeEnum<typeof V2Connector> =
  V2Connector$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2Connector$ {
  /** @deprecated use `V2Connector$inboundSchema` instead. */
  export const inboundSchema = V2Connector$inboundSchema;
  /** @deprecated use `V2Connector$outboundSchema` instead. */
  export const outboundSchema = V2Connector$outboundSchema;
}
