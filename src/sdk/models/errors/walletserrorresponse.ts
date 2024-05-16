/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

export const WalletsErrorResponseErrorCode = {
    Validation: "VALIDATION",
    InternalError: "INTERNAL_ERROR",
    InsufficientFund: "INSUFFICIENT_FUND",
    HoldClosed: "HOLD_CLOSED",
} as const;
export type WalletsErrorResponseErrorCode = ClosedEnum<typeof WalletsErrorResponseErrorCode>;

/**
 * Error
 */
export type WalletsErrorResponseData = {
    errorCode: WalletsErrorResponseErrorCode;
    errorMessage: string;
};

/**
 * Error
 */
export class WalletsErrorResponse extends Error {
    errorCode: WalletsErrorResponseErrorCode;
    errorMessage: string;

    /** The original data that was passed to this error instance. */
    data$: WalletsErrorResponseData;

    constructor(err: WalletsErrorResponseData) {
        super("");
        this.data$ = err;

        this.errorCode = err.errorCode;
        this.errorMessage = err.errorMessage;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "WalletsErrorResponse";
    }
}

/** @internal */
export namespace WalletsErrorResponseErrorCode$ {
    export const inboundSchema = z.nativeEnum(WalletsErrorResponseErrorCode);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace WalletsErrorResponse$ {
    export const inboundSchema: z.ZodType<WalletsErrorResponse, z.ZodTypeDef, unknown> = z
        .object({
            errorCode: WalletsErrorResponseErrorCode$.inboundSchema,
            errorMessage: z.string(),
        })
        .transform((v) => {
            return new WalletsErrorResponse({
                errorCode: v.errorCode,
                errorMessage: v.errorMessage,
            });
        });

    export type Outbound = {
        errorCode: string;
        errorMessage: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletsErrorResponse> = z
        .instanceof(WalletsErrorResponse)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errorCode: WalletsErrorResponseErrorCode$.outboundSchema,
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
