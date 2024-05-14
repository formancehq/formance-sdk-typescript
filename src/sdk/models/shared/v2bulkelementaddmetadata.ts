/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2TargetId, V2TargetId$ } from "./v2targetid";
import { V2TargetType, V2TargetType$ } from "./v2targettype";
import * as z from "zod";

export type V2BulkElementAddMetadataData = {
    metadata: Record<string, string>;
    targetId: V2TargetId;
    targetType: V2TargetType;
};

export type V2BulkElementAddMetadata = {
    action: string;
    data?: V2BulkElementAddMetadataData | undefined;
    ik?: string | undefined;
};

/** @internal */
export namespace V2BulkElementAddMetadataData$ {
    export const inboundSchema: z.ZodType<V2BulkElementAddMetadataData, z.ZodTypeDef, unknown> = z
        .object({
            metadata: z.record(z.string()),
            targetId: V2TargetId$.inboundSchema,
            targetType: V2TargetType$,
        })
        .transform((v) => {
            return {
                metadata: v.metadata,
                targetId: v.targetId,
                targetType: v.targetType,
            };
        });

    export type Outbound = {
        metadata: Record<string, string>;
        targetId: V2TargetId$.Outbound;
        targetType: V2TargetType;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2BulkElementAddMetadataData> = z
        .object({
            metadata: z.record(z.string()),
            targetId: V2TargetId$.outboundSchema,
            targetType: V2TargetType$,
        })
        .transform((v) => {
            return {
                metadata: v.metadata,
                targetId: v.targetId,
                targetType: v.targetType,
            };
        });
}

/** @internal */
export namespace V2BulkElementAddMetadata$ {
    export const inboundSchema: z.ZodType<V2BulkElementAddMetadata, z.ZodTypeDef, unknown> = z
        .object({
            action: z.string(),
            data: z.lazy(() => V2BulkElementAddMetadataData$.inboundSchema).optional(),
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
        data?: V2BulkElementAddMetadataData$.Outbound | undefined;
        ik?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2BulkElementAddMetadata> = z
        .object({
            action: z.string(),
            data: z.lazy(() => V2BulkElementAddMetadataData$.outboundSchema).optional(),
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
