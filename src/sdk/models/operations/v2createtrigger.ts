/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as errors from "../../../sdk/models/errors";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class V2CreateTriggerResponse extends SpeakeasyBase {
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
     * Created trigger
     */
    @SpeakeasyMetadata()
    v2CreateTriggerResponse?: shared.V2CreateTriggerResponse;

    /**
     * General error
     */
    @SpeakeasyMetadata()
    v2Error?: errors.V2Error;
}
