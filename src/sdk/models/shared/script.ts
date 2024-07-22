/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Script = {
    metadata?: { [k: string]: any } | null | undefined;
    plain: string;
    /**
     * Reference to attach to the generated transaction
     */
    reference?: string | undefined;
    vars?: { [k: string]: any } | undefined;
};

/** @internal */
export const Script$inboundSchema: z.ZodType<Script, z.ZodTypeDef, unknown> = z.object({
    metadata: z.nullable(z.record(z.any())).optional(),
    plain: z.string(),
    reference: z.string().optional(),
    vars: z.record(z.any()).optional(),
});

/** @internal */
export type Script$Outbound = {
    metadata?: { [k: string]: any } | null | undefined;
    plain: string;
    reference?: string | undefined;
    vars?: { [k: string]: any } | undefined;
};

/** @internal */
export const Script$outboundSchema: z.ZodType<Script$Outbound, z.ZodTypeDef, Script> = z.object({
    metadata: z.nullable(z.record(z.any())).optional(),
    plain: z.string(),
    reference: z.string().optional(),
    vars: z.record(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Script$ {
    /** @deprecated use `Script$inboundSchema` instead. */
    export const inboundSchema = Script$inboundSchema;
    /** @deprecated use `Script$outboundSchema` instead. */
    export const outboundSchema = Script$outboundSchema;
    /** @deprecated use `Script$Outbound` instead. */
    export type Outbound = Script$Outbound;
}
