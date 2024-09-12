/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type ReadConnectorConfigRequest = {
  /**
   * The name of the connector.
   */
  connector: shared.Connector;
};

export type ReadConnectorConfigResponse = {
  /**
   * OK
   */
  connectorConfigResponse?: shared.ConnectorConfigResponse | undefined;
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
export const ReadConnectorConfigRequest$inboundSchema: z.ZodType<
  ReadConnectorConfigRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connector: shared.Connector$inboundSchema,
});

/** @internal */
export type ReadConnectorConfigRequest$Outbound = {
  connector: string;
};

/** @internal */
export const ReadConnectorConfigRequest$outboundSchema: z.ZodType<
  ReadConnectorConfigRequest$Outbound,
  z.ZodTypeDef,
  ReadConnectorConfigRequest
> = z.object({
  connector: shared.Connector$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadConnectorConfigRequest$ {
  /** @deprecated use `ReadConnectorConfigRequest$inboundSchema` instead. */
  export const inboundSchema = ReadConnectorConfigRequest$inboundSchema;
  /** @deprecated use `ReadConnectorConfigRequest$outboundSchema` instead. */
  export const outboundSchema = ReadConnectorConfigRequest$outboundSchema;
  /** @deprecated use `ReadConnectorConfigRequest$Outbound` instead. */
  export type Outbound = ReadConnectorConfigRequest$Outbound;
}

/** @internal */
export const ReadConnectorConfigResponse$inboundSchema: z.ZodType<
  ReadConnectorConfigResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ConnectorConfigResponse: shared.ConnectorConfigResponse$inboundSchema
    .optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ConnectorConfigResponse": "connectorConfigResponse",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ReadConnectorConfigResponse$Outbound = {
  ConnectorConfigResponse?: shared.ConnectorConfigResponse$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const ReadConnectorConfigResponse$outboundSchema: z.ZodType<
  ReadConnectorConfigResponse$Outbound,
  z.ZodTypeDef,
  ReadConnectorConfigResponse
> = z.object({
  connectorConfigResponse: shared.ConnectorConfigResponse$outboundSchema
    .optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    connectorConfigResponse: "ConnectorConfigResponse",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadConnectorConfigResponse$ {
  /** @deprecated use `ReadConnectorConfigResponse$inboundSchema` instead. */
  export const inboundSchema = ReadConnectorConfigResponse$inboundSchema;
  /** @deprecated use `ReadConnectorConfigResponse$outboundSchema` instead. */
  export const outboundSchema = ReadConnectorConfigResponse$outboundSchema;
  /** @deprecated use `ReadConnectorConfigResponse$Outbound` instead. */
  export type Outbound = ReadConnectorConfigResponse$Outbound;
}
