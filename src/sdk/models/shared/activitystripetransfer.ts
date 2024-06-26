/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * A set of key/value pairs that you can attach to a transfer object.
 *
 * @remarks
 * It can be useful for storing additional information about the transfer in a structured format.
 *
 */
export type Metadata = {};

export type ActivityStripeTransfer = {
    amount?: bigint | undefined;
    asset?: string | undefined;
    connectorID?: string | undefined;
    destination?: string | undefined;
    /**
     * A set of key/value pairs that you can attach to a transfer object.
     *
     * @remarks
     * It can be useful for storing additional information about the transfer in a structured format.
     *
     */
    metadata?: Metadata | undefined;
    waitingValidation?: boolean | undefined;
};

/** @internal */
export namespace Metadata$ {
    export const inboundSchema: z.ZodType<Metadata, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Metadata> = z.object({});
}

/** @internal */
export namespace ActivityStripeTransfer$ {
    export const inboundSchema: z.ZodType<ActivityStripeTransfer, z.ZodTypeDef, unknown> = z.object(
        {
            amount: z
                .number()
                .transform((v) => BigInt(v))
                .optional(),
            asset: z.string().optional(),
            connectorID: z.string().optional(),
            destination: z.string().optional(),
            metadata: z.lazy(() => Metadata$.inboundSchema).optional(),
            waitingValidation: z.boolean().default(false),
        }
    );

    export type Outbound = {
        amount?: number | undefined;
        asset?: string | undefined;
        connectorID?: string | undefined;
        destination?: string | undefined;
        metadata?: Metadata$.Outbound | undefined;
        waitingValidation: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ActivityStripeTransfer> =
        z.object({
            amount: z
                .bigint()
                .transform((v) => Number(v))
                .optional(),
            asset: z.string().optional(),
            connectorID: z.string().optional(),
            destination: z.string().optional(),
            metadata: z.lazy(() => Metadata$.outboundSchema).optional(),
            waitingValidation: z.boolean().default(false),
        });
}
