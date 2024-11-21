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

export type TransferInitiationPayments = {
  createdAt: Date;
  error: string;
  paymentID: string;
  status: TransferInitiationStatus;
};

/** @internal */
export const TransferInitiationPayments$inboundSchema: z.ZodType<
  TransferInitiationPayments,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  error: z.string(),
  paymentID: z.string(),
  status: TransferInitiationStatus$inboundSchema,
});

/** @internal */
export type TransferInitiationPayments$Outbound = {
  createdAt: string;
  error: string;
  paymentID: string;
  status: string;
};

/** @internal */
export const TransferInitiationPayments$outboundSchema: z.ZodType<
  TransferInitiationPayments$Outbound,
  z.ZodTypeDef,
  TransferInitiationPayments
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  error: z.string(),
  paymentID: z.string(),
  status: TransferInitiationStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransferInitiationPayments$ {
  /** @deprecated use `TransferInitiationPayments$inboundSchema` instead. */
  export const inboundSchema = TransferInitiationPayments$inboundSchema;
  /** @deprecated use `TransferInitiationPayments$outboundSchema` instead. */
  export const outboundSchema = TransferInitiationPayments$outboundSchema;
  /** @deprecated use `TransferInitiationPayments$Outbound` instead. */
  export type Outbound = TransferInitiationPayments$Outbound;
}

export function transferInitiationPaymentsToJSON(
  transferInitiationPayments: TransferInitiationPayments,
): string {
  return JSON.stringify(
    TransferInitiationPayments$outboundSchema.parse(transferInitiationPayments),
  );
}

export function transferInitiationPaymentsFromJSON(
  jsonString: string,
): SafeParseResult<TransferInitiationPayments, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TransferInitiationPayments$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TransferInitiationPayments' from JSON`,
  );
}
