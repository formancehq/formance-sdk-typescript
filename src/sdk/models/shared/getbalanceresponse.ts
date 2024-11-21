/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BalanceWithAssets,
  BalanceWithAssets$inboundSchema,
  BalanceWithAssets$Outbound,
  BalanceWithAssets$outboundSchema,
} from "./balancewithassets.js";

export type GetBalanceResponse = {
  data: BalanceWithAssets;
};

/** @internal */
export const GetBalanceResponse$inboundSchema: z.ZodType<
  GetBalanceResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: BalanceWithAssets$inboundSchema,
});

/** @internal */
export type GetBalanceResponse$Outbound = {
  data: BalanceWithAssets$Outbound;
};

/** @internal */
export const GetBalanceResponse$outboundSchema: z.ZodType<
  GetBalanceResponse$Outbound,
  z.ZodTypeDef,
  GetBalanceResponse
> = z.object({
  data: BalanceWithAssets$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBalanceResponse$ {
  /** @deprecated use `GetBalanceResponse$inboundSchema` instead. */
  export const inboundSchema = GetBalanceResponse$inboundSchema;
  /** @deprecated use `GetBalanceResponse$outboundSchema` instead. */
  export const outboundSchema = GetBalanceResponse$outboundSchema;
  /** @deprecated use `GetBalanceResponse$Outbound` instead. */
  export type Outbound = GetBalanceResponse$Outbound;
}

export function getBalanceResponseToJSON(
  getBalanceResponse: GetBalanceResponse,
): string {
  return JSON.stringify(
    GetBalanceResponse$outboundSchema.parse(getBalanceResponse),
  );
}

export function getBalanceResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetBalanceResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBalanceResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBalanceResponse' from JSON`,
  );
}
