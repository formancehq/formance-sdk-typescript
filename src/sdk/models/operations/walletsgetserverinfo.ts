/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type WalletsgetServerInfoResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * Server information
   */
  serverInfo?: shared.ServerInfo | undefined;
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
export const WalletsgetServerInfoResponse$inboundSchema: z.ZodType<
  WalletsgetServerInfoResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  ServerInfo: shared.ServerInfo$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "ServerInfo": "serverInfo",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type WalletsgetServerInfoResponse$Outbound = {
  ContentType: string;
  ServerInfo?: shared.ServerInfo$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const WalletsgetServerInfoResponse$outboundSchema: z.ZodType<
  WalletsgetServerInfoResponse$Outbound,
  z.ZodTypeDef,
  WalletsgetServerInfoResponse
> = z.object({
  contentType: z.string(),
  serverInfo: shared.ServerInfo$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    serverInfo: "ServerInfo",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsgetServerInfoResponse$ {
  /** @deprecated use `WalletsgetServerInfoResponse$inboundSchema` instead. */
  export const inboundSchema = WalletsgetServerInfoResponse$inboundSchema;
  /** @deprecated use `WalletsgetServerInfoResponse$outboundSchema` instead. */
  export const outboundSchema = WalletsgetServerInfoResponse$outboundSchema;
  /** @deprecated use `WalletsgetServerInfoResponse$Outbound` instead. */
  export type Outbound = WalletsgetServerInfoResponse$Outbound;
}

export function walletsgetServerInfoResponseToJSON(
  walletsgetServerInfoResponse: WalletsgetServerInfoResponse,
): string {
  return JSON.stringify(
    WalletsgetServerInfoResponse$outboundSchema.parse(
      walletsgetServerInfoResponse,
    ),
  );
}

export function walletsgetServerInfoResponseFromJSON(
  jsonString: string,
): SafeParseResult<WalletsgetServerInfoResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WalletsgetServerInfoResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WalletsgetServerInfoResponse' from JSON`,
  );
}
