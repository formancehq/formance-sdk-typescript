/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetInstanceRequest extends SpeakeasyBase {
    /**
     * The instance id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instanceID" })
    instanceID: string;
}

export class GetInstanceResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * General error
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    /**
     * The workflow instance
     */
    @SpeakeasyMetadata()
    getWorkflowInstanceResponse?: shared.GetWorkflowInstanceResponse;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
