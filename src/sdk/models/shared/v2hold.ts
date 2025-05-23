/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V2Subject,
  V2Subject$inboundSchema,
  V2Subject$Outbound,
  V2Subject$outboundSchema,
} from "./v2subject.js";

export type V2Hold = {
  description: string;
  destination?: V2Subject | undefined;
  /**
   * The unique ID of the hold.
   */
  id: string;
  /**
   * Metadata associated with the hold.
   */
  metadata: { [k: string]: string };
  /**
   * The ID of the wallet the hold is associated with.
   */
  walletID: string;
};

/** @internal */
export const V2Hold$inboundSchema: z.ZodType<V2Hold, z.ZodTypeDef, unknown> = z
  .object({
    description: z.string(),
    destination: V2Subject$inboundSchema.optional(),
    id: z.string(),
    metadata: z.record(z.string()),
    walletID: z.string(),
  });

/** @internal */
export type V2Hold$Outbound = {
  description: string;
  destination?: V2Subject$Outbound | undefined;
  id: string;
  metadata: { [k: string]: string };
  walletID: string;
};

/** @internal */
export const V2Hold$outboundSchema: z.ZodType<
  V2Hold$Outbound,
  z.ZodTypeDef,
  V2Hold
> = z.object({
  description: z.string(),
  destination: V2Subject$outboundSchema.optional(),
  id: z.string(),
  metadata: z.record(z.string()),
  walletID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2Hold$ {
  /** @deprecated use `V2Hold$inboundSchema` instead. */
  export const inboundSchema = V2Hold$inboundSchema;
  /** @deprecated use `V2Hold$outboundSchema` instead. */
  export const outboundSchema = V2Hold$outboundSchema;
  /** @deprecated use `V2Hold$Outbound` instead. */
  export type Outbound = V2Hold$Outbound;
}

export function v2HoldToJSON(v2Hold: V2Hold): string {
  return JSON.stringify(V2Hold$outboundSchema.parse(v2Hold));
}

export function v2HoldFromJSON(
  jsonString: string,
): SafeParseResult<V2Hold, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2Hold$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2Hold' from JSON`,
  );
}
