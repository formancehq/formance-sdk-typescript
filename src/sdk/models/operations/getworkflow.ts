/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type GetWorkflowRequest = {
  /**
   * The flow id
   */
  flowId: string;
};

export type GetWorkflowResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The workflow
   */
  getWorkflowResponse?: shared.GetWorkflowResponse | undefined;
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
export const GetWorkflowRequest$inboundSchema: z.ZodType<
  GetWorkflowRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  flowId: z.string(),
});

/** @internal */
export type GetWorkflowRequest$Outbound = {
  flowId: string;
};

/** @internal */
export const GetWorkflowRequest$outboundSchema: z.ZodType<
  GetWorkflowRequest$Outbound,
  z.ZodTypeDef,
  GetWorkflowRequest
> = z.object({
  flowId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkflowRequest$ {
  /** @deprecated use `GetWorkflowRequest$inboundSchema` instead. */
  export const inboundSchema = GetWorkflowRequest$inboundSchema;
  /** @deprecated use `GetWorkflowRequest$outboundSchema` instead. */
  export const outboundSchema = GetWorkflowRequest$outboundSchema;
  /** @deprecated use `GetWorkflowRequest$Outbound` instead. */
  export type Outbound = GetWorkflowRequest$Outbound;
}

/** @internal */
export const GetWorkflowResponse$inboundSchema: z.ZodType<
  GetWorkflowResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  GetWorkflowResponse: shared.GetWorkflowResponse$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "GetWorkflowResponse": "getWorkflowResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetWorkflowResponse$Outbound = {
  ContentType: string;
  GetWorkflowResponse?: shared.GetWorkflowResponse$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetWorkflowResponse$outboundSchema: z.ZodType<
  GetWorkflowResponse$Outbound,
  z.ZodTypeDef,
  GetWorkflowResponse
> = z.object({
  contentType: z.string(),
  getWorkflowResponse: shared.GetWorkflowResponse$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    getWorkflowResponse: "GetWorkflowResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkflowResponse$ {
  /** @deprecated use `GetWorkflowResponse$inboundSchema` instead. */
  export const inboundSchema = GetWorkflowResponse$inboundSchema;
  /** @deprecated use `GetWorkflowResponse$outboundSchema` instead. */
  export const outboundSchema = GetWorkflowResponse$outboundSchema;
  /** @deprecated use `GetWorkflowResponse$Outbound` instead. */
  export type Outbound = GetWorkflowResponse$Outbound;
}
