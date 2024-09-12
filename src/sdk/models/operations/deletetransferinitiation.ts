/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type DeleteTransferInitiationRequest = {
  /**
   * The transfer ID.
   */
  transferId: string;
};

export type DeleteTransferInitiationResponse = {
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
export const DeleteTransferInitiationRequest$inboundSchema: z.ZodType<
  DeleteTransferInitiationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  transferId: z.string(),
});

/** @internal */
export type DeleteTransferInitiationRequest$Outbound = {
  transferId: string;
};

/** @internal */
export const DeleteTransferInitiationRequest$outboundSchema: z.ZodType<
  DeleteTransferInitiationRequest$Outbound,
  z.ZodTypeDef,
  DeleteTransferInitiationRequest
> = z.object({
  transferId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteTransferInitiationRequest$ {
  /** @deprecated use `DeleteTransferInitiationRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteTransferInitiationRequest$inboundSchema;
  /** @deprecated use `DeleteTransferInitiationRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteTransferInitiationRequest$outboundSchema;
  /** @deprecated use `DeleteTransferInitiationRequest$Outbound` instead. */
  export type Outbound = DeleteTransferInitiationRequest$Outbound;
}

/** @internal */
export const DeleteTransferInitiationResponse$inboundSchema: z.ZodType<
  DeleteTransferInitiationResponse,
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
export type DeleteTransferInitiationResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const DeleteTransferInitiationResponse$outboundSchema: z.ZodType<
  DeleteTransferInitiationResponse$Outbound,
  z.ZodTypeDef,
  DeleteTransferInitiationResponse
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
export namespace DeleteTransferInitiationResponse$ {
  /** @deprecated use `DeleteTransferInitiationResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteTransferInitiationResponse$inboundSchema;
  /** @deprecated use `DeleteTransferInitiationResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteTransferInitiationResponse$outboundSchema;
  /** @deprecated use `DeleteTransferInitiationResponse$Outbound` instead. */
  export type Outbound = DeleteTransferInitiationResponse$Outbound;
}
