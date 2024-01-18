/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Monetary, Monetary$ } from "./monetary";
import { StageSendDestination, StageSendDestination$ } from "./stagesenddestination";
import { StageSendSource, StageSendSource$ } from "./stagesendsource";
import { z } from "zod";

export type StageSend = {
    amount?: Monetary | undefined;
    destination?: StageSendDestination | undefined;
    metadata?: Record<string, string> | undefined;
    source?: StageSendSource | undefined;
};

/** @internal */
export namespace StageSend$ {
    export type Inbound = {
        amount?: Monetary$.Inbound | undefined;
        destination?: StageSendDestination$.Inbound | undefined;
        metadata?: Record<string, string> | undefined;
        source?: StageSendSource$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<StageSend, z.ZodTypeDef, Inbound> = z
        .object({
            amount: Monetary$.inboundSchema.optional(),
            destination: StageSendDestination$.inboundSchema.optional(),
            metadata: z.record(z.string()).optional(),
            source: StageSendSource$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.destination === undefined ? null : { destination: v.destination }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.source === undefined ? null : { source: v.source }),
            };
        });

    export type Outbound = {
        amount?: Monetary$.Outbound | undefined;
        destination?: StageSendDestination$.Outbound | undefined;
        metadata?: Record<string, string> | undefined;
        source?: StageSendSource$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StageSend> = z
        .object({
            amount: Monetary$.outboundSchema.optional(),
            destination: StageSendDestination$.outboundSchema.optional(),
            metadata: z.record(z.string()).optional(),
            source: StageSendSource$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.destination === undefined ? null : { destination: v.destination }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.source === undefined ? null : { source: v.source }),
            };
        });
}
