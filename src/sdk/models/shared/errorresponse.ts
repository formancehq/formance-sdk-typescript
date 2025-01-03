/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ErrorsEnum,
  ErrorsEnum$inboundSchema,
  ErrorsEnum$outboundSchema,
} from "./errorsenum.js";

export type ErrorResponse = {
  details?: string | undefined;
  errorCode: ErrorsEnum;
  errorMessage: string;
};

/** @internal */
export const ErrorResponse$inboundSchema: z.ZodType<
  ErrorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  details: z.string().optional(),
  errorCode: ErrorsEnum$inboundSchema,
  errorMessage: z.string(),
});

/** @internal */
export type ErrorResponse$Outbound = {
  details?: string | undefined;
  errorCode: string;
  errorMessage: string;
};

/** @internal */
export const ErrorResponse$outboundSchema: z.ZodType<
  ErrorResponse$Outbound,
  z.ZodTypeDef,
  ErrorResponse
> = z.object({
  details: z.string().optional(),
  errorCode: ErrorsEnum$outboundSchema,
  errorMessage: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorResponse$ {
  /** @deprecated use `ErrorResponse$inboundSchema` instead. */
  export const inboundSchema = ErrorResponse$inboundSchema;
  /** @deprecated use `ErrorResponse$outboundSchema` instead. */
  export const outboundSchema = ErrorResponse$outboundSchema;
  /** @deprecated use `ErrorResponse$Outbound` instead. */
  export type Outbound = ErrorResponse$Outbound;
}

export function errorResponseToJSON(errorResponse: ErrorResponse): string {
  return JSON.stringify(ErrorResponse$outboundSchema.parse(errorResponse));
}

export function errorResponseFromJSON(
  jsonString: string,
): SafeParseResult<ErrorResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ErrorResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ErrorResponse' from JSON`,
  );
}
