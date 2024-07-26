/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ActivityListWallets = {
    name?: string | undefined;
};

/** @internal */
export const ActivityListWallets$inboundSchema: z.ZodType<
    ActivityListWallets,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string().optional(),
});

/** @internal */
export type ActivityListWallets$Outbound = {
    name?: string | undefined;
};

/** @internal */
export const ActivityListWallets$outboundSchema: z.ZodType<
    ActivityListWallets$Outbound,
    z.ZodTypeDef,
    ActivityListWallets
> = z.object({
    name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivityListWallets$ {
    /** @deprecated use `ActivityListWallets$inboundSchema` instead. */
    export const inboundSchema = ActivityListWallets$inboundSchema;
    /** @deprecated use `ActivityListWallets$outboundSchema` instead. */
    export const outboundSchema = ActivityListWallets$outboundSchema;
    /** @deprecated use `ActivityListWallets$Outbound` instead. */
    export type Outbound = ActivityListWallets$Outbound;
}
