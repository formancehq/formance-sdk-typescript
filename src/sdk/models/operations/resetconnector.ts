/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ResetConnectorRequest = {
  /**
   * The name of the connector.
   */
  connector: shared.Connector;
};

export type ResetConnectorResponse = {
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
export const ResetConnectorRequest$inboundSchema: z.ZodType<
  ResetConnectorRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connector: shared.Connector$inboundSchema,
});

/** @internal */
export type ResetConnectorRequest$Outbound = {
  connector: string;
};

/** @internal */
export const ResetConnectorRequest$outboundSchema: z.ZodType<
  ResetConnectorRequest$Outbound,
  z.ZodTypeDef,
  ResetConnectorRequest
> = z.object({
  connector: shared.Connector$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResetConnectorRequest$ {
  /** @deprecated use `ResetConnectorRequest$inboundSchema` instead. */
  export const inboundSchema = ResetConnectorRequest$inboundSchema;
  /** @deprecated use `ResetConnectorRequest$outboundSchema` instead. */
  export const outboundSchema = ResetConnectorRequest$outboundSchema;
  /** @deprecated use `ResetConnectorRequest$Outbound` instead. */
  export type Outbound = ResetConnectorRequest$Outbound;
}

export function resetConnectorRequestToJSON(
  resetConnectorRequest: ResetConnectorRequest,
): string {
  return JSON.stringify(
    ResetConnectorRequest$outboundSchema.parse(resetConnectorRequest),
  );
}

export function resetConnectorRequestFromJSON(
  jsonString: string,
): SafeParseResult<ResetConnectorRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ResetConnectorRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ResetConnectorRequest' from JSON`,
  );
}

/** @internal */
export const ResetConnectorResponse$inboundSchema: z.ZodType<
  ResetConnectorResponse,
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
export type ResetConnectorResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const ResetConnectorResponse$outboundSchema: z.ZodType<
  ResetConnectorResponse$Outbound,
  z.ZodTypeDef,
  ResetConnectorResponse
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
export namespace ResetConnectorResponse$ {
  /** @deprecated use `ResetConnectorResponse$inboundSchema` instead. */
  export const inboundSchema = ResetConnectorResponse$inboundSchema;
  /** @deprecated use `ResetConnectorResponse$outboundSchema` instead. */
  export const outboundSchema = ResetConnectorResponse$outboundSchema;
  /** @deprecated use `ResetConnectorResponse$Outbound` instead. */
  export type Outbound = ResetConnectorResponse$Outbound;
}

export function resetConnectorResponseToJSON(
  resetConnectorResponse: ResetConnectorResponse,
): string {
  return JSON.stringify(
    ResetConnectorResponse$outboundSchema.parse(resetConnectorResponse),
  );
}

export function resetConnectorResponseFromJSON(
  jsonString: string,
): SafeParseResult<ResetConnectorResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ResetConnectorResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ResetConnectorResponse' from JSON`,
  );
}
