/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Secret,
  Secret$inboundSchema,
  Secret$Outbound,
  Secret$outboundSchema,
} from "./secret.js";

export type CreateSecretResponse = {
  data?: Secret | undefined;
};

/** @internal */
export const CreateSecretResponse$inboundSchema: z.ZodType<
  CreateSecretResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: Secret$inboundSchema.optional(),
});

/** @internal */
export type CreateSecretResponse$Outbound = {
  data?: Secret$Outbound | undefined;
};

/** @internal */
export const CreateSecretResponse$outboundSchema: z.ZodType<
  CreateSecretResponse$Outbound,
  z.ZodTypeDef,
  CreateSecretResponse
> = z.object({
  data: Secret$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSecretResponse$ {
  /** @deprecated use `CreateSecretResponse$inboundSchema` instead. */
  export const inboundSchema = CreateSecretResponse$inboundSchema;
  /** @deprecated use `CreateSecretResponse$outboundSchema` instead. */
  export const outboundSchema = CreateSecretResponse$outboundSchema;
  /** @deprecated use `CreateSecretResponse$Outbound` instead. */
  export type Outbound = CreateSecretResponse$Outbound;
}

export function createSecretResponseToJSON(
  createSecretResponse: CreateSecretResponse,
): string {
  return JSON.stringify(
    CreateSecretResponse$outboundSchema.parse(createSecretResponse),
  );
}

export function createSecretResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateSecretResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSecretResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSecretResponse' from JSON`,
  );
}
