/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type V2PaymentMetadata = {
    key?: string | undefined;
};

/** @internal */
export namespace V2PaymentMetadata$ {
    export type Inbound = {
        key?: string | undefined;
    };

    export const inboundSchema: z.ZodType<V2PaymentMetadata, z.ZodTypeDef, Inbound> = z
        .object({
            key: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
            };
        });

    export type Outbound = {
        key?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2PaymentMetadata> = z
        .object({
            key: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
            };
        });
}
