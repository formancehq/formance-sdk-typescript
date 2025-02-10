/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V3Pool,
  V3Pool$inboundSchema,
  V3Pool$Outbound,
  V3Pool$outboundSchema,
} from "./v3pool.js";

export type V3GetPoolResponse = {
  data: V3Pool;
};

/** @internal */
export const V3GetPoolResponse$inboundSchema: z.ZodType<
  V3GetPoolResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: V3Pool$inboundSchema,
});

/** @internal */
export type V3GetPoolResponse$Outbound = {
  data: V3Pool$Outbound;
};

/** @internal */
export const V3GetPoolResponse$outboundSchema: z.ZodType<
  V3GetPoolResponse$Outbound,
  z.ZodTypeDef,
  V3GetPoolResponse
> = z.object({
  data: V3Pool$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3GetPoolResponse$ {
  /** @deprecated use `V3GetPoolResponse$inboundSchema` instead. */
  export const inboundSchema = V3GetPoolResponse$inboundSchema;
  /** @deprecated use `V3GetPoolResponse$outboundSchema` instead. */
  export const outboundSchema = V3GetPoolResponse$outboundSchema;
  /** @deprecated use `V3GetPoolResponse$Outbound` instead. */
  export type Outbound = V3GetPoolResponse$Outbound;
}

export function v3GetPoolResponseToJSON(
  v3GetPoolResponse: V3GetPoolResponse,
): string {
  return JSON.stringify(
    V3GetPoolResponse$outboundSchema.parse(v3GetPoolResponse),
  );
}

export function v3GetPoolResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3GetPoolResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3GetPoolResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3GetPoolResponse' from JSON`,
  );
}
