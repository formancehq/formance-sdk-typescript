/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PaymentStatus,
  PaymentStatus$inboundSchema,
  PaymentStatus$outboundSchema,
} from "./paymentstatus.js";

export type PaymentAdjustmentRaw = {};

export type PaymentAdjustment = {
  amount: bigint;
  createdAt: Date;
  raw: PaymentAdjustmentRaw;
  reference: string;
  status: PaymentStatus;
};

/** @internal */
export const PaymentAdjustmentRaw$inboundSchema: z.ZodType<
  PaymentAdjustmentRaw,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PaymentAdjustmentRaw$Outbound = {};

/** @internal */
export const PaymentAdjustmentRaw$outboundSchema: z.ZodType<
  PaymentAdjustmentRaw$Outbound,
  z.ZodTypeDef,
  PaymentAdjustmentRaw
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentAdjustmentRaw$ {
  /** @deprecated use `PaymentAdjustmentRaw$inboundSchema` instead. */
  export const inboundSchema = PaymentAdjustmentRaw$inboundSchema;
  /** @deprecated use `PaymentAdjustmentRaw$outboundSchema` instead. */
  export const outboundSchema = PaymentAdjustmentRaw$outboundSchema;
  /** @deprecated use `PaymentAdjustmentRaw$Outbound` instead. */
  export type Outbound = PaymentAdjustmentRaw$Outbound;
}

export function paymentAdjustmentRawToJSON(
  paymentAdjustmentRaw: PaymentAdjustmentRaw,
): string {
  return JSON.stringify(
    PaymentAdjustmentRaw$outboundSchema.parse(paymentAdjustmentRaw),
  );
}

export function paymentAdjustmentRawFromJSON(
  jsonString: string,
): SafeParseResult<PaymentAdjustmentRaw, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentAdjustmentRaw$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentAdjustmentRaw' from JSON`,
  );
}

/** @internal */
export const PaymentAdjustment$inboundSchema: z.ZodType<
  PaymentAdjustment,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number().transform(v => BigInt(v)),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  raw: z.lazy(() => PaymentAdjustmentRaw$inboundSchema),
  reference: z.string(),
  status: PaymentStatus$inboundSchema,
});

/** @internal */
export type PaymentAdjustment$Outbound = {
  amount: number;
  createdAt: string;
  raw: PaymentAdjustmentRaw$Outbound;
  reference: string;
  status: string;
};

/** @internal */
export const PaymentAdjustment$outboundSchema: z.ZodType<
  PaymentAdjustment$Outbound,
  z.ZodTypeDef,
  PaymentAdjustment
> = z.object({
  amount: z.bigint().transform(v => Number(v)),
  createdAt: z.date().transform(v => v.toISOString()),
  raw: z.lazy(() => PaymentAdjustmentRaw$outboundSchema),
  reference: z.string(),
  status: PaymentStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentAdjustment$ {
  /** @deprecated use `PaymentAdjustment$inboundSchema` instead. */
  export const inboundSchema = PaymentAdjustment$inboundSchema;
  /** @deprecated use `PaymentAdjustment$outboundSchema` instead. */
  export const outboundSchema = PaymentAdjustment$outboundSchema;
  /** @deprecated use `PaymentAdjustment$Outbound` instead. */
  export type Outbound = PaymentAdjustment$Outbound;
}

export function paymentAdjustmentToJSON(
  paymentAdjustment: PaymentAdjustment,
): string {
  return JSON.stringify(
    PaymentAdjustment$outboundSchema.parse(paymentAdjustment),
  );
}

export function paymentAdjustmentFromJSON(
  jsonString: string,
): SafeParseResult<PaymentAdjustment, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentAdjustment$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentAdjustment' from JSON`,
  );
}
