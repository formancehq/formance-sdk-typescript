/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum V2PaymentStatus {
    Pending = "PENDING",
    Active = "ACTIVE",
    Terminated = "TERMINATED",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Cancelled = "CANCELLED",
}

/** @internal */
export const V2PaymentStatus$: z.ZodNativeEnum<typeof V2PaymentStatus> =
    z.nativeEnum(V2PaymentStatus);
