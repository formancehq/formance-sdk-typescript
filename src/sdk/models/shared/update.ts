/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    UpdateAccount,
    UpdateAccount$inboundSchema,
    UpdateAccount$Outbound,
    UpdateAccount$outboundSchema,
} from "./updateaccount.js";
import * as z from "zod";

export type Update = {
    account?: UpdateAccount | undefined;
};

/** @internal */
export const Update$inboundSchema: z.ZodType<Update, z.ZodTypeDef, unknown> = z.object({
    account: UpdateAccount$inboundSchema.optional(),
});

/** @internal */
export type Update$Outbound = {
    account?: UpdateAccount$Outbound | undefined;
};

/** @internal */
export const Update$outboundSchema: z.ZodType<Update$Outbound, z.ZodTypeDef, Update> = z.object({
    account: UpdateAccount$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Update$ {
    /** @deprecated use `Update$inboundSchema` instead. */
    export const inboundSchema = Update$inboundSchema;
    /** @deprecated use `Update$outboundSchema` instead. */
    export const outboundSchema = Update$outboundSchema;
    /** @deprecated use `Update$Outbound` instead. */
    export type Outbound = Update$Outbound;
}
