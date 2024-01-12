/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../../../sdk/models/errors";
import { z } from "zod";

export type V2AddMetadataToAccountRequest = {
    /**
     * Use an idempotency key
     */
    idempotencyKey?: string | undefined;
    /**
     * metadata
     */
    requestBody: Record<string, string>;
    /**
     * Exact address of the account. It must match the following regular expressions pattern:
     *
     * @remarks
     * ```
     * ^\w+(:\w+)*$
     * ```
     *
     */
    address: string;
    /**
     * Set the dry run mode. Dry run mode doesn't add the logs to the database or publish a message to the message broker.
     */
    dryRun?: boolean | undefined;
    /**
     * Name of the ledger.
     */
    ledger: string;
};

export type V2AddMetadataToAccountResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Error
     */
    v2ErrorResponse?: errors.V2ErrorResponse | undefined;
};

/** @internal */
export namespace V2AddMetadataToAccountRequest$ {
    export type Inbound = {
        "Idempotency-Key"?: string | undefined;
        RequestBody: Record<string, string>;
        address: string;
        dryRun?: boolean | undefined;
        ledger: string;
    };

    export const inboundSchema: z.ZodType<V2AddMetadataToAccountRequest, z.ZodTypeDef, Inbound> = z
        .object({
            "Idempotency-Key": z.string().optional(),
            RequestBody: z.record(z.string()),
            address: z.string(),
            dryRun: z.boolean().optional(),
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                ...(v["Idempotency-Key"] === undefined
                    ? null
                    : { idempotencyKey: v["Idempotency-Key"] }),
                requestBody: v.RequestBody,
                address: v.address,
                ...(v.dryRun === undefined ? null : { dryRun: v.dryRun }),
                ledger: v.ledger,
            };
        });

    export type Outbound = {
        "Idempotency-Key"?: string | undefined;
        RequestBody: Record<string, string>;
        address: string;
        dryRun?: boolean | undefined;
        ledger: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2AddMetadataToAccountRequest> =
        z
            .object({
                idempotencyKey: z.string().optional(),
                requestBody: z.record(z.string()),
                address: z.string(),
                dryRun: z.boolean().optional(),
                ledger: z.string(),
            })
            .transform((v) => {
                return {
                    ...(v.idempotencyKey === undefined
                        ? null
                        : { "Idempotency-Key": v.idempotencyKey }),
                    RequestBody: v.requestBody,
                    address: v.address,
                    ...(v.dryRun === undefined ? null : { dryRun: v.dryRun }),
                    ledger: v.ledger,
                };
            });
}

/** @internal */
export namespace V2AddMetadataToAccountResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        V2ErrorResponse?: errors.V2ErrorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<V2AddMetadataToAccountResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            V2ErrorResponse: errors.V2ErrorResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.V2ErrorResponse === undefined
                    ? null
                    : { v2ErrorResponse: v.V2ErrorResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        V2ErrorResponse?: errors.V2ErrorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2AddMetadataToAccountResponse> =
        z
            .object({
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                v2ErrorResponse: errors.V2ErrorResponse$.outboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                    ...(v.v2ErrorResponse === undefined
                        ? null
                        : { V2ErrorResponse: v.v2ErrorResponse }),
                };
            });
}