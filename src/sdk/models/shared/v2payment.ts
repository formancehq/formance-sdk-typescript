/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  V2Connector,
  V2Connector$inboundSchema,
  V2Connector$outboundSchema,
} from "./v2connector.js";
import {
  V2PaymentAdjustment,
  V2PaymentAdjustment$inboundSchema,
  V2PaymentAdjustment$Outbound,
  V2PaymentAdjustment$outboundSchema,
} from "./v2paymentadjustment.js";
import {
  V2PaymentMetadata,
  V2PaymentMetadata$inboundSchema,
  V2PaymentMetadata$Outbound,
  V2PaymentMetadata$outboundSchema,
} from "./v2paymentmetadata.js";
import {
  V2PaymentStatus,
  V2PaymentStatus$inboundSchema,
  V2PaymentStatus$outboundSchema,
} from "./v2paymentstatus.js";

export type V2PaymentRaw = {};

export enum Scheme {
  Visa = "visa",
  Mastercard = "mastercard",
  Amex = "amex",
  Diners = "diners",
  Discover = "discover",
  Jcb = "jcb",
  Unionpay = "unionpay",
  SepaDebit = "sepa debit",
  SepaCredit = "sepa credit",
  Sepa = "sepa",
  ApplePay = "apple pay",
  GooglePay = "google pay",
  A2a = "a2a",
  AchDebit = "ach debit",
  Ach = "ach",
  Rtp = "rtp",
  Unknown = "unknown",
  Other = "other",
}

export enum V2PaymentType {
  PayIn = "PAY-IN",
  Payout = "PAYOUT",
  Transfer = "TRANSFER",
  Other = "OTHER",
}

export type V2Payment = {
  adjustments: Array<V2PaymentAdjustment>;
  asset: string;
  connectorID: string;
  createdAt: Date;
  destinationAccountID: string;
  id: string;
  initialAmount: bigint;
  metadata: V2PaymentMetadata | null;
  provider?: V2Connector | undefined;
  raw: V2PaymentRaw | null;
  reference: string;
  scheme: Scheme;
  sourceAccountID: string;
  status: V2PaymentStatus;
  type: V2PaymentType;
};

/** @internal */
export const V2PaymentRaw$inboundSchema: z.ZodType<
  V2PaymentRaw,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type V2PaymentRaw$Outbound = {};

/** @internal */
export const V2PaymentRaw$outboundSchema: z.ZodType<
  V2PaymentRaw$Outbound,
  z.ZodTypeDef,
  V2PaymentRaw
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2PaymentRaw$ {
  /** @deprecated use `V2PaymentRaw$inboundSchema` instead. */
  export const inboundSchema = V2PaymentRaw$inboundSchema;
  /** @deprecated use `V2PaymentRaw$outboundSchema` instead. */
  export const outboundSchema = V2PaymentRaw$outboundSchema;
  /** @deprecated use `V2PaymentRaw$Outbound` instead. */
  export type Outbound = V2PaymentRaw$Outbound;
}

/** @internal */
export const Scheme$inboundSchema: z.ZodNativeEnum<typeof Scheme> = z
  .nativeEnum(Scheme);

/** @internal */
export const Scheme$outboundSchema: z.ZodNativeEnum<typeof Scheme> =
  Scheme$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Scheme$ {
  /** @deprecated use `Scheme$inboundSchema` instead. */
  export const inboundSchema = Scheme$inboundSchema;
  /** @deprecated use `Scheme$outboundSchema` instead. */
  export const outboundSchema = Scheme$outboundSchema;
}

/** @internal */
export const V2PaymentType$inboundSchema: z.ZodNativeEnum<
  typeof V2PaymentType
> = z.nativeEnum(V2PaymentType);

/** @internal */
export const V2PaymentType$outboundSchema: z.ZodNativeEnum<
  typeof V2PaymentType
> = V2PaymentType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2PaymentType$ {
  /** @deprecated use `V2PaymentType$inboundSchema` instead. */
  export const inboundSchema = V2PaymentType$inboundSchema;
  /** @deprecated use `V2PaymentType$outboundSchema` instead. */
  export const outboundSchema = V2PaymentType$outboundSchema;
}

/** @internal */
export const V2Payment$inboundSchema: z.ZodType<
  V2Payment,
  z.ZodTypeDef,
  unknown
> = z.object({
  adjustments: z.array(V2PaymentAdjustment$inboundSchema),
  asset: z.string(),
  connectorID: z.string(),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  destinationAccountID: z.string(),
  id: z.string(),
  initialAmount: z.number().transform(v => BigInt(v)),
  metadata: z.nullable(V2PaymentMetadata$inboundSchema),
  provider: V2Connector$inboundSchema.optional(),
  raw: z.nullable(z.lazy(() => V2PaymentRaw$inboundSchema)),
  reference: z.string(),
  scheme: Scheme$inboundSchema,
  sourceAccountID: z.string(),
  status: V2PaymentStatus$inboundSchema,
  type: V2PaymentType$inboundSchema,
});

/** @internal */
export type V2Payment$Outbound = {
  adjustments: Array<V2PaymentAdjustment$Outbound>;
  asset: string;
  connectorID: string;
  createdAt: string;
  destinationAccountID: string;
  id: string;
  initialAmount: number;
  metadata: V2PaymentMetadata$Outbound | null;
  provider?: string | undefined;
  raw: V2PaymentRaw$Outbound | null;
  reference: string;
  scheme: string;
  sourceAccountID: string;
  status: string;
  type: string;
};

/** @internal */
export const V2Payment$outboundSchema: z.ZodType<
  V2Payment$Outbound,
  z.ZodTypeDef,
  V2Payment
> = z.object({
  adjustments: z.array(V2PaymentAdjustment$outboundSchema),
  asset: z.string(),
  connectorID: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  destinationAccountID: z.string(),
  id: z.string(),
  initialAmount: z.bigint().transform(v => Number(v)),
  metadata: z.nullable(V2PaymentMetadata$outboundSchema),
  provider: V2Connector$outboundSchema.optional(),
  raw: z.nullable(z.lazy(() => V2PaymentRaw$outboundSchema)),
  reference: z.string(),
  scheme: Scheme$outboundSchema,
  sourceAccountID: z.string(),
  status: V2PaymentStatus$outboundSchema,
  type: V2PaymentType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2Payment$ {
  /** @deprecated use `V2Payment$inboundSchema` instead. */
  export const inboundSchema = V2Payment$inboundSchema;
  /** @deprecated use `V2Payment$outboundSchema` instead. */
  export const outboundSchema = V2Payment$outboundSchema;
  /** @deprecated use `V2Payment$Outbound` instead. */
  export type Outbound = V2Payment$Outbound;
}
