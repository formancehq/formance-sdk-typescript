/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type OrchestrationPaymentMetadata = {
  key?: string | undefined;
};

/** @internal */
export const OrchestrationPaymentMetadata$inboundSchema: z.ZodType<
  OrchestrationPaymentMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string().optional(),
});

/** @internal */
export type OrchestrationPaymentMetadata$Outbound = {
  key?: string | undefined;
};

/** @internal */
export const OrchestrationPaymentMetadata$outboundSchema: z.ZodType<
  OrchestrationPaymentMetadata$Outbound,
  z.ZodTypeDef,
  OrchestrationPaymentMetadata
> = z.object({
  key: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrchestrationPaymentMetadata$ {
  /** @deprecated use `OrchestrationPaymentMetadata$inboundSchema` instead. */
  export const inboundSchema = OrchestrationPaymentMetadata$inboundSchema;
  /** @deprecated use `OrchestrationPaymentMetadata$outboundSchema` instead. */
  export const outboundSchema = OrchestrationPaymentMetadata$outboundSchema;
  /** @deprecated use `OrchestrationPaymentMetadata$Outbound` instead. */
  export type Outbound = OrchestrationPaymentMetadata$Outbound;
}

export function orchestrationPaymentMetadataToJSON(
  orchestrationPaymentMetadata: OrchestrationPaymentMetadata,
): string {
  return JSON.stringify(
    OrchestrationPaymentMetadata$outboundSchema.parse(
      orchestrationPaymentMetadata,
    ),
  );
}

export function orchestrationPaymentMetadataFromJSON(
  jsonString: string,
): SafeParseResult<OrchestrationPaymentMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrchestrationPaymentMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrchestrationPaymentMetadata' from JSON`,
  );
}
