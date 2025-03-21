/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3BankingcircleConfig = {
  authorizationEndpoint: string;
  endpoint: string;
  name: string;
  pageSize?: number | undefined;
  password: string;
  pollingPeriod?: string | undefined;
  provider?: string | undefined;
  userCertificate: string;
  userCertificateKey: string;
  username: string;
};

/** @internal */
export const V3BankingcircleConfig$inboundSchema: z.ZodType<
  V3BankingcircleConfig,
  z.ZodTypeDef,
  unknown
> = z.object({
  authorizationEndpoint: z.string(),
  endpoint: z.string(),
  name: z.string(),
  pageSize: z.number().int().default(25),
  password: z.string(),
  pollingPeriod: z.string().default("2m"),
  provider: z.string().default("Bankingcircle"),
  userCertificate: z.string(),
  userCertificateKey: z.string(),
  username: z.string(),
});

/** @internal */
export type V3BankingcircleConfig$Outbound = {
  authorizationEndpoint: string;
  endpoint: string;
  name: string;
  pageSize: number;
  password: string;
  pollingPeriod: string;
  provider: string;
  userCertificate: string;
  userCertificateKey: string;
  username: string;
};

/** @internal */
export const V3BankingcircleConfig$outboundSchema: z.ZodType<
  V3BankingcircleConfig$Outbound,
  z.ZodTypeDef,
  V3BankingcircleConfig
> = z.object({
  authorizationEndpoint: z.string(),
  endpoint: z.string(),
  name: z.string(),
  pageSize: z.number().int().default(25),
  password: z.string(),
  pollingPeriod: z.string().default("2m"),
  provider: z.string().default("Bankingcircle"),
  userCertificate: z.string(),
  userCertificateKey: z.string(),
  username: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3BankingcircleConfig$ {
  /** @deprecated use `V3BankingcircleConfig$inboundSchema` instead. */
  export const inboundSchema = V3BankingcircleConfig$inboundSchema;
  /** @deprecated use `V3BankingcircleConfig$outboundSchema` instead. */
  export const outboundSchema = V3BankingcircleConfig$outboundSchema;
  /** @deprecated use `V3BankingcircleConfig$Outbound` instead. */
  export type Outbound = V3BankingcircleConfig$Outbound;
}

export function v3BankingcircleConfigToJSON(
  v3BankingcircleConfig: V3BankingcircleConfig,
): string {
  return JSON.stringify(
    V3BankingcircleConfig$outboundSchema.parse(v3BankingcircleConfig),
  );
}

export function v3BankingcircleConfigFromJSON(
  jsonString: string,
): SafeParseResult<V3BankingcircleConfig, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3BankingcircleConfig$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3BankingcircleConfig' from JSON`,
  );
}
