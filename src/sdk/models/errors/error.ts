/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum ErrorCode {
    Validation = "VALIDATION",
    NotFound = "NOT_FOUND",
    Internal = "INTERNAL",
}

/**
 * General error
 */
export type ErrorTData = {
    errorCode: ErrorCode;
    errorMessage: string;
};

/**
 * General error
 */
export class ErrorT extends Error {
    errorCode: ErrorCode;
    errorMessage: string;

    /** The original data that was passed to this error instance. */
    data$: ErrorTData;

    constructor(err: ErrorTData) {
        super("");
        this.data$ = err;

        this.errorCode = err.errorCode;
        this.errorMessage = err.errorMessage;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "ErrorT";
    }
}

/** @internal */
export const ErrorCode$: z.ZodNativeEnum<typeof ErrorCode> = z.nativeEnum(ErrorCode);

/** @internal */
export namespace ErrorT$ {
    export const inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> = z
        .object({
            errorCode: ErrorCode$,
            errorMessage: z.string(),
        })
        .transform((v) => {
            return new ErrorT({
                errorCode: v.errorCode,
                errorMessage: v.errorMessage,
            });
        });

    export type Outbound = {
        errorCode: ErrorCode;
        errorMessage: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrorT> = z
        .instanceof(ErrorT)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errorCode: ErrorCode$,
                    errorMessage: z.string(),
                })
                .transform((v) => {
                    return {
                        errorCode: v.errorCode,
                        errorMessage: v.errorMessage,
                    };
                })
        );
}
