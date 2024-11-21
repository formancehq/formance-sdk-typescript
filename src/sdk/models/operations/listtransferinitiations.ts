/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListTransferInitiationsRequest = {
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
  /**
   * Filters used to filter resources.
   *
   * @remarks
   */
  query?: string | undefined;
  /**
   * Fields used to sort payments (default is date:desc).
   */
  sort?: Array<string> | undefined;
};

export type ListTransferInitiationsResponse = {
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
  transferInitiationsCursor?: shared.TransferInitiationsCursor | undefined;
};

/** @internal */
export const ListTransferInitiationsRequest$inboundSchema: z.ZodType<
  ListTransferInitiationsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().default(15),
  query: z.string().optional(),
  sort: z.array(z.string()).optional(),
});

/** @internal */
export type ListTransferInitiationsRequest$Outbound = {
  cursor?: string | undefined;
  pageSize: number;
  query?: string | undefined;
  sort?: Array<string> | undefined;
};

/** @internal */
export const ListTransferInitiationsRequest$outboundSchema: z.ZodType<
  ListTransferInitiationsRequest$Outbound,
  z.ZodTypeDef,
  ListTransferInitiationsRequest
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().default(15),
  query: z.string().optional(),
  sort: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransferInitiationsRequest$ {
  /** @deprecated use `ListTransferInitiationsRequest$inboundSchema` instead. */
  export const inboundSchema = ListTransferInitiationsRequest$inboundSchema;
  /** @deprecated use `ListTransferInitiationsRequest$outboundSchema` instead. */
  export const outboundSchema = ListTransferInitiationsRequest$outboundSchema;
  /** @deprecated use `ListTransferInitiationsRequest$Outbound` instead. */
  export type Outbound = ListTransferInitiationsRequest$Outbound;
}

export function listTransferInitiationsRequestToJSON(
  listTransferInitiationsRequest: ListTransferInitiationsRequest,
): string {
  return JSON.stringify(
    ListTransferInitiationsRequest$outboundSchema.parse(
      listTransferInitiationsRequest,
    ),
  );
}

export function listTransferInitiationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListTransferInitiationsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTransferInitiationsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTransferInitiationsRequest' from JSON`,
  );
}

/** @internal */
export const ListTransferInitiationsResponse$inboundSchema: z.ZodType<
  ListTransferInitiationsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  TransferInitiationsCursor: shared.TransferInitiationsCursor$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "TransferInitiationsCursor": "transferInitiationsCursor",
  });
});

/** @internal */
export type ListTransferInitiationsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  TransferInitiationsCursor?:
    | shared.TransferInitiationsCursor$Outbound
    | undefined;
};

/** @internal */
export const ListTransferInitiationsResponse$outboundSchema: z.ZodType<
  ListTransferInitiationsResponse$Outbound,
  z.ZodTypeDef,
  ListTransferInitiationsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  transferInitiationsCursor: shared.TransferInitiationsCursor$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    transferInitiationsCursor: "TransferInitiationsCursor",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransferInitiationsResponse$ {
  /** @deprecated use `ListTransferInitiationsResponse$inboundSchema` instead. */
  export const inboundSchema = ListTransferInitiationsResponse$inboundSchema;
  /** @deprecated use `ListTransferInitiationsResponse$outboundSchema` instead. */
  export const outboundSchema = ListTransferInitiationsResponse$outboundSchema;
  /** @deprecated use `ListTransferInitiationsResponse$Outbound` instead. */
  export type Outbound = ListTransferInitiationsResponse$Outbound;
}

export function listTransferInitiationsResponseToJSON(
  listTransferInitiationsResponse: ListTransferInitiationsResponse,
): string {
  return JSON.stringify(
    ListTransferInitiationsResponse$outboundSchema.parse(
      listTransferInitiationsResponse,
    ),
  );
}

export function listTransferInitiationsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListTransferInitiationsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTransferInitiationsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTransferInitiationsResponse' from JSON`,
  );
}
