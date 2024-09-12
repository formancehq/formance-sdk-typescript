/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type CancelEventRequest = {
  /**
   * The instance id
   */
  instanceID: string;
};

export type CancelEventResponse = {
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
};

/** @internal */
export const CancelEventRequest$inboundSchema: z.ZodType<
  CancelEventRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  instanceID: z.string(),
});

/** @internal */
export type CancelEventRequest$Outbound = {
  instanceID: string;
};

/** @internal */
export const CancelEventRequest$outboundSchema: z.ZodType<
  CancelEventRequest$Outbound,
  z.ZodTypeDef,
  CancelEventRequest
> = z.object({
  instanceID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelEventRequest$ {
  /** @deprecated use `CancelEventRequest$inboundSchema` instead. */
  export const inboundSchema = CancelEventRequest$inboundSchema;
  /** @deprecated use `CancelEventRequest$outboundSchema` instead. */
  export const outboundSchema = CancelEventRequest$outboundSchema;
  /** @deprecated use `CancelEventRequest$Outbound` instead. */
  export type Outbound = CancelEventRequest$Outbound;
}

/** @internal */
export const CancelEventResponse$inboundSchema: z.ZodType<
  CancelEventResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type CancelEventResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const CancelEventResponse$outboundSchema: z.ZodType<
  CancelEventResponse$Outbound,
  z.ZodTypeDef,
  CancelEventResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelEventResponse$ {
  /** @deprecated use `CancelEventResponse$inboundSchema` instead. */
  export const inboundSchema = CancelEventResponse$inboundSchema;
  /** @deprecated use `CancelEventResponse$outboundSchema` instead. */
  export const outboundSchema = CancelEventResponse$outboundSchema;
  /** @deprecated use `CancelEventResponse$Outbound` instead. */
  export type Outbound = CancelEventResponse$Outbound;
}
