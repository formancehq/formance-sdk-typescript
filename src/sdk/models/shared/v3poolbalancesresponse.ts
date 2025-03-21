/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V3PoolBalance,
  V3PoolBalance$inboundSchema,
  V3PoolBalance$Outbound,
  V3PoolBalance$outboundSchema,
} from "./v3poolbalance.js";

export type V3PoolBalancesResponse = {
  data: Array<V3PoolBalance>;
};

/** @internal */
export const V3PoolBalancesResponse$inboundSchema: z.ZodType<
  V3PoolBalancesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(V3PoolBalance$inboundSchema),
});

/** @internal */
export type V3PoolBalancesResponse$Outbound = {
  data: Array<V3PoolBalance$Outbound>;
};

/** @internal */
export const V3PoolBalancesResponse$outboundSchema: z.ZodType<
  V3PoolBalancesResponse$Outbound,
  z.ZodTypeDef,
  V3PoolBalancesResponse
> = z.object({
  data: z.array(V3PoolBalance$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3PoolBalancesResponse$ {
  /** @deprecated use `V3PoolBalancesResponse$inboundSchema` instead. */
  export const inboundSchema = V3PoolBalancesResponse$inboundSchema;
  /** @deprecated use `V3PoolBalancesResponse$outboundSchema` instead. */
  export const outboundSchema = V3PoolBalancesResponse$outboundSchema;
  /** @deprecated use `V3PoolBalancesResponse$Outbound` instead. */
  export type Outbound = V3PoolBalancesResponse$Outbound;
}

export function v3PoolBalancesResponseToJSON(
  v3PoolBalancesResponse: V3PoolBalancesResponse,
): string {
  return JSON.stringify(
    V3PoolBalancesResponse$outboundSchema.parse(v3PoolBalancesResponse),
  );
}

export function v3PoolBalancesResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3PoolBalancesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3PoolBalancesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3PoolBalancesResponse' from JSON`,
  );
}
