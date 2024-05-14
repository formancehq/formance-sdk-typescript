/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ErrorsEnum, ErrorsEnum$ } from "./errorsenum";
import { Transaction, Transaction$ } from "./transaction";
import * as z from "zod";

export type ScriptResponse = {
    details?: string | undefined;
    errorCode?: ErrorsEnum | undefined;
    errorMessage?: string | undefined;
    transaction?: Transaction | undefined;
};

/** @internal */
export namespace ScriptResponse$ {
    export const inboundSchema: z.ZodType<ScriptResponse, z.ZodTypeDef, unknown> = z
        .object({
            details: z.string().optional(),
            errorCode: ErrorsEnum$.optional(),
            errorMessage: z.string().optional(),
            transaction: Transaction$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.details === undefined ? null : { details: v.details }),
                ...(v.errorCode === undefined ? null : { errorCode: v.errorCode }),
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                ...(v.transaction === undefined ? null : { transaction: v.transaction }),
            };
        });

    export type Outbound = {
        details?: string | undefined;
        errorCode?: ErrorsEnum | undefined;
        errorMessage?: string | undefined;
        transaction?: Transaction$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ScriptResponse> = z
        .object({
            details: z.string().optional(),
            errorCode: ErrorsEnum$.optional(),
            errorMessage: z.string().optional(),
            transaction: Transaction$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.details === undefined ? null : { details: v.details }),
                ...(v.errorCode === undefined ? null : { errorCode: v.errorCode }),
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                ...(v.transaction === undefined ? null : { transaction: v.transaction }),
            };
        });
}
