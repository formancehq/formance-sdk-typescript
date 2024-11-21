/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V2PostTransaction,
  V2PostTransaction$inboundSchema,
  V2PostTransaction$Outbound,
  V2PostTransaction$outboundSchema,
} from "./v2posttransaction.js";

export type V2BulkElementCreateTransaction = {
  action: string;
  data?: V2PostTransaction | undefined;
  ik?: string | undefined;
};

/** @internal */
export const V2BulkElementCreateTransaction$inboundSchema: z.ZodType<
  V2BulkElementCreateTransaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  action: z.string(),
  data: V2PostTransaction$inboundSchema.optional(),
  ik: z.string().optional(),
});

/** @internal */
export type V2BulkElementCreateTransaction$Outbound = {
  action: string;
  data?: V2PostTransaction$Outbound | undefined;
  ik?: string | undefined;
};

/** @internal */
export const V2BulkElementCreateTransaction$outboundSchema: z.ZodType<
  V2BulkElementCreateTransaction$Outbound,
  z.ZodTypeDef,
  V2BulkElementCreateTransaction
> = z.object({
  action: z.string(),
  data: V2PostTransaction$outboundSchema.optional(),
  ik: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2BulkElementCreateTransaction$ {
  /** @deprecated use `V2BulkElementCreateTransaction$inboundSchema` instead. */
  export const inboundSchema = V2BulkElementCreateTransaction$inboundSchema;
  /** @deprecated use `V2BulkElementCreateTransaction$outboundSchema` instead. */
  export const outboundSchema = V2BulkElementCreateTransaction$outboundSchema;
  /** @deprecated use `V2BulkElementCreateTransaction$Outbound` instead. */
  export type Outbound = V2BulkElementCreateTransaction$Outbound;
}

export function v2BulkElementCreateTransactionToJSON(
  v2BulkElementCreateTransaction: V2BulkElementCreateTransaction,
): string {
  return JSON.stringify(
    V2BulkElementCreateTransaction$outboundSchema.parse(
      v2BulkElementCreateTransaction,
    ),
  );
}

export function v2BulkElementCreateTransactionFromJSON(
  jsonString: string,
): SafeParseResult<V2BulkElementCreateTransaction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2BulkElementCreateTransaction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2BulkElementCreateTransaction' from JSON`,
  );
}
