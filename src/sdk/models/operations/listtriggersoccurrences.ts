/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListTriggersOccurrencesRequest = {
  /**
   * The trigger id
   */
  triggerID: string;
};

export type ListTriggersOccurrencesResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * List of triggers occurrences
   */
  listTriggersOccurrencesResponse?:
    | shared.ListTriggersOccurrencesResponse
    | undefined;
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
export const ListTriggersOccurrencesRequest$inboundSchema: z.ZodType<
  ListTriggersOccurrencesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  triggerID: z.string(),
});

/** @internal */
export type ListTriggersOccurrencesRequest$Outbound = {
  triggerID: string;
};

/** @internal */
export const ListTriggersOccurrencesRequest$outboundSchema: z.ZodType<
  ListTriggersOccurrencesRequest$Outbound,
  z.ZodTypeDef,
  ListTriggersOccurrencesRequest
> = z.object({
  triggerID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTriggersOccurrencesRequest$ {
  /** @deprecated use `ListTriggersOccurrencesRequest$inboundSchema` instead. */
  export const inboundSchema = ListTriggersOccurrencesRequest$inboundSchema;
  /** @deprecated use `ListTriggersOccurrencesRequest$outboundSchema` instead. */
  export const outboundSchema = ListTriggersOccurrencesRequest$outboundSchema;
  /** @deprecated use `ListTriggersOccurrencesRequest$Outbound` instead. */
  export type Outbound = ListTriggersOccurrencesRequest$Outbound;
}

export function listTriggersOccurrencesRequestToJSON(
  listTriggersOccurrencesRequest: ListTriggersOccurrencesRequest,
): string {
  return JSON.stringify(
    ListTriggersOccurrencesRequest$outboundSchema.parse(
      listTriggersOccurrencesRequest,
    ),
  );
}

export function listTriggersOccurrencesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListTriggersOccurrencesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTriggersOccurrencesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTriggersOccurrencesRequest' from JSON`,
  );
}

/** @internal */
export const ListTriggersOccurrencesResponse$inboundSchema: z.ZodType<
  ListTriggersOccurrencesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  ListTriggersOccurrencesResponse: shared
    .ListTriggersOccurrencesResponse$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "ListTriggersOccurrencesResponse": "listTriggersOccurrencesResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListTriggersOccurrencesResponse$Outbound = {
  ContentType: string;
  ListTriggersOccurrencesResponse?:
    | shared.ListTriggersOccurrencesResponse$Outbound
    | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const ListTriggersOccurrencesResponse$outboundSchema: z.ZodType<
  ListTriggersOccurrencesResponse$Outbound,
  z.ZodTypeDef,
  ListTriggersOccurrencesResponse
> = z.object({
  contentType: z.string(),
  listTriggersOccurrencesResponse: shared
    .ListTriggersOccurrencesResponse$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    listTriggersOccurrencesResponse: "ListTriggersOccurrencesResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTriggersOccurrencesResponse$ {
  /** @deprecated use `ListTriggersOccurrencesResponse$inboundSchema` instead. */
  export const inboundSchema = ListTriggersOccurrencesResponse$inboundSchema;
  /** @deprecated use `ListTriggersOccurrencesResponse$outboundSchema` instead. */
  export const outboundSchema = ListTriggersOccurrencesResponse$outboundSchema;
  /** @deprecated use `ListTriggersOccurrencesResponse$Outbound` instead. */
  export type Outbound = ListTriggersOccurrencesResponse$Outbound;
}

export function listTriggersOccurrencesResponseToJSON(
  listTriggersOccurrencesResponse: ListTriggersOccurrencesResponse,
): string {
  return JSON.stringify(
    ListTriggersOccurrencesResponse$outboundSchema.parse(
      listTriggersOccurrencesResponse,
    ),
  );
}

export function listTriggersOccurrencesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListTriggersOccurrencesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTriggersOccurrencesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTriggersOccurrencesResponse' from JSON`,
  );
}
