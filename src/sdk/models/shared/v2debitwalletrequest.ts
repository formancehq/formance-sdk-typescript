/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Monetary, V2Monetary$ } from "./v2monetary";
import { V2Subject, V2Subject$ } from "./v2subject";
import * as z from "zod";

export type V2DebitWalletRequest = {
    amount: V2Monetary;
    balances?: Array<string> | undefined;
    description?: string | undefined;
    destination?: V2Subject | undefined;
    /**
     * Metadata associated with the wallet.
     */
    metadata: { [k: string]: string };
    /**
     * Set to true to create a pending hold. If false, the wallet will be debited immediately.
     */
    pending?: boolean | undefined;
    /**
     * cannot be used in conjunction with `pending` property
     */
    timestamp?: Date | undefined;
};

/** @internal */
export namespace V2DebitWalletRequest$ {
    export const inboundSchema: z.ZodType<V2DebitWalletRequest, z.ZodTypeDef, unknown> = z.object({
        amount: V2Monetary$.inboundSchema,
        balances: z.array(z.string()).optional(),
        description: z.string().optional(),
        destination: V2Subject$.inboundSchema.optional(),
        metadata: z.record(z.string()),
        pending: z.boolean().optional(),
        timestamp: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
    });

    export type Outbound = {
        amount: V2Monetary$.Outbound;
        balances?: Array<string> | undefined;
        description?: string | undefined;
        destination?: V2Subject$.Outbound | undefined;
        metadata: { [k: string]: string };
        pending?: boolean | undefined;
        timestamp?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2DebitWalletRequest> = z.object(
        {
            amount: V2Monetary$.outboundSchema,
            balances: z.array(z.string()).optional(),
            description: z.string().optional(),
            destination: V2Subject$.outboundSchema.optional(),
            metadata: z.record(z.string()),
            pending: z.boolean().optional(),
            timestamp: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        }
    );
}
