/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Reconciliation = {
  createdAt: Date;
  driftBalances: { [k: string]: bigint };
  error?: string | undefined;
  id: string;
  ledgerBalances: { [k: string]: bigint };
  paymentsBalances: { [k: string]: bigint };
  policyID: string;
  reconciledAtLedger: Date;
  reconciledAtPayments: Date;
  status: string;
};

/** @internal */
export const Reconciliation$inboundSchema: z.ZodType<
  Reconciliation,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  driftBalances: z.record(z.number().transform(v => BigInt(v))),
  error: z.string().optional(),
  id: z.string(),
  ledgerBalances: z.record(z.number().transform(v => BigInt(v))),
  paymentsBalances: z.record(z.number().transform(v => BigInt(v))),
  policyID: z.string(),
  reconciledAtLedger: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  reconciledAtPayments: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  status: z.string(),
});

/** @internal */
export type Reconciliation$Outbound = {
  createdAt: string;
  driftBalances: { [k: string]: number };
  error?: string | undefined;
  id: string;
  ledgerBalances: { [k: string]: number };
  paymentsBalances: { [k: string]: number };
  policyID: string;
  reconciledAtLedger: string;
  reconciledAtPayments: string;
  status: string;
};

/** @internal */
export const Reconciliation$outboundSchema: z.ZodType<
  Reconciliation$Outbound,
  z.ZodTypeDef,
  Reconciliation
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  driftBalances: z.record(z.bigint().transform(v => Number(v))),
  error: z.string().optional(),
  id: z.string(),
  ledgerBalances: z.record(z.bigint().transform(v => Number(v))),
  paymentsBalances: z.record(z.bigint().transform(v => Number(v))),
  policyID: z.string(),
  reconciledAtLedger: z.date().transform(v => v.toISOString()),
  reconciledAtPayments: z.date().transform(v => v.toISOString()),
  status: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Reconciliation$ {
  /** @deprecated use `Reconciliation$inboundSchema` instead. */
  export const inboundSchema = Reconciliation$inboundSchema;
  /** @deprecated use `Reconciliation$outboundSchema` instead. */
  export const outboundSchema = Reconciliation$outboundSchema;
  /** @deprecated use `Reconciliation$Outbound` instead. */
  export type Outbound = Reconciliation$Outbound;
}

export function reconciliationToJSON(reconciliation: Reconciliation): string {
  return JSON.stringify(Reconciliation$outboundSchema.parse(reconciliation));
}

export function reconciliationFromJSON(
  jsonString: string,
): SafeParseResult<Reconciliation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Reconciliation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Reconciliation' from JSON`,
  );
}
