/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ReadClientRequest = {
  /**
   * Client ID
   */
  clientId: string;
};

export type ReadClientResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * Retrieved client
   */
  readClientResponse?: shared.ReadClientResponse | undefined;
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
export const ReadClientRequest$inboundSchema: z.ZodType<
  ReadClientRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  clientId: z.string(),
});

/** @internal */
export type ReadClientRequest$Outbound = {
  clientId: string;
};

/** @internal */
export const ReadClientRequest$outboundSchema: z.ZodType<
  ReadClientRequest$Outbound,
  z.ZodTypeDef,
  ReadClientRequest
> = z.object({
  clientId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadClientRequest$ {
  /** @deprecated use `ReadClientRequest$inboundSchema` instead. */
  export const inboundSchema = ReadClientRequest$inboundSchema;
  /** @deprecated use `ReadClientRequest$outboundSchema` instead. */
  export const outboundSchema = ReadClientRequest$outboundSchema;
  /** @deprecated use `ReadClientRequest$Outbound` instead. */
  export type Outbound = ReadClientRequest$Outbound;
}

export function readClientRequestToJSON(
  readClientRequest: ReadClientRequest,
): string {
  return JSON.stringify(
    ReadClientRequest$outboundSchema.parse(readClientRequest),
  );
}

export function readClientRequestFromJSON(
  jsonString: string,
): SafeParseResult<ReadClientRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadClientRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadClientRequest' from JSON`,
  );
}

/** @internal */
export const ReadClientResponse$inboundSchema: z.ZodType<
  ReadClientResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  ReadClientResponse: shared.ReadClientResponse$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "ReadClientResponse": "readClientResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ReadClientResponse$Outbound = {
  ContentType: string;
  ReadClientResponse?: shared.ReadClientResponse$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const ReadClientResponse$outboundSchema: z.ZodType<
  ReadClientResponse$Outbound,
  z.ZodTypeDef,
  ReadClientResponse
> = z.object({
  contentType: z.string(),
  readClientResponse: shared.ReadClientResponse$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    readClientResponse: "ReadClientResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadClientResponse$ {
  /** @deprecated use `ReadClientResponse$inboundSchema` instead. */
  export const inboundSchema = ReadClientResponse$inboundSchema;
  /** @deprecated use `ReadClientResponse$outboundSchema` instead. */
  export const outboundSchema = ReadClientResponse$outboundSchema;
  /** @deprecated use `ReadClientResponse$Outbound` instead. */
  export type Outbound = ReadClientResponse$Outbound;
}

export function readClientResponseToJSON(
  readClientResponse: ReadClientResponse,
): string {
  return JSON.stringify(
    ReadClientResponse$outboundSchema.parse(readClientResponse),
  );
}

export function readClientResponseFromJSON(
  jsonString: string,
): SafeParseResult<ReadClientResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadClientResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadClientResponse' from JSON`,
  );
}
