/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    V2UpdateAccount,
    V2UpdateAccount$inboundSchema,
    V2UpdateAccount$Outbound,
    V2UpdateAccount$outboundSchema,
} from "./v2updateaccount.js";
import * as z from "zod";

export type V2Update = {
    account?: V2UpdateAccount | undefined;
};

/** @internal */
export const V2Update$inboundSchema: z.ZodType<V2Update, z.ZodTypeDef, unknown> = z.object({
    account: V2UpdateAccount$inboundSchema.optional(),
});

/** @internal */
export type V2Update$Outbound = {
    account?: V2UpdateAccount$Outbound | undefined;
};

/** @internal */
export const V2Update$outboundSchema: z.ZodType<V2Update$Outbound, z.ZodTypeDef, V2Update> =
    z.object({
        account: V2UpdateAccount$outboundSchema.optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2Update$ {
    /** @deprecated use `V2Update$inboundSchema` instead. */
    export const inboundSchema = V2Update$inboundSchema;
    /** @deprecated use `V2Update$outboundSchema` instead. */
    export const outboundSchema = V2Update$outboundSchema;
    /** @deprecated use `V2Update$Outbound` instead. */
    export type Outbound = V2Update$Outbound;
}
