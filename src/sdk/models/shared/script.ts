/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Script = {
    metadata?: Record<string, any> | null | undefined;
    plain: string;
    /**
     * Reference to attach to the generated transaction
     */
    reference?: string | undefined;
    vars?: Record<string, any> | undefined;
};

/** @internal */
export namespace Script$ {
    export const inboundSchema: z.ZodType<Script, z.ZodTypeDef, unknown> = z
        .object({
            metadata: z.nullable(z.record(z.any())).optional(),
            plain: z.string(),
            reference: z.string().optional(),
            vars: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                plain: v.plain,
                ...(v.reference === undefined ? null : { reference: v.reference }),
                ...(v.vars === undefined ? null : { vars: v.vars }),
            };
        });

    export type Outbound = {
        metadata?: Record<string, any> | null | undefined;
        plain: string;
        reference?: string | undefined;
        vars?: Record<string, any> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Script> = z
        .object({
            metadata: z.nullable(z.record(z.any())).optional(),
            plain: z.string(),
            reference: z.string().optional(),
            vars: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                plain: v.plain,
                ...(v.reference === undefined ? null : { reference: v.reference }),
                ...(v.vars === undefined ? null : { vars: v.vars }),
            };
        });
}
