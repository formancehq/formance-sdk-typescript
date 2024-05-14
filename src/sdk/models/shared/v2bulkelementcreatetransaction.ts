/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2PostTransaction, V2PostTransaction$ } from "./v2posttransaction";
import * as z from "zod";

export type V2BulkElementCreateTransaction = {
    action: string;
    data?: V2PostTransaction | undefined;
    ik?: string | undefined;
};

/** @internal */
export namespace V2BulkElementCreateTransaction$ {
    export const inboundSchema: z.ZodType<V2BulkElementCreateTransaction, z.ZodTypeDef, unknown> = z
        .object({
            action: z.string(),
            data: V2PostTransaction$.inboundSchema.optional(),
            ik: z.string().optional(),
        })
        .transform((v) => {
            return {
                action: v.action,
                ...(v.data === undefined ? null : { data: v.data }),
                ...(v.ik === undefined ? null : { ik: v.ik }),
            };
        });

    export type Outbound = {
        action: string;
        data?: V2PostTransaction$.Outbound | undefined;
        ik?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2BulkElementCreateTransaction> =
        z
            .object({
                action: z.string(),
                data: V2PostTransaction$.outboundSchema.optional(),
                ik: z.string().optional(),
            })
            .transform((v) => {
                return {
                    action: v.action,
                    ...(v.data === undefined ? null : { data: v.data }),
                    ...(v.ik === undefined ? null : { ik: v.ik }),
                };
            });
}
