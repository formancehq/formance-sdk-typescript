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

export type ExpandedDebitHold = {
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
   * Original amount on hold
   */
  originalAmount: bigint;
  /**
   * Remaining amount on hold
   */
  remaining: bigint;
  /**
   * The ID of the wallet the hold is associated with.
   */
  walletID: string;
};

/** @internal */
export const ExpandedDebitHold$inboundSchema: z.ZodType<
  ExpandedDebitHold,
  z.ZodTypeDef,
  unknown
> = z.object({
  asset: z.string(),
  description: z.string(),
  destination: Subject$inboundSchema.optional(),
  id: z.string(),
  metadata: z.record(z.string()),
  originalAmount: z.number().transform(v => BigInt(v)),
  remaining: z.number().transform(v => BigInt(v)),
  walletID: z.string(),
});

/** @internal */
export type ExpandedDebitHold$Outbound = {
  asset: string;
  description: string;
  destination?: Subject$Outbound | undefined;
  id: string;
  metadata: { [k: string]: string };
  originalAmount: number;
  remaining: number;
  walletID: string;
};

/** @internal */
export const ExpandedDebitHold$outboundSchema: z.ZodType<
  ExpandedDebitHold$Outbound,
  z.ZodTypeDef,
  ExpandedDebitHold
> = z.object({
  asset: z.string(),
  description: z.string(),
  destination: Subject$outboundSchema.optional(),
  id: z.string(),
  metadata: z.record(z.string()),
  originalAmount: z.bigint().transform(v => Number(v)),
  remaining: z.bigint().transform(v => Number(v)),
  walletID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExpandedDebitHold$ {
  /** @deprecated use `ExpandedDebitHold$inboundSchema` instead. */
  export const inboundSchema = ExpandedDebitHold$inboundSchema;
  /** @deprecated use `ExpandedDebitHold$outboundSchema` instead. */
  export const outboundSchema = ExpandedDebitHold$outboundSchema;
  /** @deprecated use `ExpandedDebitHold$Outbound` instead. */
  export type Outbound = ExpandedDebitHold$Outbound;
}

export function expandedDebitHoldToJSON(
  expandedDebitHold: ExpandedDebitHold,
): string {
  return JSON.stringify(
    ExpandedDebitHold$outboundSchema.parse(expandedDebitHold),
  );
}

export function expandedDebitHoldFromJSON(
  jsonString: string,
): SafeParseResult<ExpandedDebitHold, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ExpandedDebitHold$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ExpandedDebitHold' from JSON`,
  );
}
