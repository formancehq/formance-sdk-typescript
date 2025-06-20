/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TransferInitiationStatus,
  TransferInitiationStatus$inboundSchema,
  TransferInitiationStatus$outboundSchema,
} from "./transferinitiationstatus.js";

export type TransferInitiationAdjusments = {
  adjustmentID: string;
  createdAt: Date;
  error?: string | null | undefined;
  metadata?: { [k: string]: string } | null | undefined;
  status: TransferInitiationStatus;
};

/** @internal */
export const TransferInitiationAdjusments$inboundSchema: z.ZodType<
  TransferInitiationAdjusments,
  z.ZodTypeDef,
  unknown
> = z.object({
  adjustmentID: z.string(),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  error: z.nullable(z.string()).optional(),
  metadata: z.nullable(z.record(z.string())).optional(),
  status: TransferInitiationStatus$inboundSchema,
});

/** @internal */
export type TransferInitiationAdjusments$Outbound = {
  adjustmentID: string;
  createdAt: string;
  error?: string | null | undefined;
  metadata?: { [k: string]: string } | null | undefined;
  status: string;
};

/** @internal */
export const TransferInitiationAdjusments$outboundSchema: z.ZodType<
  TransferInitiationAdjusments$Outbound,
  z.ZodTypeDef,
  TransferInitiationAdjusments
> = z.object({
  adjustmentID: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  error: z.nullable(z.string()).optional(),
  metadata: z.nullable(z.record(z.string())).optional(),
  status: TransferInitiationStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransferInitiationAdjusments$ {
  /** @deprecated use `TransferInitiationAdjusments$inboundSchema` instead. */
  export const inboundSchema = TransferInitiationAdjusments$inboundSchema;
  /** @deprecated use `TransferInitiationAdjusments$outboundSchema` instead. */
  export const outboundSchema = TransferInitiationAdjusments$outboundSchema;
  /** @deprecated use `TransferInitiationAdjusments$Outbound` instead. */
  export type Outbound = TransferInitiationAdjusments$Outbound;
}

export function transferInitiationAdjusmentsToJSON(
  transferInitiationAdjusments: TransferInitiationAdjusments,
): string {
  return JSON.stringify(
    TransferInitiationAdjusments$outboundSchema.parse(
      transferInitiationAdjusments,
    ),
  );
}

export function transferInitiationAdjusmentsFromJSON(
  jsonString: string,
): SafeParseResult<TransferInitiationAdjusments, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TransferInitiationAdjusments$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TransferInitiationAdjusments' from JSON`,
  );
}
