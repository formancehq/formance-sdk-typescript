/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type V2ListInstancesRequest = {
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
   * The maximum number of results to return per page.
   *
   * @remarks
   */
  pageSize?: number | undefined;
  /**
   * Filter running instances
   */
  running?: boolean | undefined;
  /**
   * A workflow id
   */
  workflowID?: string | undefined;
};

export type V2ListInstancesResponse = {
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
   * List of workflow instances
   */
  v2ListRunsResponse?: shared.V2ListRunsResponse | undefined;
};

/** @internal */
export const V2ListInstancesRequest$inboundSchema: z.ZodType<
  V2ListInstancesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().optional(),
  running: z.boolean().optional(),
  workflowID: z.string().optional(),
});

/** @internal */
export type V2ListInstancesRequest$Outbound = {
  cursor?: string | undefined;
  pageSize?: number | undefined;
  running?: boolean | undefined;
  workflowID?: string | undefined;
};

/** @internal */
export const V2ListInstancesRequest$outboundSchema: z.ZodType<
  V2ListInstancesRequest$Outbound,
  z.ZodTypeDef,
  V2ListInstancesRequest
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().optional(),
  running: z.boolean().optional(),
  workflowID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ListInstancesRequest$ {
  /** @deprecated use `V2ListInstancesRequest$inboundSchema` instead. */
  export const inboundSchema = V2ListInstancesRequest$inboundSchema;
  /** @deprecated use `V2ListInstancesRequest$outboundSchema` instead. */
  export const outboundSchema = V2ListInstancesRequest$outboundSchema;
  /** @deprecated use `V2ListInstancesRequest$Outbound` instead. */
  export type Outbound = V2ListInstancesRequest$Outbound;
}

/** @internal */
export const V2ListInstancesResponse$inboundSchema: z.ZodType<
  V2ListInstancesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V2ListRunsResponse: shared.V2ListRunsResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V2ListRunsResponse": "v2ListRunsResponse",
  });
});

/** @internal */
export type V2ListInstancesResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V2ListRunsResponse?: shared.V2ListRunsResponse$Outbound | undefined;
};

/** @internal */
export const V2ListInstancesResponse$outboundSchema: z.ZodType<
  V2ListInstancesResponse$Outbound,
  z.ZodTypeDef,
  V2ListInstancesResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v2ListRunsResponse: shared.V2ListRunsResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v2ListRunsResponse: "V2ListRunsResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ListInstancesResponse$ {
  /** @deprecated use `V2ListInstancesResponse$inboundSchema` instead. */
  export const inboundSchema = V2ListInstancesResponse$inboundSchema;
  /** @deprecated use `V2ListInstancesResponse$outboundSchema` instead. */
  export const outboundSchema = V2ListInstancesResponse$outboundSchema;
  /** @deprecated use `V2ListInstancesResponse$Outbound` instead. */
  export type Outbound = V2ListInstancesResponse$Outbound;
}
