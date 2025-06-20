/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { SDKBaseError } from "./sdkbaseerror.js";

export enum WalletsErrorResponseErrorCode {
  Validation = "VALIDATION",
  InternalError = "INTERNAL_ERROR",
  InsufficientFund = "INSUFFICIENT_FUND",
  HoldClosed = "HOLD_CLOSED",
}

export type WalletsErrorResponseData = {
  errorCode: WalletsErrorResponseErrorCode;
  errorMessage: string;
};

export class WalletsErrorResponse extends SDKBaseError {
  errorCode: WalletsErrorResponseErrorCode;
  errorMessage: string;

  /** The original data that was passed to this error instance. */
  data$: WalletsErrorResponseData;

  constructor(
    err: WalletsErrorResponseData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.errorCode = err.errorCode;
    this.errorMessage = err.errorMessage;

    this.name = "WalletsErrorResponse";
  }
}

/** @internal */
export const WalletsErrorResponseErrorCode$inboundSchema: z.ZodNativeEnum<
  typeof WalletsErrorResponseErrorCode
> = z.nativeEnum(WalletsErrorResponseErrorCode);

/** @internal */
export const WalletsErrorResponseErrorCode$outboundSchema: z.ZodNativeEnum<
  typeof WalletsErrorResponseErrorCode
> = WalletsErrorResponseErrorCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsErrorResponseErrorCode$ {
  /** @deprecated use `WalletsErrorResponseErrorCode$inboundSchema` instead. */
  export const inboundSchema = WalletsErrorResponseErrorCode$inboundSchema;
  /** @deprecated use `WalletsErrorResponseErrorCode$outboundSchema` instead. */
  export const outboundSchema = WalletsErrorResponseErrorCode$outboundSchema;
}

/** @internal */
export const WalletsErrorResponse$inboundSchema: z.ZodType<
  WalletsErrorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  errorCode: WalletsErrorResponseErrorCode$inboundSchema,
  errorMessage: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new WalletsErrorResponse(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type WalletsErrorResponse$Outbound = {
  errorCode: string;
  errorMessage: string;
};

/** @internal */
export const WalletsErrorResponse$outboundSchema: z.ZodType<
  WalletsErrorResponse$Outbound,
  z.ZodTypeDef,
  WalletsErrorResponse
> = z.instanceof(WalletsErrorResponse)
  .transform(v => v.data$)
  .pipe(z.object({
    errorCode: WalletsErrorResponseErrorCode$outboundSchema,
    errorMessage: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsErrorResponse$ {
  /** @deprecated use `WalletsErrorResponse$inboundSchema` instead. */
  export const inboundSchema = WalletsErrorResponse$inboundSchema;
  /** @deprecated use `WalletsErrorResponse$outboundSchema` instead. */
  export const outboundSchema = WalletsErrorResponse$outboundSchema;
  /** @deprecated use `WalletsErrorResponse$Outbound` instead. */
  export type Outbound = WalletsErrorResponse$Outbound;
}
