/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ActivityAddAccountMetadata = {
  id: string;
  ledger: string;
  metadata: { [k: string]: string };
};

/** @internal */
export const ActivityAddAccountMetadata$inboundSchema: z.ZodType<
  ActivityAddAccountMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  ledger: z.string(),
  metadata: z.record(z.string()),
});

/** @internal */
export type ActivityAddAccountMetadata$Outbound = {
  id: string;
  ledger: string;
  metadata: { [k: string]: string };
};

/** @internal */
export const ActivityAddAccountMetadata$outboundSchema: z.ZodType<
  ActivityAddAccountMetadata$Outbound,
  z.ZodTypeDef,
  ActivityAddAccountMetadata
> = z.object({
  id: z.string(),
  ledger: z.string(),
  metadata: z.record(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivityAddAccountMetadata$ {
  /** @deprecated use `ActivityAddAccountMetadata$inboundSchema` instead. */
  export const inboundSchema = ActivityAddAccountMetadata$inboundSchema;
  /** @deprecated use `ActivityAddAccountMetadata$outboundSchema` instead. */
  export const outboundSchema = ActivityAddAccountMetadata$outboundSchema;
  /** @deprecated use `ActivityAddAccountMetadata$Outbound` instead. */
  export type Outbound = ActivityAddAccountMetadata$Outbound;
}
