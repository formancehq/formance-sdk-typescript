/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Subject,
  Subject$inboundSchema,
  Subject$Outbound,
  Subject$outboundSchema,
} from "./subject.js";

export type Hold = {
  asset: string;
  description: string;
  destination?: Subject | undefined;
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
export const Hold$inboundSchema: z.ZodType<Hold, z.ZodTypeDef, unknown> = z
  .object({
    asset: z.string(),
    description: z.string(),
    destination: Subject$inboundSchema.optional(),
    id: z.string(),
    metadata: z.record(z.string()),
    walletID: z.string(),
  });

/** @internal */
export type Hold$Outbound = {
  asset: string;
  description: string;
  destination?: Subject$Outbound | undefined;
  id: string;
  metadata: { [k: string]: string };
  walletID: string;
};

/** @internal */
export const Hold$outboundSchema: z.ZodType<Hold$Outbound, z.ZodTypeDef, Hold> =
  z.object({
    asset: z.string(),
    description: z.string(),
    destination: Subject$outboundSchema.optional(),
    id: z.string(),
    metadata: z.record(z.string()),
    walletID: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Hold$ {
  /** @deprecated use `Hold$inboundSchema` instead. */
  export const inboundSchema = Hold$inboundSchema;
  /** @deprecated use `Hold$outboundSchema` instead. */
  export const outboundSchema = Hold$outboundSchema;
  /** @deprecated use `Hold$Outbound` instead. */
  export type Outbound = Hold$Outbound;
}

export function holdToJSON(hold: Hold): string {
  return JSON.stringify(Hold$outboundSchema.parse(hold));
}

export function holdFromJSON(
  jsonString: string,
): SafeParseResult<Hold, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Hold$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Hold' from JSON`,
  );
}
