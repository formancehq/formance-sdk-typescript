/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  AccountType,
  AccountType$inboundSchema,
  AccountType$outboundSchema,
} from "./accounttype.js";

export type PaymentsAccountRaw = {};

export type PaymentsAccount = {
  accountName: string;
  connectorID: string;
  createdAt: Date;
  defaultAsset: string;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  defaultCurrency: string;
  id: string;
  metadata: { [k: string]: string } | null;
  pools?: Array<string> | undefined;
  provider?: string | undefined;
  raw: PaymentsAccountRaw | null;
  reference: string;
  type: AccountType;
};

/** @internal */
export const PaymentsAccountRaw$inboundSchema: z.ZodType<
  PaymentsAccountRaw,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PaymentsAccountRaw$Outbound = {};

/** @internal */
export const PaymentsAccountRaw$outboundSchema: z.ZodType<
  PaymentsAccountRaw$Outbound,
  z.ZodTypeDef,
  PaymentsAccountRaw
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentsAccountRaw$ {
  /** @deprecated use `PaymentsAccountRaw$inboundSchema` instead. */
  export const inboundSchema = PaymentsAccountRaw$inboundSchema;
  /** @deprecated use `PaymentsAccountRaw$outboundSchema` instead. */
  export const outboundSchema = PaymentsAccountRaw$outboundSchema;
  /** @deprecated use `PaymentsAccountRaw$Outbound` instead. */
  export type Outbound = PaymentsAccountRaw$Outbound;
}

/** @internal */
export const PaymentsAccount$inboundSchema: z.ZodType<
  PaymentsAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountName: z.string(),
  connectorID: z.string(),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  defaultAsset: z.string(),
  defaultCurrency: z.string(),
  id: z.string(),
  metadata: z.nullable(z.record(z.string())),
  pools: z.array(z.string()).optional(),
  provider: z.string().optional(),
  raw: z.nullable(z.lazy(() => PaymentsAccountRaw$inboundSchema)),
  reference: z.string(),
  type: AccountType$inboundSchema,
});

/** @internal */
export type PaymentsAccount$Outbound = {
  accountName: string;
  connectorID: string;
  createdAt: string;
  defaultAsset: string;
  defaultCurrency: string;
  id: string;
  metadata: { [k: string]: string } | null;
  pools?: Array<string> | undefined;
  provider?: string | undefined;
  raw: PaymentsAccountRaw$Outbound | null;
  reference: string;
  type: string;
};

/** @internal */
export const PaymentsAccount$outboundSchema: z.ZodType<
  PaymentsAccount$Outbound,
  z.ZodTypeDef,
  PaymentsAccount
> = z.object({
  accountName: z.string(),
  connectorID: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  defaultAsset: z.string(),
  defaultCurrency: z.string(),
  id: z.string(),
  metadata: z.nullable(z.record(z.string())),
  pools: z.array(z.string()).optional(),
  provider: z.string().optional(),
  raw: z.nullable(z.lazy(() => PaymentsAccountRaw$outboundSchema)),
  reference: z.string(),
  type: AccountType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentsAccount$ {
  /** @deprecated use `PaymentsAccount$inboundSchema` instead. */
  export const inboundSchema = PaymentsAccount$inboundSchema;
  /** @deprecated use `PaymentsAccount$outboundSchema` instead. */
  export const outboundSchema = PaymentsAccount$outboundSchema;
  /** @deprecated use `PaymentsAccount$Outbound` instead. */
  export type Outbound = PaymentsAccount$Outbound;
}
