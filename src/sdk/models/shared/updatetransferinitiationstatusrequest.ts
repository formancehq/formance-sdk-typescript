/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

export const Status = {
    WaitingForValidation: "WAITING_FOR_VALIDATION",
    Processing: "PROCESSING",
    Processed: "PROCESSED",
    Failed: "FAILED",
    Rejected: "REJECTED",
    Validated: "VALIDATED",
} as const;
export type Status = ClosedEnum<typeof Status>;

export type UpdateTransferInitiationStatusRequest = {
    status: Status;
};

/** @internal */
export namespace Status$ {
    export const inboundSchema = z.nativeEnum(Status);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace UpdateTransferInitiationStatusRequest$ {
    export const inboundSchema: z.ZodType<
        UpdateTransferInitiationStatusRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            status: Status$.inboundSchema,
        })
        .transform((v) => {
            return {
                status: v.status,
            };
        });

    export type Outbound = {
        status: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateTransferInitiationStatusRequest
    > = z
        .object({
            status: Status$.outboundSchema,
        })
        .transform((v) => {
            return {
                status: v.status,
            };
        });
}
