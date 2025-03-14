/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V2ImportLogsRequest = {
  v2ImportLogsRequest:
    | ReadableStream<Uint8Array>
    | Blob
    | ArrayBuffer
    | Uint8Array;
  /**
   * Name of the ledger.
   */
  ledger: string;
};

export type V2ImportLogsResponse = {
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
export const V2ImportLogsRequest$inboundSchema: z.ZodType<
  V2ImportLogsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  V2ImportLogsRequest: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
  ledger: z.string(),
}).transform((v) => {
  return remap$(v, {
    "V2ImportLogsRequest": "v2ImportLogsRequest",
  });
});

/** @internal */
export type V2ImportLogsRequest$Outbound = {
  V2ImportLogsRequest:
    | ReadableStream<Uint8Array>
    | Blob
    | ArrayBuffer
    | Uint8Array;
  ledger: string;
};

/** @internal */
export const V2ImportLogsRequest$outboundSchema: z.ZodType<
  V2ImportLogsRequest$Outbound,
  z.ZodTypeDef,
  V2ImportLogsRequest
> = z.object({
  v2ImportLogsRequest: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
  ledger: z.string(),
}).transform((v) => {
  return remap$(v, {
    v2ImportLogsRequest: "V2ImportLogsRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ImportLogsRequest$ {
  /** @deprecated use `V2ImportLogsRequest$inboundSchema` instead. */
  export const inboundSchema = V2ImportLogsRequest$inboundSchema;
  /** @deprecated use `V2ImportLogsRequest$outboundSchema` instead. */
  export const outboundSchema = V2ImportLogsRequest$outboundSchema;
  /** @deprecated use `V2ImportLogsRequest$Outbound` instead. */
  export type Outbound = V2ImportLogsRequest$Outbound;
}

export function v2ImportLogsRequestToJSON(
  v2ImportLogsRequest: V2ImportLogsRequest,
): string {
  return JSON.stringify(
    V2ImportLogsRequest$outboundSchema.parse(v2ImportLogsRequest),
  );
}

export function v2ImportLogsRequestFromJSON(
  jsonString: string,
): SafeParseResult<V2ImportLogsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2ImportLogsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2ImportLogsRequest' from JSON`,
  );
}

/** @internal */
export const V2ImportLogsResponse$inboundSchema: z.ZodType<
  V2ImportLogsResponse,
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
export type V2ImportLogsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const V2ImportLogsResponse$outboundSchema: z.ZodType<
  V2ImportLogsResponse$Outbound,
  z.ZodTypeDef,
  V2ImportLogsResponse
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
export namespace V2ImportLogsResponse$ {
  /** @deprecated use `V2ImportLogsResponse$inboundSchema` instead. */
  export const inboundSchema = V2ImportLogsResponse$inboundSchema;
  /** @deprecated use `V2ImportLogsResponse$outboundSchema` instead. */
  export const outboundSchema = V2ImportLogsResponse$outboundSchema;
  /** @deprecated use `V2ImportLogsResponse$Outbound` instead. */
  export type Outbound = V2ImportLogsResponse$Outbound;
}

export function v2ImportLogsResponseToJSON(
  v2ImportLogsResponse: V2ImportLogsResponse,
): string {
  return JSON.stringify(
    V2ImportLogsResponse$outboundSchema.parse(v2ImportLogsResponse),
  );
}

export function v2ImportLogsResponseFromJSON(
  jsonString: string,
): SafeParseResult<V2ImportLogsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2ImportLogsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2ImportLogsResponse' from JSON`,
  );
}
