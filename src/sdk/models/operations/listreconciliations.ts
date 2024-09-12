/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type ListReconciliationsRequest = {
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

export type ListReconciliationsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * OK
   */
  reconciliationsCursorResponse?:
    | shared.ReconciliationsCursorResponse
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
export const ListReconciliationsRequest$inboundSchema: z.ZodType<
  ListReconciliationsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().optional(),
});

/** @internal */
export type ListReconciliationsRequest$Outbound = {
  cursor?: string | undefined;
  pageSize?: number | undefined;
};

/** @internal */
export const ListReconciliationsRequest$outboundSchema: z.ZodType<
  ListReconciliationsRequest$Outbound,
  z.ZodTypeDef,
  ListReconciliationsRequest
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListReconciliationsRequest$ {
  /** @deprecated use `ListReconciliationsRequest$inboundSchema` instead. */
  export const inboundSchema = ListReconciliationsRequest$inboundSchema;
  /** @deprecated use `ListReconciliationsRequest$outboundSchema` instead. */
  export const outboundSchema = ListReconciliationsRequest$outboundSchema;
  /** @deprecated use `ListReconciliationsRequest$Outbound` instead. */
  export type Outbound = ListReconciliationsRequest$Outbound;
}

/** @internal */
export const ListReconciliationsResponse$inboundSchema: z.ZodType<
  ListReconciliationsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  ReconciliationsCursorResponse: shared
    .ReconciliationsCursorResponse$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "ReconciliationsCursorResponse": "reconciliationsCursorResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListReconciliationsResponse$Outbound = {
  ContentType: string;
  ReconciliationsCursorResponse?:
    | shared.ReconciliationsCursorResponse$Outbound
    | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const ListReconciliationsResponse$outboundSchema: z.ZodType<
  ListReconciliationsResponse$Outbound,
  z.ZodTypeDef,
  ListReconciliationsResponse
> = z.object({
  contentType: z.string(),
  reconciliationsCursorResponse: shared
    .ReconciliationsCursorResponse$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    reconciliationsCursorResponse: "ReconciliationsCursorResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListReconciliationsResponse$ {
  /** @deprecated use `ListReconciliationsResponse$inboundSchema` instead. */
  export const inboundSchema = ListReconciliationsResponse$inboundSchema;
  /** @deprecated use `ListReconciliationsResponse$outboundSchema` instead. */
  export const outboundSchema = ListReconciliationsResponse$outboundSchema;
  /** @deprecated use `ListReconciliationsResponse$Outbound` instead. */
  export type Outbound = ListReconciliationsResponse$Outbound;
}
