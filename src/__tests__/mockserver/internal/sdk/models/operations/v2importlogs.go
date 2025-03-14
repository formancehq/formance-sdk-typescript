// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type V2ImportLogsRequest struct {
	RequestBody *string `request:"mediaType=application/octet-stream"`
	// Name of the ledger.
	Ledger string `pathParam:"style=simple,explode=false,name=ledger"`
}

func (o *V2ImportLogsRequest) GetRequestBody() *string {
	if o == nil {
		return nil
	}
	return o.RequestBody
}

func (o *V2ImportLogsRequest) GetLedger() string {
	if o == nil {
		return ""
	}
	return o.Ledger
}

type V2ImportLogsResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
}

func (o *V2ImportLogsResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}
