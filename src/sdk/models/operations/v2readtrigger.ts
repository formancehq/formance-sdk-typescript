/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type V2ReadTriggerRequest = {
  /**
   * The trigger id
   */
  triggerID: string;
};

export type V2ReadTriggerResponse = {
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
   * A specific trigger
   */
  v2ReadTriggerResponse?: shared.V2ReadTriggerResponse | undefined;
};

/** @internal */
export const V2ReadTriggerRequest$inboundSchema: z.ZodType<
  V2ReadTriggerRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  triggerID: z.string(),
});

/** @internal */
export type V2ReadTriggerRequest$Outbound = {
  triggerID: string;
};

/** @internal */
export const V2ReadTriggerRequest$outboundSchema: z.ZodType<
  V2ReadTriggerRequest$Outbound,
  z.ZodTypeDef,
  V2ReadTriggerRequest
> = z.object({
  triggerID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ReadTriggerRequest$ {
  /** @deprecated use `V2ReadTriggerRequest$inboundSchema` instead. */
  export const inboundSchema = V2ReadTriggerRequest$inboundSchema;
  /** @deprecated use `V2ReadTriggerRequest$outboundSchema` instead. */
  export const outboundSchema = V2ReadTriggerRequest$outboundSchema;
  /** @deprecated use `V2ReadTriggerRequest$Outbound` instead. */
  export type Outbound = V2ReadTriggerRequest$Outbound;
}

/** @internal */
export const V2ReadTriggerResponse$inboundSchema: z.ZodType<
  V2ReadTriggerResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  V2ReadTriggerResponse: shared.V2ReadTriggerResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "V2ReadTriggerResponse": "v2ReadTriggerResponse",
  });
});

/** @internal */
export type V2ReadTriggerResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  V2ReadTriggerResponse?: shared.V2ReadTriggerResponse$Outbound | undefined;
};

/** @internal */
export const V2ReadTriggerResponse$outboundSchema: z.ZodType<
  V2ReadTriggerResponse$Outbound,
  z.ZodTypeDef,
  V2ReadTriggerResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  v2ReadTriggerResponse: shared.V2ReadTriggerResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    v2ReadTriggerResponse: "V2ReadTriggerResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ReadTriggerResponse$ {
  /** @deprecated use `V2ReadTriggerResponse$inboundSchema` instead. */
  export const inboundSchema = V2ReadTriggerResponse$inboundSchema;
  /** @deprecated use `V2ReadTriggerResponse$outboundSchema` instead. */
  export const outboundSchema = V2ReadTriggerResponse$outboundSchema;
  /** @deprecated use `V2ReadTriggerResponse$Outbound` instead. */
  export type Outbound = V2ReadTriggerResponse$Outbound;
}
