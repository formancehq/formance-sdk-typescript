/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ErrorsEnum, ErrorsEnum$inboundSchema, ErrorsEnum$outboundSchema } from "./errorsenum.js";
import {
    Transaction,
    Transaction$inboundSchema,
    Transaction$Outbound,
    Transaction$outboundSchema,
} from "./transaction.js";
import * as z from "zod";

export type ScriptResponse = {
    details?: string | undefined;
    errorCode?: ErrorsEnum | undefined;
    errorMessage?: string | undefined;
    transaction?: Transaction | undefined;
};

/** @internal */
export const ScriptResponse$inboundSchema: z.ZodType<ScriptResponse, z.ZodTypeDef, unknown> =
    z.object({
        details: z.string().optional(),
        errorCode: ErrorsEnum$inboundSchema.optional(),
        errorMessage: z.string().optional(),
        transaction: Transaction$inboundSchema.optional(),
    });

/** @internal */
export type ScriptResponse$Outbound = {
    details?: string | undefined;
    errorCode?: string | undefined;
    errorMessage?: string | undefined;
    transaction?: Transaction$Outbound | undefined;
};

/** @internal */
export const ScriptResponse$outboundSchema: z.ZodType<
    ScriptResponse$Outbound,
    z.ZodTypeDef,
    ScriptResponse
> = z.object({
    details: z.string().optional(),
    errorCode: ErrorsEnum$outboundSchema.optional(),
    errorMessage: z.string().optional(),
    transaction: Transaction$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScriptResponse$ {
    /** @deprecated use `ScriptResponse$inboundSchema` instead. */
    export const inboundSchema = ScriptResponse$inboundSchema;
    /** @deprecated use `ScriptResponse$outboundSchema` instead. */
    export const outboundSchema = ScriptResponse$outboundSchema;
    /** @deprecated use `ScriptResponse$Outbound` instead. */
    export type Outbound = ScriptResponse$Outbound;
}
