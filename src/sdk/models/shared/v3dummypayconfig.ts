/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3DummypayConfig = {
  directory: string;
  name: string;
  pageSize?: number | undefined;
  pollingPeriod?: string | undefined;
  provider?: string | undefined;
};

/** @internal */
export const V3DummypayConfig$inboundSchema: z.ZodType<
  V3DummypayConfig,
  z.ZodTypeDef,
  unknown
> = z.object({
  directory: z.string(),
  name: z.string(),
  pageSize: z.number().int().default(25),
  pollingPeriod: z.string().default("2m"),
  provider: z.string().default("Dummypay"),
});

/** @internal */
export type V3DummypayConfig$Outbound = {
  directory: string;
  name: string;
  pageSize: number;
  pollingPeriod: string;
  provider: string;
};

/** @internal */
export const V3DummypayConfig$outboundSchema: z.ZodType<
  V3DummypayConfig$Outbound,
  z.ZodTypeDef,
  V3DummypayConfig
> = z.object({
  directory: z.string(),
  name: z.string(),
  pageSize: z.number().int().default(25),
  pollingPeriod: z.string().default("2m"),
  provider: z.string().default("Dummypay"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3DummypayConfig$ {
  /** @deprecated use `V3DummypayConfig$inboundSchema` instead. */
  export const inboundSchema = V3DummypayConfig$inboundSchema;
  /** @deprecated use `V3DummypayConfig$outboundSchema` instead. */
  export const outboundSchema = V3DummypayConfig$outboundSchema;
  /** @deprecated use `V3DummypayConfig$Outbound` instead. */
  export type Outbound = V3DummypayConfig$Outbound;
}

export function v3DummypayConfigToJSON(
  v3DummypayConfig: V3DummypayConfig,
): string {
  return JSON.stringify(
    V3DummypayConfig$outboundSchema.parse(v3DummypayConfig),
  );
}

export function v3DummypayConfigFromJSON(
  jsonString: string,
): SafeParseResult<V3DummypayConfig, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3DummypayConfig$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3DummypayConfig' from JSON`,
  );
}
