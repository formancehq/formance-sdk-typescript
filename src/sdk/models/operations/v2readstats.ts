/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type V2ReadStatsRequest = {
  /**
   * name of the ledger
   */
  ledger: string;
};

export type V2ReadStatsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  /**
   * OK
   */
  v2StatsResponse?: shared.V2StatsResponse | undefined;
};

/** @internal */
export const V2ReadStatsRequest$inboundSchema: z.ZodType<
  V2ReadStatsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  ledger: z.string(),
});

/** @internal */
export type V2ReadStatsRequest$Outbound = {
  ledger: string;
};

/** @internal */
export const V2ReadStatsRequest$outboundSchema: z.ZodType<
  V2ReadStatsRequest$Outbound,
  z.ZodTypeDef,
  V2ReadStatsRequest
> = z.object({
  ledger: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ReadStatsRequest$ {
  /** @deprecated use `V2ReadStatsRequest$inboundSchema` instead. */
  export const inboundSchema = V2ReadStatsRequest$inboundSchema;
  /** @deprecated use `V2ReadStatsRequest$outboundSchema` instead. */
  export const outboundSchema = V2ReadStatsRequest$outboundSchema;
  /** @deprecated use `V2ReadStatsRequest$Outbound` instead. */
  export type Outbound = V2ReadStatsRequest$Outbound;
}

/** @internal */
export const V2ReadStatsResponse$inboundSchema: z.ZodType<
  V2ReadStatsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V2StatsResponse: shared.V2StatsResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V2StatsResponse": "v2StatsResponse",
  });
});

/** @internal */
export type V2ReadStatsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V2StatsResponse?: shared.V2StatsResponse$Outbound | undefined;
};

/** @internal */
export const V2ReadStatsResponse$outboundSchema: z.ZodType<
  V2ReadStatsResponse$Outbound,
  z.ZodTypeDef,
  V2ReadStatsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v2StatsResponse: shared.V2StatsResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v2StatsResponse: "V2StatsResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ReadStatsResponse$ {
  /** @deprecated use `V2ReadStatsResponse$inboundSchema` instead. */
  export const inboundSchema = V2ReadStatsResponse$inboundSchema;
  /** @deprecated use `V2ReadStatsResponse$outboundSchema` instead. */
  export const outboundSchema = V2ReadStatsResponse$outboundSchema;
  /** @deprecated use `V2ReadStatsResponse$Outbound` instead. */
  export type Outbound = V2ReadStatsResponse$Outbound;
}
