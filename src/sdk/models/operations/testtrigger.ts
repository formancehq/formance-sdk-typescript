/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as errors from "../../../sdk/models/errors";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class TestTriggerRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: Record<string, any>;

    /**
     * The trigger id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=triggerID" })
    triggerID: string;
}

export class TestTriggerResponse extends SpeakeasyBase {
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
     * General error
     */
    @SpeakeasyMetadata()
    v2Error?: errors.V2Error;

    /**
     * Test a trigger
     */
    @SpeakeasyMetadata()
    v2TestTriggerResponse?: shared.V2TestTriggerResponse;
}
