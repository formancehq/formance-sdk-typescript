/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type GetLedgerInfoRequest = {
    /**
     * Name of the ledger.
     */
    ledger: string;
};

export type GetLedgerInfoResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * OK
     */
    ledgerInfoResponse?: shared.LedgerInfoResponse | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace GetLedgerInfoRequest$ {
    export const inboundSchema: z.ZodType<GetLedgerInfoRequest, z.ZodTypeDef, unknown> = z.object({
        ledger: z.string(),
    });

    export type Outbound = {
        ledger: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLedgerInfoRequest> = z.object(
        {
            ledger: z.string(),
        }
    );
}

/** @internal */
export namespace GetLedgerInfoResponse$ {
    export const inboundSchema: z.ZodType<GetLedgerInfoResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            LedgerInfoResponse: shared.LedgerInfoResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                LedgerInfoResponse: "ledgerInfoResponse",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        LedgerInfoResponse?: shared.LedgerInfoResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLedgerInfoResponse> = z
        .object({
            contentType: z.string(),
            ledgerInfoResponse: shared.LedgerInfoResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                ledgerInfoResponse: "LedgerInfoResponse",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
