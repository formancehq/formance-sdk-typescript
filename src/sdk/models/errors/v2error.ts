/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { SDKBaseError } from "./sdkbaseerror.js";

export enum V2ErrorErrorCode {
  Validation = "VALIDATION",
  NotFound = "NOT_FOUND",
  Internal = "INTERNAL",
}

/**
 * General error
 */
export type V2ErrorData = {
  errorCode: V2ErrorErrorCode;
  errorMessage: string;
};

/**
 * General error
 */
export class V2Error extends SDKBaseError {
  errorCode: V2ErrorErrorCode;
  errorMessage: string;

  /** The original data that was passed to this error instance. */
  data$: V2ErrorData;

  constructor(
    err: V2ErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.errorCode = err.errorCode;
    this.errorMessage = err.errorMessage;

    this.name = "V2Error";
  }
}

/** @internal */
export const V2ErrorErrorCode$inboundSchema: z.ZodNativeEnum<
  typeof V2ErrorErrorCode
> = z.nativeEnum(V2ErrorErrorCode);

/** @internal */
export const V2ErrorErrorCode$outboundSchema: z.ZodNativeEnum<
  typeof V2ErrorErrorCode
> = V2ErrorErrorCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ErrorErrorCode$ {
  /** @deprecated use `V2ErrorErrorCode$inboundSchema` instead. */
  export const inboundSchema = V2ErrorErrorCode$inboundSchema;
  /** @deprecated use `V2ErrorErrorCode$outboundSchema` instead. */
  export const outboundSchema = V2ErrorErrorCode$outboundSchema;
}

/** @internal */
export const V2Error$inboundSchema: z.ZodType<V2Error, z.ZodTypeDef, unknown> =
  z.object({
    errorCode: V2ErrorErrorCode$inboundSchema,
    errorMessage: z.string(),
    request$: z.instanceof(Request),
    response$: z.instanceof(Response),
    body$: z.string(),
  })
    .transform((v) => {
      return new V2Error(v, {
        request: v.request$,
        response: v.response$,
        body: v.body$,
      });
    });

/** @internal */
export type V2Error$Outbound = {
  errorCode: string;
  errorMessage: string;
};

/** @internal */
export const V2Error$outboundSchema: z.ZodType<
  V2Error$Outbound,
  z.ZodTypeDef,
  V2Error
> = z.instanceof(V2Error)
  .transform(v => v.data$)
  .pipe(z.object({
    errorCode: V2ErrorErrorCode$outboundSchema,
    errorMessage: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2Error$ {
  /** @deprecated use `V2Error$inboundSchema` instead. */
  export const inboundSchema = V2Error$inboundSchema;
  /** @deprecated use `V2Error$outboundSchema` instead. */
  export const outboundSchema = V2Error$outboundSchema;
  /** @deprecated use `V2Error$Outbound` instead. */
  export type Outbound = V2Error$Outbound;
}
