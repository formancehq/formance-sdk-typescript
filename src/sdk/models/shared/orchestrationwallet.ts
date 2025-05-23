/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type OrchestrationWallet = {
  createdAt: Date;
  /**
   * The unique ID of the wallet.
   */
  id: string;
  ledger: string;
  /**
   * Metadata associated with the wallet.
   */
  metadata: { [k: string]: string };
  name: string;
};

/** @internal */
export const OrchestrationWallet$inboundSchema: z.ZodType<
  OrchestrationWallet,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  id: z.string(),
  ledger: z.string(),
  metadata: z.record(z.string()),
  name: z.string(),
});

/** @internal */
export type OrchestrationWallet$Outbound = {
  createdAt: string;
  id: string;
  ledger: string;
  metadata: { [k: string]: string };
  name: string;
};

/** @internal */
export const OrchestrationWallet$outboundSchema: z.ZodType<
  OrchestrationWallet$Outbound,
  z.ZodTypeDef,
  OrchestrationWallet
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  id: z.string(),
  ledger: z.string(),
  metadata: z.record(z.string()),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrchestrationWallet$ {
  /** @deprecated use `OrchestrationWallet$inboundSchema` instead. */
  export const inboundSchema = OrchestrationWallet$inboundSchema;
  /** @deprecated use `OrchestrationWallet$outboundSchema` instead. */
  export const outboundSchema = OrchestrationWallet$outboundSchema;
  /** @deprecated use `OrchestrationWallet$Outbound` instead. */
  export type Outbound = OrchestrationWallet$Outbound;
}

export function orchestrationWalletToJSON(
  orchestrationWallet: OrchestrationWallet,
): string {
  return JSON.stringify(
    OrchestrationWallet$outboundSchema.parse(orchestrationWallet),
  );
}

export function orchestrationWalletFromJSON(
  jsonString: string,
): SafeParseResult<OrchestrationWallet, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrchestrationWallet$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrchestrationWallet' from JSON`,
  );
}
