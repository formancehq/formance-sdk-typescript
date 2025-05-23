/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3MangopayConfig = {
  apiKey: string;
  clientID: string;
  endpoint: string;
  name: string;
  pageSize?: number | undefined;
  pollingPeriod?: string | undefined;
  provider?: string | undefined;
};

/** @internal */
export const V3MangopayConfig$inboundSchema: z.ZodType<
  V3MangopayConfig,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiKey: z.string(),
  clientID: z.string(),
  endpoint: z.string(),
  name: z.string(),
  pageSize: z.number().int().default(25),
  pollingPeriod: z.string().default("2m"),
  provider: z.string().default("Mangopay"),
});

/** @internal */
export type V3MangopayConfig$Outbound = {
  apiKey: string;
  clientID: string;
  endpoint: string;
  name: string;
  pageSize: number;
  pollingPeriod: string;
  provider: string;
};

/** @internal */
export const V3MangopayConfig$outboundSchema: z.ZodType<
  V3MangopayConfig$Outbound,
  z.ZodTypeDef,
  V3MangopayConfig
> = z.object({
  apiKey: z.string(),
  clientID: z.string(),
  endpoint: z.string(),
  name: z.string(),
  pageSize: z.number().int().default(25),
  pollingPeriod: z.string().default("2m"),
  provider: z.string().default("Mangopay"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3MangopayConfig$ {
  /** @deprecated use `V3MangopayConfig$inboundSchema` instead. */
  export const inboundSchema = V3MangopayConfig$inboundSchema;
  /** @deprecated use `V3MangopayConfig$outboundSchema` instead. */
  export const outboundSchema = V3MangopayConfig$outboundSchema;
  /** @deprecated use `V3MangopayConfig$Outbound` instead. */
  export type Outbound = V3MangopayConfig$Outbound;
}

export function v3MangopayConfigToJSON(
  v3MangopayConfig: V3MangopayConfig,
): string {
  return JSON.stringify(
    V3MangopayConfig$outboundSchema.parse(v3MangopayConfig),
  );
}

export function v3MangopayConfigFromJSON(
  jsonString: string,
): SafeParseResult<V3MangopayConfig, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3MangopayConfig$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3MangopayConfig' from JSON`,
  );
}
