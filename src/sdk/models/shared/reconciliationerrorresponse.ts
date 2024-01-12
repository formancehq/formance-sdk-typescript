/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type ReconciliationErrorResponse = {
    details?: string | undefined;
    errorCode: string;
    errorMessage: string;
};

/** @internal */
export namespace ReconciliationErrorResponse$ {
    export type Inbound = {
        details?: string | undefined;
        errorCode: string;
        errorMessage: string;
    };

    export const inboundSchema: z.ZodType<ReconciliationErrorResponse, z.ZodTypeDef, Inbound> = z
        .object({
            details: z.string().optional(),
            errorCode: z.string(),
            errorMessage: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.details === undefined ? null : { details: v.details }),
                errorCode: v.errorCode,
                errorMessage: v.errorMessage,
            };
        });

    export type Outbound = {
        details?: string | undefined;
        errorCode: string;
        errorMessage: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReconciliationErrorResponse> = z
        .object({
            details: z.string().optional(),
            errorCode: z.string(),
            errorMessage: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.details === undefined ? null : { details: v.details }),
                errorCode: v.errorCode,
                errorMessage: v.errorMessage,
            };
        });
}