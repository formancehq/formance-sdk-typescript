/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

/**
 * Error
 */
export type ErrorResponseData = {
    details?: string | undefined;
    errorCode: shared.ErrorsEnum;
    errorMessage: string;
};

/**
 * Error
 */
export class ErrorResponse extends Error {
    details?: string | undefined;
    errorCode: shared.ErrorsEnum;
    errorMessage: string;

    /** The original data that was passed to this error instance. */
    data$: ErrorResponseData;

    constructor(err: ErrorResponseData) {
        super("");
        this.data$ = err;

        if (err.details != null) {
            this.details = err.details;
        }
        this.errorCode = err.errorCode;
        this.errorMessage = err.errorMessage;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "ErrorResponse";
    }
}

/** @internal */
export namespace ErrorResponse$ {
    export const inboundSchema: z.ZodType<ErrorResponse, z.ZodTypeDef, unknown> = z
        .object({
            details: z.string().optional(),
            errorCode: shared.ErrorsEnum$.inboundSchema,
            errorMessage: z.string(),
        })
        .transform((v) => {
            return new ErrorResponse(v);
        });

    export type Outbound = {
        details?: string | undefined;
        errorCode: string;
        errorMessage: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrorResponse> = z
        .instanceof(ErrorResponse)
        .transform((v) => v.data$)
        .pipe(
            z.object({
                details: z.string().optional(),
                errorCode: shared.ErrorsEnum$.outboundSchema,
                errorMessage: z.string(),
            })
        );
}
