/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V2ConfigInfoResponse = {
  server: string;
  version: string;
};

/** @internal */
export const V2ConfigInfoResponse$inboundSchema: z.ZodType<
  V2ConfigInfoResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  server: z.string(),
  version: z.string(),
});

/** @internal */
export type V2ConfigInfoResponse$Outbound = {
  server: string;
  version: string;
};

/** @internal */
export const V2ConfigInfoResponse$outboundSchema: z.ZodType<
  V2ConfigInfoResponse$Outbound,
  z.ZodTypeDef,
  V2ConfigInfoResponse
> = z.object({
  server: z.string(),
  version: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ConfigInfoResponse$ {
  /** @deprecated use `V2ConfigInfoResponse$inboundSchema` instead. */
  export const inboundSchema = V2ConfigInfoResponse$inboundSchema;
  /** @deprecated use `V2ConfigInfoResponse$outboundSchema` instead. */
  export const outboundSchema = V2ConfigInfoResponse$outboundSchema;
  /** @deprecated use `V2ConfigInfoResponse$Outbound` instead. */
  export type Outbound = V2ConfigInfoResponse$Outbound;
}

export function v2ConfigInfoResponseToJSON(
  v2ConfigInfoResponse: V2ConfigInfoResponse,
): string {
  return JSON.stringify(
    V2ConfigInfoResponse$outboundSchema.parse(v2ConfigInfoResponse),
  );
}

export function v2ConfigInfoResponseFromJSON(
  jsonString: string,
): SafeParseResult<V2ConfigInfoResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2ConfigInfoResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2ConfigInfoResponse' from JSON`,
  );
}
