/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type V2DeleteLedgerMetadataRequest = {
  /**
   * Key to remove.
   */
  key: string;
  /**
   * Name of the ledger.
   */
  ledger: string;
};

export type V2DeleteLedgerMetadataResponse = {
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
};

/** @internal */
export const V2DeleteLedgerMetadataRequest$inboundSchema: z.ZodType<
  V2DeleteLedgerMetadataRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string(),
  ledger: z.string(),
});

/** @internal */
export type V2DeleteLedgerMetadataRequest$Outbound = {
  key: string;
  ledger: string;
};

/** @internal */
export const V2DeleteLedgerMetadataRequest$outboundSchema: z.ZodType<
  V2DeleteLedgerMetadataRequest$Outbound,
  z.ZodTypeDef,
  V2DeleteLedgerMetadataRequest
> = z.object({
  key: z.string(),
  ledger: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2DeleteLedgerMetadataRequest$ {
  /** @deprecated use `V2DeleteLedgerMetadataRequest$inboundSchema` instead. */
  export const inboundSchema = V2DeleteLedgerMetadataRequest$inboundSchema;
  /** @deprecated use `V2DeleteLedgerMetadataRequest$outboundSchema` instead. */
  export const outboundSchema = V2DeleteLedgerMetadataRequest$outboundSchema;
  /** @deprecated use `V2DeleteLedgerMetadataRequest$Outbound` instead. */
  export type Outbound = V2DeleteLedgerMetadataRequest$Outbound;
}

/** @internal */
export const V2DeleteLedgerMetadataResponse$inboundSchema: z.ZodType<
  V2DeleteLedgerMetadataResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type V2DeleteLedgerMetadataResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const V2DeleteLedgerMetadataResponse$outboundSchema: z.ZodType<
  V2DeleteLedgerMetadataResponse$Outbound,
  z.ZodTypeDef,
  V2DeleteLedgerMetadataResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2DeleteLedgerMetadataResponse$ {
  /** @deprecated use `V2DeleteLedgerMetadataResponse$inboundSchema` instead. */
  export const inboundSchema = V2DeleteLedgerMetadataResponse$inboundSchema;
  /** @deprecated use `V2DeleteLedgerMetadataResponse$outboundSchema` instead. */
  export const outboundSchema = V2DeleteLedgerMetadataResponse$outboundSchema;
  /** @deprecated use `V2DeleteLedgerMetadataResponse$Outbound` instead. */
  export type Outbound = V2DeleteLedgerMetadataResponse$Outbound;
}
