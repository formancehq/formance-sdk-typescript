/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../errors";
import * as shared from "../shared";
import * as z from "zod";

export type GetBalancesAggregatedRequest = {
    /**
     * Filter balances involving given account, either as source or destination.
     */
    address?: string | undefined;
    /**
     * Name of the ledger.
     */
    ledger: string;
    /**
     * Use insertion date instead of effective date
     */
    useInsertionDate?: boolean | undefined;
};

export type GetBalancesAggregatedResponse = {
    /**
     * OK
     */
    aggregateBalancesResponse?: shared.AggregateBalancesResponse | undefined;
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Error
     */
    errorResponse?: errors.ErrorResponse | undefined;
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
export namespace GetBalancesAggregatedRequest$ {
    export type Inbound = {
        address?: string | undefined;
        ledger: string;
        use_insertion_date?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<GetBalancesAggregatedRequest, z.ZodTypeDef, Inbound> = z
        .object({
            address: z.string().optional(),
            ledger: z.string(),
            use_insertion_date: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                ledger: v.ledger,
                ...(v.use_insertion_date === undefined
                    ? null
                    : { useInsertionDate: v.use_insertion_date }),
            };
        });

    export type Outbound = {
        address?: string | undefined;
        ledger: string;
        use_insertion_date?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalancesAggregatedRequest> = z
        .object({
            address: z.string().optional(),
            ledger: z.string(),
            useInsertionDate: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                ledger: v.ledger,
                ...(v.useInsertionDate === undefined
                    ? null
                    : { use_insertion_date: v.useInsertionDate }),
            };
        });
}

/** @internal */
export namespace GetBalancesAggregatedResponse$ {
    export type Inbound = {
        AggregateBalancesResponse?: shared.AggregateBalancesResponse$.Inbound | undefined;
        ContentType: string;
        ErrorResponse?: errors.ErrorResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetBalancesAggregatedResponse, z.ZodTypeDef, Inbound> = z
        .object({
            AggregateBalancesResponse: shared.AggregateBalancesResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            ErrorResponse: errors.ErrorResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.AggregateBalancesResponse === undefined
                    ? null
                    : { aggregateBalancesResponse: v.AggregateBalancesResponse }),
                contentType: v.ContentType,
                ...(v.ErrorResponse === undefined ? null : { errorResponse: v.ErrorResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        AggregateBalancesResponse?: shared.AggregateBalancesResponse$.Outbound | undefined;
        ContentType: string;
        ErrorResponse?: errors.ErrorResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalancesAggregatedResponse> =
        z
            .object({
                aggregateBalancesResponse:
                    shared.AggregateBalancesResponse$.outboundSchema.optional(),
                contentType: z.string(),
                errorResponse: errors.ErrorResponse$.outboundSchema.optional(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
            })
            .transform((v) => {
                return {
                    ...(v.aggregateBalancesResponse === undefined
                        ? null
                        : { AggregateBalancesResponse: v.aggregateBalancesResponse }),
                    ContentType: v.contentType,
                    ...(v.errorResponse === undefined ? null : { ErrorResponse: v.errorResponse }),
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                };
            });
}
