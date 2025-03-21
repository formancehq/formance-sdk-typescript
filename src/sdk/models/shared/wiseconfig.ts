/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type WiseConfig = {
  apiKey: string;
  name: string;
  /**
   * The frequency at which the connector will try to fetch new BalanceTransaction objects from Wise API.
   *
   * @remarks
   */
  pollingPeriod?: string | undefined;
  provider?: string | undefined;
};

/** @internal */
export const WiseConfig$inboundSchema: z.ZodType<
  WiseConfig,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiKey: z.string(),
  name: z.string(),
  pollingPeriod: z.string().default("120s"),
  provider: z.string().default("Wise"),
});

/** @internal */
export type WiseConfig$Outbound = {
  apiKey: string;
  name: string;
  pollingPeriod: string;
  provider: string;
};

/** @internal */
export const WiseConfig$outboundSchema: z.ZodType<
  WiseConfig$Outbound,
  z.ZodTypeDef,
  WiseConfig
> = z.object({
  apiKey: z.string(),
  name: z.string(),
  pollingPeriod: z.string().default("120s"),
  provider: z.string().default("Wise"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WiseConfig$ {
  /** @deprecated use `WiseConfig$inboundSchema` instead. */
  export const inboundSchema = WiseConfig$inboundSchema;
  /** @deprecated use `WiseConfig$outboundSchema` instead. */
  export const outboundSchema = WiseConfig$outboundSchema;
  /** @deprecated use `WiseConfig$Outbound` instead. */
  export type Outbound = WiseConfig$Outbound;
}

export function wiseConfigToJSON(wiseConfig: WiseConfig): string {
  return JSON.stringify(WiseConfig$outboundSchema.parse(wiseConfig));
}

export function wiseConfigFromJSON(
  jsonString: string,
): SafeParseResult<WiseConfig, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WiseConfig$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WiseConfig' from JSON`,
  );
}
