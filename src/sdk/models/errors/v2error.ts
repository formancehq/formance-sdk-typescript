/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export enum SchemasErrorCode {
    Validation = "VALIDATION",
    NotFound = "NOT_FOUND",
    Internal = "INTERNAL",
}

/**
 * General error
 */
export type V2ErrorData = {
    errorCode: SchemasErrorCode;
    errorMessage: string;
};

/**
 * General error
 */
export class V2Error extends Error {
    errorCode: SchemasErrorCode;
    errorMessage: string;

    /** The original data that was passed to this error instance. */
    data$: V2ErrorData;

    constructor(err: V2ErrorData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.errorCode = err.errorCode;
        this.errorMessage = err.errorMessage;

        this.name = "V2Error";
    }
}

/** @internal */
export const SchemasErrorCode$inboundSchema: z.ZodNativeEnum<typeof SchemasErrorCode> =
    z.nativeEnum(SchemasErrorCode);

/** @internal */
export const SchemasErrorCode$outboundSchema: z.ZodNativeEnum<typeof SchemasErrorCode> =
    SchemasErrorCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasErrorCode$ {
    /** @deprecated use `SchemasErrorCode$inboundSchema` instead. */
    export const inboundSchema = SchemasErrorCode$inboundSchema;
    /** @deprecated use `SchemasErrorCode$outboundSchema` instead. */
    export const outboundSchema = SchemasErrorCode$outboundSchema;
}

/** @internal */
export const V2Error$inboundSchema: z.ZodType<V2Error, z.ZodTypeDef, unknown> = z
    .object({
        errorCode: SchemasErrorCode$inboundSchema,
        errorMessage: z.string(),
    })
    .transform((v) => {
        return new V2Error(v);
    });

/** @internal */
export type V2Error$Outbound = {
    errorCode: string;
    errorMessage: string;
};

/** @internal */
export const V2Error$outboundSchema: z.ZodType<V2Error$Outbound, z.ZodTypeDef, V2Error> = z
    .instanceof(V2Error)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            errorCode: SchemasErrorCode$outboundSchema,
            errorMessage: z.string(),
        })
    );

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
