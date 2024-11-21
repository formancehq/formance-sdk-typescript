/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListPoliciesRequest = {
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

export type ListPoliciesResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * OK
   */
  policiesCursorResponse?: shared.PoliciesCursorResponse | undefined;
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
export const ListPoliciesRequest$inboundSchema: z.ZodType<
  ListPoliciesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().optional(),
});

/** @internal */
export type ListPoliciesRequest$Outbound = {
  cursor?: string | undefined;
  pageSize?: number | undefined;
};

/** @internal */
export const ListPoliciesRequest$outboundSchema: z.ZodType<
  ListPoliciesRequest$Outbound,
  z.ZodTypeDef,
  ListPoliciesRequest
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPoliciesRequest$ {
  /** @deprecated use `ListPoliciesRequest$inboundSchema` instead. */
  export const inboundSchema = ListPoliciesRequest$inboundSchema;
  /** @deprecated use `ListPoliciesRequest$outboundSchema` instead. */
  export const outboundSchema = ListPoliciesRequest$outboundSchema;
  /** @deprecated use `ListPoliciesRequest$Outbound` instead. */
  export type Outbound = ListPoliciesRequest$Outbound;
}

export function listPoliciesRequestToJSON(
  listPoliciesRequest: ListPoliciesRequest,
): string {
  return JSON.stringify(
    ListPoliciesRequest$outboundSchema.parse(listPoliciesRequest),
  );
}

export function listPoliciesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListPoliciesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPoliciesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPoliciesRequest' from JSON`,
  );
}

/** @internal */
export const ListPoliciesResponse$inboundSchema: z.ZodType<
  ListPoliciesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  PoliciesCursorResponse: shared.PoliciesCursorResponse$inboundSchema
    .optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "PoliciesCursorResponse": "policiesCursorResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListPoliciesResponse$Outbound = {
  ContentType: string;
  PoliciesCursorResponse?: shared.PoliciesCursorResponse$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const ListPoliciesResponse$outboundSchema: z.ZodType<
  ListPoliciesResponse$Outbound,
  z.ZodTypeDef,
  ListPoliciesResponse
> = z.object({
  contentType: z.string(),
  policiesCursorResponse: shared.PoliciesCursorResponse$outboundSchema
    .optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    policiesCursorResponse: "PoliciesCursorResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPoliciesResponse$ {
  /** @deprecated use `ListPoliciesResponse$inboundSchema` instead. */
  export const inboundSchema = ListPoliciesResponse$inboundSchema;
  /** @deprecated use `ListPoliciesResponse$outboundSchema` instead. */
  export const outboundSchema = ListPoliciesResponse$outboundSchema;
  /** @deprecated use `ListPoliciesResponse$Outbound` instead. */
  export type Outbound = ListPoliciesResponse$Outbound;
}

export function listPoliciesResponseToJSON(
  listPoliciesResponse: ListPoliciesResponse,
): string {
  return JSON.stringify(
    ListPoliciesResponse$outboundSchema.parse(listPoliciesResponse),
  );
}

export function listPoliciesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListPoliciesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPoliciesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPoliciesResponse' from JSON`,
  );
}
