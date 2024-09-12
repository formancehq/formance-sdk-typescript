/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type ReadConnectorConfigV1Request = {
  /**
   * The name of the connector.
   */
  connector: shared.Connector;
  /**
   * The connector ID.
   */
  connectorId: string;
};

export type ReadConnectorConfigV1Response = {
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
export const ReadConnectorConfigV1Request$inboundSchema: z.ZodType<
  ReadConnectorConfigV1Request,
  z.ZodTypeDef,
  unknown
> = z.object({
  connector: shared.Connector$inboundSchema,
  connectorId: z.string(),
});

/** @internal */
export type ReadConnectorConfigV1Request$Outbound = {
  connector: string;
  connectorId: string;
};

/** @internal */
export const ReadConnectorConfigV1Request$outboundSchema: z.ZodType<
  ReadConnectorConfigV1Request$Outbound,
  z.ZodTypeDef,
  ReadConnectorConfigV1Request
> = z.object({
  connector: shared.Connector$outboundSchema,
  connectorId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadConnectorConfigV1Request$ {
  /** @deprecated use `ReadConnectorConfigV1Request$inboundSchema` instead. */
  export const inboundSchema = ReadConnectorConfigV1Request$inboundSchema;
  /** @deprecated use `ReadConnectorConfigV1Request$outboundSchema` instead. */
  export const outboundSchema = ReadConnectorConfigV1Request$outboundSchema;
  /** @deprecated use `ReadConnectorConfigV1Request$Outbound` instead. */
  export type Outbound = ReadConnectorConfigV1Request$Outbound;
}

/** @internal */
export const ReadConnectorConfigV1Response$inboundSchema: z.ZodType<
  ReadConnectorConfigV1Response,
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
export type ReadConnectorConfigV1Response$Outbound = {
  ConnectorConfigResponse?: shared.ConnectorConfigResponse$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const ReadConnectorConfigV1Response$outboundSchema: z.ZodType<
  ReadConnectorConfigV1Response$Outbound,
  z.ZodTypeDef,
  ReadConnectorConfigV1Response
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
export namespace ReadConnectorConfigV1Response$ {
  /** @deprecated use `ReadConnectorConfigV1Response$inboundSchema` instead. */
  export const inboundSchema = ReadConnectorConfigV1Response$inboundSchema;
  /** @deprecated use `ReadConnectorConfigV1Response$outboundSchema` instead. */
  export const outboundSchema = ReadConnectorConfigV1Response$outboundSchema;
  /** @deprecated use `ReadConnectorConfigV1Response$Outbound` instead. */
  export type Outbound = ReadConnectorConfigV1Response$Outbound;
}
