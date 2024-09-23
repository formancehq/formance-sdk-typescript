/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type V2CountAccountsRequest = {
  requestBody?: { [k: string]: any } | undefined;
  /**
   * Name of the ledger.
   */
  ledger: string;
  pit?: Date | undefined;
};

export type V2CountAccountsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  headers: { [k: string]: Array<string> };
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
};

/** @internal */
export const V2CountAccountsRequest$inboundSchema: z.ZodType<
  V2CountAccountsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  RequestBody: z.record(z.any()).optional(),
  ledger: z.string(),
  pit: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type V2CountAccountsRequest$Outbound = {
  RequestBody?: { [k: string]: any } | undefined;
  ledger: string;
  pit?: string | undefined;
};

/** @internal */
export const V2CountAccountsRequest$outboundSchema: z.ZodType<
  V2CountAccountsRequest$Outbound,
  z.ZodTypeDef,
  V2CountAccountsRequest
> = z.object({
  requestBody: z.record(z.any()).optional(),
  ledger: z.string(),
  pit: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2CountAccountsRequest$ {
  /** @deprecated use `V2CountAccountsRequest$inboundSchema` instead. */
  export const inboundSchema = V2CountAccountsRequest$inboundSchema;
  /** @deprecated use `V2CountAccountsRequest$outboundSchema` instead. */
  export const outboundSchema = V2CountAccountsRequest$outboundSchema;
  /** @deprecated use `V2CountAccountsRequest$Outbound` instead. */
  export type Outbound = V2CountAccountsRequest$Outbound;
}

/** @internal */
export const V2CountAccountsResponse$inboundSchema: z.ZodType<
  V2CountAccountsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type V2CountAccountsResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const V2CountAccountsResponse$outboundSchema: z.ZodType<
  V2CountAccountsResponse$Outbound,
  z.ZodTypeDef,
  V2CountAccountsResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2CountAccountsResponse$ {
  /** @deprecated use `V2CountAccountsResponse$inboundSchema` instead. */
  export const inboundSchema = V2CountAccountsResponse$inboundSchema;
  /** @deprecated use `V2CountAccountsResponse$outboundSchema` instead. */
  export const outboundSchema = V2CountAccountsResponse$outboundSchema;
  /** @deprecated use `V2CountAccountsResponse$Outbound` instead. */
  export type Outbound = V2CountAccountsResponse$Outbound;
}
