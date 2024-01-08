/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as errors from "../../../sdk/models/errors";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class DeactivateConfigRequest extends SpeakeasyBase {
    /**
     * Config ID
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class DeactivateConfigResponse extends SpeakeasyBase {
    /**
     * Config successfully deactivated.
     */
    @SpeakeasyMetadata()
    configResponse?: shared.ConfigResponse;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

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

    /**
     * Error
     */
    @SpeakeasyMetadata()
    webhooksErrorResponse?: errors.WebhooksErrorResponse;
}
