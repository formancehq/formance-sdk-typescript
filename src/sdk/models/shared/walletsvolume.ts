/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type WalletsVolume = {
    balance: bigint;
    input: bigint;
    output: bigint;
};

/** @internal */
export const WalletsVolume$inboundSchema: z.ZodType<WalletsVolume, z.ZodTypeDef, unknown> =
    z.object({
        balance: z.number().transform((v) => BigInt(v)),
        input: z.number().transform((v) => BigInt(v)),
        output: z.number().transform((v) => BigInt(v)),
    });

/** @internal */
export type WalletsVolume$Outbound = {
    balance: number;
    input: number;
    output: number;
};

/** @internal */
export const WalletsVolume$outboundSchema: z.ZodType<
    WalletsVolume$Outbound,
    z.ZodTypeDef,
    WalletsVolume
> = z.object({
    balance: z.bigint().transform((v) => Number(v)),
    input: z.bigint().transform((v) => Number(v)),
    output: z.bigint().transform((v) => Number(v)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletsVolume$ {
    /** @deprecated use `WalletsVolume$inboundSchema` instead. */
    export const inboundSchema = WalletsVolume$inboundSchema;
    /** @deprecated use `WalletsVolume$outboundSchema` instead. */
    export const outboundSchema = WalletsVolume$outboundSchema;
    /** @deprecated use `WalletsVolume$Outbound` instead. */
    export type Outbound = WalletsVolume$Outbound;
}
