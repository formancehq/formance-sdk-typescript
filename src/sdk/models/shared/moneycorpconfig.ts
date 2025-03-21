/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type MoneycorpConfig = {
  apiKey: string;
  clientID: string;
  endpoint: string;
  name: string;
  /**
   * The frequency at which the connector will try to fetch new BalanceTransaction objects from MoneyCorp API.
   *
   * @remarks
   */
  pollingPeriod?: string | undefined;
  provider?: string | undefined;
};

/** @internal */
export const MoneycorpConfig$inboundSchema: z.ZodType<
  MoneycorpConfig,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiKey: z.string(),
  clientID: z.string(),
  endpoint: z.string(),
  name: z.string(),
  pollingPeriod: z.string().default("120s"),
  provider: z.string().default("Moneycorp"),
});

/** @internal */
export type MoneycorpConfig$Outbound = {
  apiKey: string;
  clientID: string;
  endpoint: string;
  name: string;
  pollingPeriod: string;
  provider: string;
};

/** @internal */
export const MoneycorpConfig$outboundSchema: z.ZodType<
  MoneycorpConfig$Outbound,
  z.ZodTypeDef,
  MoneycorpConfig
> = z.object({
  apiKey: z.string(),
  clientID: z.string(),
  endpoint: z.string(),
  name: z.string(),
  pollingPeriod: z.string().default("120s"),
  provider: z.string().default("Moneycorp"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MoneycorpConfig$ {
  /** @deprecated use `MoneycorpConfig$inboundSchema` instead. */
  export const inboundSchema = MoneycorpConfig$inboundSchema;
  /** @deprecated use `MoneycorpConfig$outboundSchema` instead. */
  export const outboundSchema = MoneycorpConfig$outboundSchema;
  /** @deprecated use `MoneycorpConfig$Outbound` instead. */
  export type Outbound = MoneycorpConfig$Outbound;
}

export function moneycorpConfigToJSON(
  moneycorpConfig: MoneycorpConfig,
): string {
  return JSON.stringify(MoneycorpConfig$outboundSchema.parse(moneycorpConfig));
}

export function moneycorpConfigFromJSON(
  jsonString: string,
): SafeParseResult<MoneycorpConfig, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MoneycorpConfig$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MoneycorpConfig' from JSON`,
  );
}
