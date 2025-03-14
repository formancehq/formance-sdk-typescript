/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListWalletsRequest = {
  /**
   * Parameter used in pagination requests.
   *
   * @remarks
   * Set to the value of next for the next page of results.
   * Set to the value of previous for the previous page of results.
   * No other parameters can be set when the pagination token is set.
   */
  cursor?: string | undefined;
  expand?: string | undefined;
  /**
   * Filter wallets by metadata key value pairs. Nested objects can be used as seen in the example below.
   */
  metadata?: { [k: string]: string } | undefined;
  /**
   * Filter on wallet name
   */
  name?: string | undefined;
  /**
   * The maximum number of results to return per page
   */
  pageSize?: number | undefined;
};

export type ListWalletsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * OK
   */
  listWalletsResponse?: shared.ListWalletsResponse | undefined;
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
export const ListWalletsRequest$inboundSchema: z.ZodType<
  ListWalletsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  expand: z.string().optional(),
  metadata: z.record(z.string()).optional(),
  name: z.string().optional(),
  pageSize: z.number().int().default(15),
});

/** @internal */
export type ListWalletsRequest$Outbound = {
  cursor?: string | undefined;
  expand?: string | undefined;
  metadata?: { [k: string]: string } | undefined;
  name?: string | undefined;
  pageSize: number;
};

/** @internal */
export const ListWalletsRequest$outboundSchema: z.ZodType<
  ListWalletsRequest$Outbound,
  z.ZodTypeDef,
  ListWalletsRequest
> = z.object({
  cursor: z.string().optional(),
  expand: z.string().optional(),
  metadata: z.record(z.string()).optional(),
  name: z.string().optional(),
  pageSize: z.number().int().default(15),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWalletsRequest$ {
  /** @deprecated use `ListWalletsRequest$inboundSchema` instead. */
  export const inboundSchema = ListWalletsRequest$inboundSchema;
  /** @deprecated use `ListWalletsRequest$outboundSchema` instead. */
  export const outboundSchema = ListWalletsRequest$outboundSchema;
  /** @deprecated use `ListWalletsRequest$Outbound` instead. */
  export type Outbound = ListWalletsRequest$Outbound;
}

export function listWalletsRequestToJSON(
  listWalletsRequest: ListWalletsRequest,
): string {
  return JSON.stringify(
    ListWalletsRequest$outboundSchema.parse(listWalletsRequest),
  );
}

export function listWalletsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListWalletsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWalletsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWalletsRequest' from JSON`,
  );
}

/** @internal */
export const ListWalletsResponse$inboundSchema: z.ZodType<
  ListWalletsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  ListWalletsResponse: shared.ListWalletsResponse$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "ListWalletsResponse": "listWalletsResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListWalletsResponse$Outbound = {
  ContentType: string;
  ListWalletsResponse?: shared.ListWalletsResponse$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const ListWalletsResponse$outboundSchema: z.ZodType<
  ListWalletsResponse$Outbound,
  z.ZodTypeDef,
  ListWalletsResponse
> = z.object({
  contentType: z.string(),
  listWalletsResponse: shared.ListWalletsResponse$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    listWalletsResponse: "ListWalletsResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWalletsResponse$ {
  /** @deprecated use `ListWalletsResponse$inboundSchema` instead. */
  export const inboundSchema = ListWalletsResponse$inboundSchema;
  /** @deprecated use `ListWalletsResponse$outboundSchema` instead. */
  export const outboundSchema = ListWalletsResponse$outboundSchema;
  /** @deprecated use `ListWalletsResponse$Outbound` instead. */
  export type Outbound = ListWalletsResponse$Outbound;
}

export function listWalletsResponseToJSON(
  listWalletsResponse: ListWalletsResponse,
): string {
  return JSON.stringify(
    ListWalletsResponse$outboundSchema.parse(listWalletsResponse),
  );
}

export function listWalletsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListWalletsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWalletsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWalletsResponse' from JSON`,
  );
}
