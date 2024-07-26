/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetConnectorTaskV1Request = {
    /**
     * The name of the connector.
     */
    connector: shared.Connector;
    /**
     * The connector ID.
     */
    connectorId: string;
    /**
     * The task ID.
     */
    taskId: string;
};

export type GetConnectorTaskV1Response = {
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
     * OK
     */
    taskResponse?: shared.TaskResponse | undefined;
};

/** @internal */
export const GetConnectorTaskV1Request$inboundSchema: z.ZodType<
    GetConnectorTaskV1Request,
    z.ZodTypeDef,
    unknown
> = z.object({
    connector: shared.Connector$inboundSchema,
    connectorId: z.string(),
    taskId: z.string(),
});

/** @internal */
export type GetConnectorTaskV1Request$Outbound = {
    connector: string;
    connectorId: string;
    taskId: string;
};

/** @internal */
export const GetConnectorTaskV1Request$outboundSchema: z.ZodType<
    GetConnectorTaskV1Request$Outbound,
    z.ZodTypeDef,
    GetConnectorTaskV1Request
> = z.object({
    connector: shared.Connector$outboundSchema,
    connectorId: z.string(),
    taskId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConnectorTaskV1Request$ {
    /** @deprecated use `GetConnectorTaskV1Request$inboundSchema` instead. */
    export const inboundSchema = GetConnectorTaskV1Request$inboundSchema;
    /** @deprecated use `GetConnectorTaskV1Request$outboundSchema` instead. */
    export const outboundSchema = GetConnectorTaskV1Request$outboundSchema;
    /** @deprecated use `GetConnectorTaskV1Request$Outbound` instead. */
    export type Outbound = GetConnectorTaskV1Request$Outbound;
}

/** @internal */
export const GetConnectorTaskV1Response$inboundSchema: z.ZodType<
    GetConnectorTaskV1Response,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        TaskResponse: shared.TaskResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            TaskResponse: "taskResponse",
        });
    });

/** @internal */
export type GetConnectorTaskV1Response$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskResponse?: shared.TaskResponse$Outbound | undefined;
};

/** @internal */
export const GetConnectorTaskV1Response$outboundSchema: z.ZodType<
    GetConnectorTaskV1Response$Outbound,
    z.ZodTypeDef,
    GetConnectorTaskV1Response
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        taskResponse: shared.TaskResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            taskResponse: "TaskResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConnectorTaskV1Response$ {
    /** @deprecated use `GetConnectorTaskV1Response$inboundSchema` instead. */
    export const inboundSchema = GetConnectorTaskV1Response$inboundSchema;
    /** @deprecated use `GetConnectorTaskV1Response$outboundSchema` instead. */
    export const outboundSchema = GetConnectorTaskV1Response$outboundSchema;
    /** @deprecated use `GetConnectorTaskV1Response$Outbound` instead. */
    export type Outbound = GetConnectorTaskV1Response$Outbound;
}
