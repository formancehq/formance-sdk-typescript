/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type UninstallConnectorV1Request = {
  /**
   * The name of the connector.
   */
  connector: shared.Connector;
  /**
   * The connector ID.
   */
  connectorId: string;
};

export type UninstallConnectorV1Response = {
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
export const UninstallConnectorV1Request$inboundSchema: z.ZodType<
  UninstallConnectorV1Request,
  z.ZodTypeDef,
  unknown
> = z.object({
  connector: shared.Connector$inboundSchema,
  connectorId: z.string(),
});

/** @internal */
export type UninstallConnectorV1Request$Outbound = {
  connector: string;
  connectorId: string;
};

/** @internal */
export const UninstallConnectorV1Request$outboundSchema: z.ZodType<
  UninstallConnectorV1Request$Outbound,
  z.ZodTypeDef,
  UninstallConnectorV1Request
> = z.object({
  connector: shared.Connector$outboundSchema,
  connectorId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UninstallConnectorV1Request$ {
  /** @deprecated use `UninstallConnectorV1Request$inboundSchema` instead. */
  export const inboundSchema = UninstallConnectorV1Request$inboundSchema;
  /** @deprecated use `UninstallConnectorV1Request$outboundSchema` instead. */
  export const outboundSchema = UninstallConnectorV1Request$outboundSchema;
  /** @deprecated use `UninstallConnectorV1Request$Outbound` instead. */
  export type Outbound = UninstallConnectorV1Request$Outbound;
}

export function uninstallConnectorV1RequestToJSON(
  uninstallConnectorV1Request: UninstallConnectorV1Request,
): string {
  return JSON.stringify(
    UninstallConnectorV1Request$outboundSchema.parse(
      uninstallConnectorV1Request,
    ),
  );
}

export function uninstallConnectorV1RequestFromJSON(
  jsonString: string,
): SafeParseResult<UninstallConnectorV1Request, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UninstallConnectorV1Request$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UninstallConnectorV1Request' from JSON`,
  );
}

/** @internal */
export const UninstallConnectorV1Response$inboundSchema: z.ZodType<
  UninstallConnectorV1Response,
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
export type UninstallConnectorV1Response$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const UninstallConnectorV1Response$outboundSchema: z.ZodType<
  UninstallConnectorV1Response$Outbound,
  z.ZodTypeDef,
  UninstallConnectorV1Response
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
export namespace UninstallConnectorV1Response$ {
  /** @deprecated use `UninstallConnectorV1Response$inboundSchema` instead. */
  export const inboundSchema = UninstallConnectorV1Response$inboundSchema;
  /** @deprecated use `UninstallConnectorV1Response$outboundSchema` instead. */
  export const outboundSchema = UninstallConnectorV1Response$outboundSchema;
  /** @deprecated use `UninstallConnectorV1Response$Outbound` instead. */
  export type Outbound = UninstallConnectorV1Response$Outbound;
}

export function uninstallConnectorV1ResponseToJSON(
  uninstallConnectorV1Response: UninstallConnectorV1Response,
): string {
  return JSON.stringify(
    UninstallConnectorV1Response$outboundSchema.parse(
      uninstallConnectorV1Response,
    ),
  );
}

export function uninstallConnectorV1ResponseFromJSON(
  jsonString: string,
): SafeParseResult<UninstallConnectorV1Response, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UninstallConnectorV1Response$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UninstallConnectorV1Response' from JSON`,
  );
}
