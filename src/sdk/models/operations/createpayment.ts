/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreatePaymentResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * OK
   */
  paymentResponse?: shared.PaymentResponse | undefined;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
};

/** @internal */
export const CreatePaymentResponse$inboundSchema: z.ZodType<
  CreatePaymentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  PaymentResponse: shared.PaymentResponse$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "PaymentResponse": "paymentResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type CreatePaymentResponse$Outbound = {
  ContentType: string;
  PaymentResponse?: shared.PaymentResponse$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const CreatePaymentResponse$outboundSchema: z.ZodType<
  CreatePaymentResponse$Outbound,
  z.ZodTypeDef,
  CreatePaymentResponse
> = z.object({
  contentType: z.string(),
  paymentResponse: shared.PaymentResponse$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    paymentResponse: "PaymentResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePaymentResponse$ {
  /** @deprecated use `CreatePaymentResponse$inboundSchema` instead. */
  export const inboundSchema = CreatePaymentResponse$inboundSchema;
  /** @deprecated use `CreatePaymentResponse$outboundSchema` instead. */
  export const outboundSchema = CreatePaymentResponse$outboundSchema;
  /** @deprecated use `CreatePaymentResponse$Outbound` instead. */
  export type Outbound = CreatePaymentResponse$Outbound;
}

export function createPaymentResponseToJSON(
  createPaymentResponse: CreatePaymentResponse,
): string {
  return JSON.stringify(
    CreatePaymentResponse$outboundSchema.parse(createPaymentResponse),
  );
}

export function createPaymentResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreatePaymentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePaymentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePaymentResponse' from JSON`,
  );
}
