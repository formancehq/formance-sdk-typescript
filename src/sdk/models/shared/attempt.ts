/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    WebhooksConfig,
    WebhooksConfig$inboundSchema,
    WebhooksConfig$Outbound,
    WebhooksConfig$outboundSchema,
} from "./webhooksconfig.js";
import * as z from "zod";

export type Attempt = {
    config: WebhooksConfig;
    createdAt: Date;
    id: string;
    nextRetryAfter?: Date | undefined;
    payload: string;
    retryAttempt: number;
    status: string;
    statusCode: number;
    updatedAt: Date;
    webhookID: string;
};

/** @internal */
export const Attempt$inboundSchema: z.ZodType<Attempt, z.ZodTypeDef, unknown> = z.object({
    config: WebhooksConfig$inboundSchema,
    createdAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    id: z.string(),
    nextRetryAfter: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
    payload: z.string(),
    retryAttempt: z.number().int(),
    status: z.string(),
    statusCode: z.number().int(),
    updatedAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    webhookID: z.string(),
});

/** @internal */
export type Attempt$Outbound = {
    config: WebhooksConfig$Outbound;
    createdAt: string;
    id: string;
    nextRetryAfter?: string | undefined;
    payload: string;
    retryAttempt: number;
    status: string;
    statusCode: number;
    updatedAt: string;
    webhookID: string;
};

/** @internal */
export const Attempt$outboundSchema: z.ZodType<Attempt$Outbound, z.ZodTypeDef, Attempt> = z.object({
    config: WebhooksConfig$outboundSchema,
    createdAt: z.date().transform((v) => v.toISOString()),
    id: z.string(),
    nextRetryAfter: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
    payload: z.string(),
    retryAttempt: z.number().int(),
    status: z.string(),
    statusCode: z.number().int(),
    updatedAt: z.date().transform((v) => v.toISOString()),
    webhookID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Attempt$ {
    /** @deprecated use `Attempt$inboundSchema` instead. */
    export const inboundSchema = Attempt$inboundSchema;
    /** @deprecated use `Attempt$outboundSchema` instead. */
    export const outboundSchema = Attempt$outboundSchema;
    /** @deprecated use `Attempt$Outbound` instead. */
    export type Outbound = Attempt$Outbound;
}
