/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Connector,
  Connector$inboundSchema,
  Connector$outboundSchema,
} from "./connector.js";
import {
  PaymentAdjustment,
  PaymentAdjustment$inboundSchema,
  PaymentAdjustment$Outbound,
  PaymentAdjustment$outboundSchema,
} from "./paymentadjustment.js";
import {
  PaymentScheme,
  PaymentScheme$inboundSchema,
  PaymentScheme$outboundSchema,
} from "./paymentscheme.js";
import {
  PaymentStatus,
  PaymentStatus$inboundSchema,
  PaymentStatus$outboundSchema,
} from "./paymentstatus.js";
import {
  PaymentType,
  PaymentType$inboundSchema,
  PaymentType$outboundSchema,
} from "./paymenttype.js";

export type Raw = {};

export type Payment = {
  adjustments: Array<PaymentAdjustment>;
  amount: bigint;
  asset: string;
  connectorID: string;
  createdAt: Date;
  destinationAccountID: string;
  id: string;
  initialAmount: bigint;
  metadata: { [k: string]: string } | null;
  provider?: Connector | undefined;
  raw: Raw | null;
  reference: string;
  scheme: PaymentScheme;
  sourceAccountID: string;
  status: PaymentStatus;
  type: PaymentType;
};

/** @internal */
export const Raw$inboundSchema: z.ZodType<Raw, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Raw$Outbound = {};

/** @internal */
export const Raw$outboundSchema: z.ZodType<Raw$Outbound, z.ZodTypeDef, Raw> = z
  .object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Raw$ {
  /** @deprecated use `Raw$inboundSchema` instead. */
  export const inboundSchema = Raw$inboundSchema;
  /** @deprecated use `Raw$outboundSchema` instead. */
  export const outboundSchema = Raw$outboundSchema;
  /** @deprecated use `Raw$Outbound` instead. */
  export type Outbound = Raw$Outbound;
}

export function rawToJSON(raw: Raw): string {
  return JSON.stringify(Raw$outboundSchema.parse(raw));
}

export function rawFromJSON(
  jsonString: string,
): SafeParseResult<Raw, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Raw$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Raw' from JSON`,
  );
}

/** @internal */
export const Payment$inboundSchema: z.ZodType<Payment, z.ZodTypeDef, unknown> =
  z.object({
    adjustments: z.array(PaymentAdjustment$inboundSchema),
    amount: z.number().transform(v => BigInt(v)),
    asset: z.string(),
    connectorID: z.string(),
    createdAt: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ),
    destinationAccountID: z.string(),
    id: z.string(),
    initialAmount: z.number().transform(v => BigInt(v)),
    metadata: z.nullable(z.record(z.string())),
    provider: Connector$inboundSchema.optional(),
    raw: z.nullable(z.lazy(() => Raw$inboundSchema)),
    reference: z.string(),
    scheme: PaymentScheme$inboundSchema,
    sourceAccountID: z.string(),
    status: PaymentStatus$inboundSchema,
    type: PaymentType$inboundSchema,
  });

/** @internal */
export type Payment$Outbound = {
  adjustments: Array<PaymentAdjustment$Outbound>;
  amount: number;
  asset: string;
  connectorID: string;
  createdAt: string;
  destinationAccountID: string;
  id: string;
  initialAmount: number;
  metadata: { [k: string]: string } | null;
  provider?: string | undefined;
  raw: Raw$Outbound | null;
  reference: string;
  scheme: string;
  sourceAccountID: string;
  status: string;
  type: string;
};

/** @internal */
export const Payment$outboundSchema: z.ZodType<
  Payment$Outbound,
  z.ZodTypeDef,
  Payment
> = z.object({
  adjustments: z.array(PaymentAdjustment$outboundSchema),
  amount: z.bigint().transform(v => Number(v)),
  asset: z.string(),
  connectorID: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  destinationAccountID: z.string(),
  id: z.string(),
  initialAmount: z.bigint().transform(v => Number(v)),
  metadata: z.nullable(z.record(z.string())),
  provider: Connector$outboundSchema.optional(),
  raw: z.nullable(z.lazy(() => Raw$outboundSchema)),
  reference: z.string(),
  scheme: PaymentScheme$outboundSchema,
  sourceAccountID: z.string(),
  status: PaymentStatus$outboundSchema,
  type: PaymentType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Payment$ {
  /** @deprecated use `Payment$inboundSchema` instead. */
  export const inboundSchema = Payment$inboundSchema;
  /** @deprecated use `Payment$outboundSchema` instead. */
  export const outboundSchema = Payment$outboundSchema;
  /** @deprecated use `Payment$Outbound` instead. */
  export type Outbound = Payment$Outbound;
}

export function paymentToJSON(payment: Payment): string {
  return JSON.stringify(Payment$outboundSchema.parse(payment));
}

export function paymentFromJSON(
  jsonString: string,
): SafeParseResult<Payment, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Payment$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Payment' from JSON`,
  );
}
