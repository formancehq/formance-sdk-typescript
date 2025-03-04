/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type V2ListLedgersRequest = {
  /**
   * Parameter used in pagination requests. Maximum page size is set to 15.
   *
   * @remarks
   * Set to the value of next for the next page of results.
   * Set to the value of previous for the previous page of results.
   * No other parameters can be set when this parameter is set.
   */
  cursor?: string | undefined;
  /**
   * The maximum number of results to return per page.
   *
   * @remarks
   */
  pageSize?: number | undefined;
};

export type V2ListLedgersResponse = {
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
  v2LedgerListResponse?: shared.V2LedgerListResponse | undefined;
};

/** @internal */
export const V2ListLedgersRequest$inboundSchema: z.ZodType<
  V2ListLedgersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().optional(),
});

/** @internal */
export type V2ListLedgersRequest$Outbound = {
  cursor?: string | undefined;
  pageSize?: number | undefined;
};

/** @internal */
export const V2ListLedgersRequest$outboundSchema: z.ZodType<
  V2ListLedgersRequest$Outbound,
  z.ZodTypeDef,
  V2ListLedgersRequest
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ListLedgersRequest$ {
  /** @deprecated use `V2ListLedgersRequest$inboundSchema` instead. */
  export const inboundSchema = V2ListLedgersRequest$inboundSchema;
  /** @deprecated use `V2ListLedgersRequest$outboundSchema` instead. */
  export const outboundSchema = V2ListLedgersRequest$outboundSchema;
  /** @deprecated use `V2ListLedgersRequest$Outbound` instead. */
  export type Outbound = V2ListLedgersRequest$Outbound;
}

export function v2ListLedgersRequestToJSON(
  v2ListLedgersRequest: V2ListLedgersRequest,
): string {
  return JSON.stringify(
    V2ListLedgersRequest$outboundSchema.parse(v2ListLedgersRequest),
  );
}

export function v2ListLedgersRequestFromJSON(
  jsonString: string,
): SafeParseResult<V2ListLedgersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2ListLedgersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2ListLedgersRequest' from JSON`,
  );
}

/** @internal */
export const V2ListLedgersResponse$inboundSchema: z.ZodType<
  V2ListLedgersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V2LedgerListResponse: shared.V2LedgerListResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V2LedgerListResponse": "v2LedgerListResponse",
  });
});

/** @internal */
export type V2ListLedgersResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V2LedgerListResponse?: shared.V2LedgerListResponse$Outbound | undefined;
};

/** @internal */
export const V2ListLedgersResponse$outboundSchema: z.ZodType<
  V2ListLedgersResponse$Outbound,
  z.ZodTypeDef,
  V2ListLedgersResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v2LedgerListResponse: shared.V2LedgerListResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v2LedgerListResponse: "V2LedgerListResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ListLedgersResponse$ {
  /** @deprecated use `V2ListLedgersResponse$inboundSchema` instead. */
  export const inboundSchema = V2ListLedgersResponse$inboundSchema;
  /** @deprecated use `V2ListLedgersResponse$outboundSchema` instead. */
  export const outboundSchema = V2ListLedgersResponse$outboundSchema;
  /** @deprecated use `V2ListLedgersResponse$Outbound` instead. */
  export type Outbound = V2ListLedgersResponse$Outbound;
}

export function v2ListLedgersResponseToJSON(
  v2ListLedgersResponse: V2ListLedgersResponse,
): string {
  return JSON.stringify(
    V2ListLedgersResponse$outboundSchema.parse(v2ListLedgersResponse),
  );
}

export function v2ListLedgersResponseFromJSON(
  jsonString: string,
): SafeParseResult<V2ListLedgersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2ListLedgersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2ListLedgersResponse' from JSON`,
  );
}
