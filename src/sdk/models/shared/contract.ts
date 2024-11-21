/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Expr = {};

export type Contract = {
  account?: string | undefined;
  expr: Expr;
};

/** @internal */
export const Expr$inboundSchema: z.ZodType<Expr, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Expr$Outbound = {};

/** @internal */
export const Expr$outboundSchema: z.ZodType<Expr$Outbound, z.ZodTypeDef, Expr> =
  z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Expr$ {
  /** @deprecated use `Expr$inboundSchema` instead. */
  export const inboundSchema = Expr$inboundSchema;
  /** @deprecated use `Expr$outboundSchema` instead. */
  export const outboundSchema = Expr$outboundSchema;
  /** @deprecated use `Expr$Outbound` instead. */
  export type Outbound = Expr$Outbound;
}

export function exprToJSON(expr: Expr): string {
  return JSON.stringify(Expr$outboundSchema.parse(expr));
}

export function exprFromJSON(
  jsonString: string,
): SafeParseResult<Expr, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Expr$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Expr' from JSON`,
  );
}

/** @internal */
export const Contract$inboundSchema: z.ZodType<
  Contract,
  z.ZodTypeDef,
  unknown
> = z.object({
  account: z.string().optional(),
  expr: z.lazy(() => Expr$inboundSchema),
});

/** @internal */
export type Contract$Outbound = {
  account?: string | undefined;
  expr: Expr$Outbound;
};

/** @internal */
export const Contract$outboundSchema: z.ZodType<
  Contract$Outbound,
  z.ZodTypeDef,
  Contract
> = z.object({
  account: z.string().optional(),
  expr: z.lazy(() => Expr$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Contract$ {
  /** @deprecated use `Contract$inboundSchema` instead. */
  export const inboundSchema = Contract$inboundSchema;
  /** @deprecated use `Contract$outboundSchema` instead. */
  export const outboundSchema = Contract$outboundSchema;
  /** @deprecated use `Contract$Outbound` instead. */
  export type Outbound = Contract$Outbound;
}

export function contractToJSON(contract: Contract): string {
  return JSON.stringify(Contract$outboundSchema.parse(contract));
}

export function contractFromJSON(
  jsonString: string,
): SafeParseResult<Contract, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Contract$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Contract' from JSON`,
  );
}
