/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type V3GetPoolBalancesRequest = {
  /**
   * The time to filter by
   */
  at?: Date | undefined;
  /**
   * The pool ID
   */
  poolID: string;
};

export type V3GetPoolBalancesResponse = {
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
  v3PoolBalancesResponse?: shared.V3PoolBalancesResponse | undefined;
};

/** @internal */
export const V3GetPoolBalancesRequest$inboundSchema: z.ZodType<
  V3GetPoolBalancesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  poolID: z.string(),
});

/** @internal */
export type V3GetPoolBalancesRequest$Outbound = {
  at?: string | undefined;
  poolID: string;
};

/** @internal */
export const V3GetPoolBalancesRequest$outboundSchema: z.ZodType<
  V3GetPoolBalancesRequest$Outbound,
  z.ZodTypeDef,
  V3GetPoolBalancesRequest
> = z.object({
  at: z.date().transform(v => v.toISOString()).optional(),
  poolID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3GetPoolBalancesRequest$ {
  /** @deprecated use `V3GetPoolBalancesRequest$inboundSchema` instead. */
  export const inboundSchema = V3GetPoolBalancesRequest$inboundSchema;
  /** @deprecated use `V3GetPoolBalancesRequest$outboundSchema` instead. */
  export const outboundSchema = V3GetPoolBalancesRequest$outboundSchema;
  /** @deprecated use `V3GetPoolBalancesRequest$Outbound` instead. */
  export type Outbound = V3GetPoolBalancesRequest$Outbound;
}

export function v3GetPoolBalancesRequestToJSON(
  v3GetPoolBalancesRequest: V3GetPoolBalancesRequest,
): string {
  return JSON.stringify(
    V3GetPoolBalancesRequest$outboundSchema.parse(v3GetPoolBalancesRequest),
  );
}

export function v3GetPoolBalancesRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3GetPoolBalancesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3GetPoolBalancesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3GetPoolBalancesRequest' from JSON`,
  );
}

/** @internal */
export const V3GetPoolBalancesResponse$inboundSchema: z.ZodType<
  V3GetPoolBalancesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V3PoolBalancesResponse: shared.V3PoolBalancesResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V3PoolBalancesResponse": "v3PoolBalancesResponse",
  });
});

/** @internal */
export type V3GetPoolBalancesResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V3PoolBalancesResponse?: shared.V3PoolBalancesResponse$Outbound | undefined;
};

/** @internal */
export const V3GetPoolBalancesResponse$outboundSchema: z.ZodType<
  V3GetPoolBalancesResponse$Outbound,
  z.ZodTypeDef,
  V3GetPoolBalancesResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v3PoolBalancesResponse: shared.V3PoolBalancesResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v3PoolBalancesResponse: "V3PoolBalancesResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3GetPoolBalancesResponse$ {
  /** @deprecated use `V3GetPoolBalancesResponse$inboundSchema` instead. */
  export const inboundSchema = V3GetPoolBalancesResponse$inboundSchema;
  /** @deprecated use `V3GetPoolBalancesResponse$outboundSchema` instead. */
  export const outboundSchema = V3GetPoolBalancesResponse$outboundSchema;
  /** @deprecated use `V3GetPoolBalancesResponse$Outbound` instead. */
  export type Outbound = V3GetPoolBalancesResponse$Outbound;
}

export function v3GetPoolBalancesResponseToJSON(
  v3GetPoolBalancesResponse: V3GetPoolBalancesResponse,
): string {
  return JSON.stringify(
    V3GetPoolBalancesResponse$outboundSchema.parse(v3GetPoolBalancesResponse),
  );
}

export function v3GetPoolBalancesResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3GetPoolBalancesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3GetPoolBalancesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3GetPoolBalancesResponse' from JSON`,
  );
}
