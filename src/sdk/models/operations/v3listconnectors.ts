/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type V3ListConnectorsRequest = {
  /**
   * Parameter used in pagination requests. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set.
   *
   * @remarks
   */
  cursor?: string | undefined;
  /**
   * The number of items to return
   */
  pageSize?: number | undefined;
  query?: { [k: string]: any } | undefined;
};

export type V3ListConnectorsResponse = {
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
  v3ConnectorsCursorResponse?: shared.V3ConnectorsCursorResponse | undefined;
};

/** @internal */
export const V3ListConnectorsRequest$inboundSchema: z.ZodType<
  V3ListConnectorsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().optional(),
  query: z.record(z.any()).optional(),
});

/** @internal */
export type V3ListConnectorsRequest$Outbound = {
  cursor?: string | undefined;
  pageSize?: number | undefined;
  query?: { [k: string]: any } | undefined;
};

/** @internal */
export const V3ListConnectorsRequest$outboundSchema: z.ZodType<
  V3ListConnectorsRequest$Outbound,
  z.ZodTypeDef,
  V3ListConnectorsRequest
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().optional(),
  query: z.record(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ListConnectorsRequest$ {
  /** @deprecated use `V3ListConnectorsRequest$inboundSchema` instead. */
  export const inboundSchema = V3ListConnectorsRequest$inboundSchema;
  /** @deprecated use `V3ListConnectorsRequest$outboundSchema` instead. */
  export const outboundSchema = V3ListConnectorsRequest$outboundSchema;
  /** @deprecated use `V3ListConnectorsRequest$Outbound` instead. */
  export type Outbound = V3ListConnectorsRequest$Outbound;
}

export function v3ListConnectorsRequestToJSON(
  v3ListConnectorsRequest: V3ListConnectorsRequest,
): string {
  return JSON.stringify(
    V3ListConnectorsRequest$outboundSchema.parse(v3ListConnectorsRequest),
  );
}

export function v3ListConnectorsRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3ListConnectorsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3ListConnectorsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ListConnectorsRequest' from JSON`,
  );
}

/** @internal */
export const V3ListConnectorsResponse$inboundSchema: z.ZodType<
  V3ListConnectorsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V3ConnectorsCursorResponse: shared.V3ConnectorsCursorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V3ConnectorsCursorResponse": "v3ConnectorsCursorResponse",
  });
});

/** @internal */
export type V3ListConnectorsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V3ConnectorsCursorResponse?:
    | shared.V3ConnectorsCursorResponse$Outbound
    | undefined;
};

/** @internal */
export const V3ListConnectorsResponse$outboundSchema: z.ZodType<
  V3ListConnectorsResponse$Outbound,
  z.ZodTypeDef,
  V3ListConnectorsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v3ConnectorsCursorResponse: shared.V3ConnectorsCursorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v3ConnectorsCursorResponse: "V3ConnectorsCursorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ListConnectorsResponse$ {
  /** @deprecated use `V3ListConnectorsResponse$inboundSchema` instead. */
  export const inboundSchema = V3ListConnectorsResponse$inboundSchema;
  /** @deprecated use `V3ListConnectorsResponse$outboundSchema` instead. */
  export const outboundSchema = V3ListConnectorsResponse$outboundSchema;
  /** @deprecated use `V3ListConnectorsResponse$Outbound` instead. */
  export type Outbound = V3ListConnectorsResponse$Outbound;
}

export function v3ListConnectorsResponseToJSON(
  v3ListConnectorsResponse: V3ListConnectorsResponse,
): string {
  return JSON.stringify(
    V3ListConnectorsResponse$outboundSchema.parse(v3ListConnectorsResponse),
  );
}

export function v3ListConnectorsResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3ListConnectorsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3ListConnectorsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ListConnectorsResponse' from JSON`,
  );
}
