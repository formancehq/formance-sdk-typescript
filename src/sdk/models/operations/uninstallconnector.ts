/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UninstallConnectorRequest = {
  /**
   * The name of the connector.
   */
  connector: shared.Connector;
};

export type UninstallConnectorResponse = {
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
export const UninstallConnectorRequest$inboundSchema: z.ZodType<
  UninstallConnectorRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connector: shared.Connector$inboundSchema,
});

/** @internal */
export type UninstallConnectorRequest$Outbound = {
  connector: string;
};

/** @internal */
export const UninstallConnectorRequest$outboundSchema: z.ZodType<
  UninstallConnectorRequest$Outbound,
  z.ZodTypeDef,
  UninstallConnectorRequest
> = z.object({
  connector: shared.Connector$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UninstallConnectorRequest$ {
  /** @deprecated use `UninstallConnectorRequest$inboundSchema` instead. */
  export const inboundSchema = UninstallConnectorRequest$inboundSchema;
  /** @deprecated use `UninstallConnectorRequest$outboundSchema` instead. */
  export const outboundSchema = UninstallConnectorRequest$outboundSchema;
  /** @deprecated use `UninstallConnectorRequest$Outbound` instead. */
  export type Outbound = UninstallConnectorRequest$Outbound;
}

/** @internal */
export const UninstallConnectorResponse$inboundSchema: z.ZodType<
  UninstallConnectorResponse,
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
export type UninstallConnectorResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const UninstallConnectorResponse$outboundSchema: z.ZodType<
  UninstallConnectorResponse$Outbound,
  z.ZodTypeDef,
  UninstallConnectorResponse
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
export namespace UninstallConnectorResponse$ {
  /** @deprecated use `UninstallConnectorResponse$inboundSchema` instead. */
  export const inboundSchema = UninstallConnectorResponse$inboundSchema;
  /** @deprecated use `UninstallConnectorResponse$outboundSchema` instead. */
  export const outboundSchema = UninstallConnectorResponse$outboundSchema;
  /** @deprecated use `UninstallConnectorResponse$Outbound` instead. */
  export type Outbound = UninstallConnectorResponse$Outbound;
}
