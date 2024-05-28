/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum TransferInitiationStatus {
    WaitingForValidation = "WAITING_FOR_VALIDATION",
    Processing = "PROCESSING",
    Processed = "PROCESSED",
    Failed = "FAILED",
    Rejected = "REJECTED",
    Validated = "VALIDATED",
    AskRetried = "ASK_RETRIED",
    AskReversed = "ASK_REVERSED",
    ReverseProcessing = "REVERSE_PROCESSING",
    ReverseFailed = "REVERSE_FAILED",
    PartiallyReversed = "PARTIALLY_REVERSED",
    Reversed = "REVERSED",
}

/** @internal */
export namespace TransferInitiationStatus$ {
    export const inboundSchema = z.nativeEnum(TransferInitiationStatus);
    export const outboundSchema = inboundSchema;
}
