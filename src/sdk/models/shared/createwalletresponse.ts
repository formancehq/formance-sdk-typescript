/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Wallet,
  Wallet$inboundSchema,
  Wallet$Outbound,
  Wallet$outboundSchema,
} from "./wallet.js";

export type CreateWalletResponse = {
  data: Wallet;
};

/** @internal */
export const CreateWalletResponse$inboundSchema: z.ZodType<
  CreateWalletResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: Wallet$inboundSchema,
});

/** @internal */
export type CreateWalletResponse$Outbound = {
  data: Wallet$Outbound;
};

/** @internal */
export const CreateWalletResponse$outboundSchema: z.ZodType<
  CreateWalletResponse$Outbound,
  z.ZodTypeDef,
  CreateWalletResponse
> = z.object({
  data: Wallet$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWalletResponse$ {
  /** @deprecated use `CreateWalletResponse$inboundSchema` instead. */
  export const inboundSchema = CreateWalletResponse$inboundSchema;
  /** @deprecated use `CreateWalletResponse$outboundSchema` instead. */
  export const outboundSchema = CreateWalletResponse$outboundSchema;
  /** @deprecated use `CreateWalletResponse$Outbound` instead. */
  export type Outbound = CreateWalletResponse$Outbound;
}

export function createWalletResponseToJSON(
  createWalletResponse: CreateWalletResponse,
): string {
  return JSON.stringify(
    CreateWalletResponse$outboundSchema.parse(createWalletResponse),
  );
}

export function createWalletResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateWalletResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateWalletResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateWalletResponse' from JSON`,
  );
}
