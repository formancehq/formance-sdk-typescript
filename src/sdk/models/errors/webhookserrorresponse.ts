/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

/**
 * Error
 */
export type WebhooksErrorResponseData = {
    details?: string | undefined;
    errorCode: shared.WebhooksErrorsEnum;
    errorMessage: string;
};

/**
 * Error
 */
export class WebhooksErrorResponse extends Error {
    details?: string | undefined;
    errorCode: shared.WebhooksErrorsEnum;
    errorMessage: string;

    /** The original data that was passed to this error instance. */
    data$: WebhooksErrorResponseData;

    constructor(err: WebhooksErrorResponseData) {
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

        this.name = "WebhooksErrorResponse";
    }
}

/** @internal */
export namespace WebhooksErrorResponse$ {
    export const inboundSchema: z.ZodType<WebhooksErrorResponse, z.ZodTypeDef, unknown> = z
        .object({
            details: z.string().optional(),
            errorCode: shared.WebhooksErrorsEnum$,
            errorMessage: z.string(),
        })
        .transform((v) => {
            return new WebhooksErrorResponse({
                ...(v.details === undefined ? null : { details: v.details }),
                errorCode: v.errorCode,
                errorMessage: v.errorMessage,
            });
        });

    export type Outbound = {
        details?: string | undefined;
        errorCode: shared.WebhooksErrorsEnum;
        errorMessage: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WebhooksErrorResponse> = z
        .instanceof(WebhooksErrorResponse)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    details: z.string().optional(),
                    errorCode: shared.WebhooksErrorsEnum$,
                    errorMessage: z.string(),
                })
                .transform((v) => {
                    return {
                        ...(v.details === undefined ? null : { details: v.details }),
                        errorCode: v.errorCode,
                        errorMessage: v.errorMessage,
                    };
                })
        );
}
