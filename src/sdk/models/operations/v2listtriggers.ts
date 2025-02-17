/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type V2ListTriggersRequest = {
  /**
   * Parameter used in pagination requests.
   *
   * @remarks
   * Set to the value of next for the next page of results.
   * Set to the value of previous for the previous page of results.
   * No other parameters can be set when this parameter is set.
   */
  cursor?: string | undefined;
  /**
   * search by name
   */
  name?: string | undefined;
  /**
   * The maximum number of results to return per page.
   *
   * @remarks
   */
  pageSize?: number | undefined;
};

export type V2ListTriggersResponse = {
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
   * List of triggers
   */
  v2ListTriggersResponse?: shared.V2ListTriggersResponse | undefined;
};

/** @internal */
export const V2ListTriggersRequest$inboundSchema: z.ZodType<
  V2ListTriggersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  name: z.string().optional(),
  pageSize: z.number().int().optional(),
});

/** @internal */
export type V2ListTriggersRequest$Outbound = {
  cursor?: string | undefined;
  name?: string | undefined;
  pageSize?: number | undefined;
};

/** @internal */
export const V2ListTriggersRequest$outboundSchema: z.ZodType<
  V2ListTriggersRequest$Outbound,
  z.ZodTypeDef,
  V2ListTriggersRequest
> = z.object({
  cursor: z.string().optional(),
  name: z.string().optional(),
  pageSize: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ListTriggersRequest$ {
  /** @deprecated use `V2ListTriggersRequest$inboundSchema` instead. */
  export const inboundSchema = V2ListTriggersRequest$inboundSchema;
  /** @deprecated use `V2ListTriggersRequest$outboundSchema` instead. */
  export const outboundSchema = V2ListTriggersRequest$outboundSchema;
  /** @deprecated use `V2ListTriggersRequest$Outbound` instead. */
  export type Outbound = V2ListTriggersRequest$Outbound;
}

export function v2ListTriggersRequestToJSON(
  v2ListTriggersRequest: V2ListTriggersRequest,
): string {
  return JSON.stringify(
    V2ListTriggersRequest$outboundSchema.parse(v2ListTriggersRequest),
  );
}

export function v2ListTriggersRequestFromJSON(
  jsonString: string,
): SafeParseResult<V2ListTriggersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2ListTriggersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2ListTriggersRequest' from JSON`,
  );
}

/** @internal */
export const V2ListTriggersResponse$inboundSchema: z.ZodType<
  V2ListTriggersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V2ListTriggersResponse: shared.V2ListTriggersResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V2ListTriggersResponse": "v2ListTriggersResponse",
  });
});

/** @internal */
export type V2ListTriggersResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V2ListTriggersResponse?: shared.V2ListTriggersResponse$Outbound | undefined;
};

/** @internal */
export const V2ListTriggersResponse$outboundSchema: z.ZodType<
  V2ListTriggersResponse$Outbound,
  z.ZodTypeDef,
  V2ListTriggersResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v2ListTriggersResponse: shared.V2ListTriggersResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v2ListTriggersResponse: "V2ListTriggersResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ListTriggersResponse$ {
  /** @deprecated use `V2ListTriggersResponse$inboundSchema` instead. */
  export const inboundSchema = V2ListTriggersResponse$inboundSchema;
  /** @deprecated use `V2ListTriggersResponse$outboundSchema` instead. */
  export const outboundSchema = V2ListTriggersResponse$outboundSchema;
  /** @deprecated use `V2ListTriggersResponse$Outbound` instead. */
  export type Outbound = V2ListTriggersResponse$Outbound;
}

export function v2ListTriggersResponseToJSON(
  v2ListTriggersResponse: V2ListTriggersResponse,
): string {
  return JSON.stringify(
    V2ListTriggersResponse$outboundSchema.parse(v2ListTriggersResponse),
  );
}

export function v2ListTriggersResponseFromJSON(
  jsonString: string,
): SafeParseResult<V2ListTriggersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2ListTriggersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2ListTriggersResponse' from JSON`,
  );
}
