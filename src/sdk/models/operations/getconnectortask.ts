/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetConnectorTaskRequest = {
    /**
     * The name of the connector.
     */
    connector: shared.Connector;
    /**
     * The task ID.
     */
    taskId: string;
};

export type GetConnectorTaskResponse = {
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
export const GetConnectorTaskRequest$inboundSchema: z.ZodType<
    GetConnectorTaskRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    connector: shared.Connector$inboundSchema,
    taskId: z.string(),
});

/** @internal */
export type GetConnectorTaskRequest$Outbound = {
    connector: string;
    taskId: string;
};

/** @internal */
export const GetConnectorTaskRequest$outboundSchema: z.ZodType<
    GetConnectorTaskRequest$Outbound,
    z.ZodTypeDef,
    GetConnectorTaskRequest
> = z.object({
    connector: shared.Connector$outboundSchema,
    taskId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConnectorTaskRequest$ {
    /** @deprecated use `GetConnectorTaskRequest$inboundSchema` instead. */
    export const inboundSchema = GetConnectorTaskRequest$inboundSchema;
    /** @deprecated use `GetConnectorTaskRequest$outboundSchema` instead. */
    export const outboundSchema = GetConnectorTaskRequest$outboundSchema;
    /** @deprecated use `GetConnectorTaskRequest$Outbound` instead. */
    export type Outbound = GetConnectorTaskRequest$Outbound;
}

/** @internal */
export const GetConnectorTaskResponse$inboundSchema: z.ZodType<
    GetConnectorTaskResponse,
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
export type GetConnectorTaskResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskResponse?: shared.TaskResponse$Outbound | undefined;
};

/** @internal */
export const GetConnectorTaskResponse$outboundSchema: z.ZodType<
    GetConnectorTaskResponse$Outbound,
    z.ZodTypeDef,
    GetConnectorTaskResponse
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
export namespace GetConnectorTaskResponse$ {
    /** @deprecated use `GetConnectorTaskResponse$inboundSchema` instead. */
    export const inboundSchema = GetConnectorTaskResponse$inboundSchema;
    /** @deprecated use `GetConnectorTaskResponse$outboundSchema` instead. */
    export const outboundSchema = GetConnectorTaskResponse$outboundSchema;
    /** @deprecated use `GetConnectorTaskResponse$Outbound` instead. */
    export type Outbound = GetConnectorTaskResponse$Outbound;
}
