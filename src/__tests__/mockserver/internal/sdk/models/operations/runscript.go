// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type RunScriptRequest struct {
	Script components.Script `request:"mediaType=application/json"`
	// Name of the ledger.
	Ledger string `pathParam:"style=simple,explode=false,name=ledger"`
	// Set the preview mode. Preview mode doesn't add the logs to the database or publish a message to the message broker.
	Preview *bool `queryParam:"style=form,explode=true,name=preview"`
}

func (o *RunScriptRequest) GetScript() components.Script {
	if o == nil {
		return components.Script{}
	}
	return o.Script
}

func (o *RunScriptRequest) GetLedger() string {
	if o == nil {
		return ""
	}
	return o.Ledger
}

func (o *RunScriptRequest) GetPreview() *bool {
	if o == nil {
		return nil
	}
	return o.Preview
}

type RunScriptResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// On success, it will return a 200 status code, and the resulting transaction under the `transaction` field.
	//
	// On failure, it will also return a 200 status code, and the following fields:
	//   - `details`: contains a URL. When there is an error parsing Numscript, the result can be difficult to read—the provided URL will render the error in an easy-to-read format.
	//   - `errorCode` and `error_code` (deprecated): contains the string code of the error
	//   - `errorMessage` and `error_message` (deprecated): contains a human-readable indication of what went wrong, for example that an account had insufficient funds, or that there was an error in the provided Numscript.
	//
	ScriptResponse *components.ScriptResponse
}

func (o *RunScriptResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *RunScriptResponse) GetScriptResponse() *components.ScriptResponse {
	if o == nil {
		return nil
	}
	return o.ScriptResponse
}
