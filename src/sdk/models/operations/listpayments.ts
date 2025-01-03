/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListPaymentsRequest = {
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

export type ListPaymentsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * OK
   */
  paymentsCursor?: shared.PaymentsCursor | undefined;
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
export const ListPaymentsRequest$inboundSchema: z.ZodType<
  ListPaymentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().default(15),
  query: z.string().optional(),
  sort: z.array(z.string()).optional(),
});

/** @internal */
export type ListPaymentsRequest$Outbound = {
  cursor?: string | undefined;
  pageSize: number;
  query?: string | undefined;
  sort?: Array<string> | undefined;
};

/** @internal */
export const ListPaymentsRequest$outboundSchema: z.ZodType<
  ListPaymentsRequest$Outbound,
  z.ZodTypeDef,
  ListPaymentsRequest
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
export namespace ListPaymentsRequest$ {
  /** @deprecated use `ListPaymentsRequest$inboundSchema` instead. */
  export const inboundSchema = ListPaymentsRequest$inboundSchema;
  /** @deprecated use `ListPaymentsRequest$outboundSchema` instead. */
  export const outboundSchema = ListPaymentsRequest$outboundSchema;
  /** @deprecated use `ListPaymentsRequest$Outbound` instead. */
  export type Outbound = ListPaymentsRequest$Outbound;
}

export function listPaymentsRequestToJSON(
  listPaymentsRequest: ListPaymentsRequest,
): string {
  return JSON.stringify(
    ListPaymentsRequest$outboundSchema.parse(listPaymentsRequest),
  );
}

export function listPaymentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListPaymentsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPaymentsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPaymentsRequest' from JSON`,
  );
}

/** @internal */
export const ListPaymentsResponse$inboundSchema: z.ZodType<
  ListPaymentsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  PaymentsCursor: shared.PaymentsCursor$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "PaymentsCursor": "paymentsCursor",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListPaymentsResponse$Outbound = {
  ContentType: string;
  PaymentsCursor?: shared.PaymentsCursor$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const ListPaymentsResponse$outboundSchema: z.ZodType<
  ListPaymentsResponse$Outbound,
  z.ZodTypeDef,
  ListPaymentsResponse
> = z.object({
  contentType: z.string(),
  paymentsCursor: shared.PaymentsCursor$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    paymentsCursor: "PaymentsCursor",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPaymentsResponse$ {
  /** @deprecated use `ListPaymentsResponse$inboundSchema` instead. */
  export const inboundSchema = ListPaymentsResponse$inboundSchema;
  /** @deprecated use `ListPaymentsResponse$outboundSchema` instead. */
  export const outboundSchema = ListPaymentsResponse$outboundSchema;
  /** @deprecated use `ListPaymentsResponse$Outbound` instead. */
  export type Outbound = ListPaymentsResponse$Outbound;
}

export function listPaymentsResponseToJSON(
  listPaymentsResponse: ListPaymentsResponse,
): string {
  return JSON.stringify(
    ListPaymentsResponse$outboundSchema.parse(listPaymentsResponse),
  );
}

export function listPaymentsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListPaymentsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPaymentsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPaymentsResponse' from JSON`,
  );
}
