/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Stats,
  Stats$inboundSchema,
  Stats$Outbound,
  Stats$outboundSchema,
} from "./stats.js";

export type StatsResponse = {
  data: Stats;
};

/** @internal */
export const StatsResponse$inboundSchema: z.ZodType<
  StatsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: Stats$inboundSchema,
});

/** @internal */
export type StatsResponse$Outbound = {
  data: Stats$Outbound;
};

/** @internal */
export const StatsResponse$outboundSchema: z.ZodType<
  StatsResponse$Outbound,
  z.ZodTypeDef,
  StatsResponse
> = z.object({
  data: Stats$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StatsResponse$ {
  /** @deprecated use `StatsResponse$inboundSchema` instead. */
  export const inboundSchema = StatsResponse$inboundSchema;
  /** @deprecated use `StatsResponse$outboundSchema` instead. */
  export const outboundSchema = StatsResponse$outboundSchema;
  /** @deprecated use `StatsResponse$Outbound` instead. */
  export type Outbound = StatsResponse$Outbound;
}

export function statsResponseToJSON(statsResponse: StatsResponse): string {
  return JSON.stringify(StatsResponse$outboundSchema.parse(statsResponse));
}

export function statsResponseFromJSON(
  jsonString: string,
): SafeParseResult<StatsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StatsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StatsResponse' from JSON`,
  );
}
