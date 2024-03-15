/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Posting, Posting$ } from "./posting";
import { WalletsVolume, WalletsVolume$ } from "./walletsvolume";
import * as z from "zod";

export type WalletsTransaction = {
    id: number;
    ledger?: string | undefined;
    /**
     * Metadata associated with the wallet.
     */
    metadata: Record<string, string>;
    postCommitVolumes?: Record<string, Record<string, WalletsVolume>> | undefined;
    postings: Array<Posting>;
    preCommitVolumes?: Record<string, Record<string, WalletsVolume>> | undefined;
    reference?: string | undefined;
    timestamp: Date;
};

/** @internal */
export namespace WalletsTransaction$ {
    export type Inbound = {
        id: number;
        ledger?: string | undefined;
        metadata: Record<string, string>;
        postCommitVolumes?: Record<string, Record<string, WalletsVolume$.Inbound>> | undefined;
        postings: Array<Posting$.Inbound>;
        preCommitVolumes?: Record<string, Record<string, WalletsVolume$.Inbound>> | undefined;
        reference?: string | undefined;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<WalletsTransaction, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.number().int(),
            ledger: z.string().optional(),
            metadata: z.record(z.string()),
            postCommitVolumes: z.record(z.record(WalletsVolume$.inboundSchema)).optional(),
            postings: z.array(Posting$.inboundSchema),
            preCommitVolumes: z.record(z.record(WalletsVolume$.inboundSchema)).optional(),
            reference: z.string().optional(),
            timestamp: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.ledger === undefined ? null : { ledger: v.ledger }),
                metadata: v.metadata,
                ...(v.postCommitVolumes === undefined
                    ? null
                    : { postCommitVolumes: v.postCommitVolumes }),
                postings: v.postings,
                ...(v.preCommitVolumes === undefined
                    ? null
                    : { preCommitVolumes: v.preCommitVolumes }),
                ...(v.reference === undefined ? null : { reference: v.reference }),
                timestamp: v.timestamp,
            };
        });

    export type Outbound = {
        id: number;
        ledger?: string | undefined;
        metadata: Record<string, string>;
        postCommitVolumes?: Record<string, Record<string, WalletsVolume$.Outbound>> | undefined;
        postings: Array<Posting$.Outbound>;
        preCommitVolumes?: Record<string, Record<string, WalletsVolume$.Outbound>> | undefined;
        reference?: string | undefined;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletsTransaction> = z
        .object({
            id: z.number().int(),
            ledger: z.string().optional(),
            metadata: z.record(z.string()),
            postCommitVolumes: z.record(z.record(WalletsVolume$.outboundSchema)).optional(),
            postings: z.array(Posting$.outboundSchema),
            preCommitVolumes: z.record(z.record(WalletsVolume$.outboundSchema)).optional(),
            reference: z.string().optional(),
            timestamp: z.date().transform((v) => v.toISOString()),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.ledger === undefined ? null : { ledger: v.ledger }),
                metadata: v.metadata,
                ...(v.postCommitVolumes === undefined
                    ? null
                    : { postCommitVolumes: v.postCommitVolumes }),
                postings: v.postings,
                ...(v.preCommitVolumes === undefined
                    ? null
                    : { preCommitVolumes: v.preCommitVolumes }),
                ...(v.reference === undefined ? null : { reference: v.reference }),
                timestamp: v.timestamp,
            };
        });
}
