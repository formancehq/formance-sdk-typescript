// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type ReadStatsRequest struct {
	// name of the ledger
	Ledger string `pathParam:"style=simple,explode=false,name=ledger"`
}

func (o *ReadStatsRequest) GetLedger() string {
	if o == nil {
		return ""
	}
	return o.Ledger
}

type ReadStatsResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// OK
	StatsResponse *components.StatsResponse
}

func (o *ReadStatsResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *ReadStatsResponse) GetStatsResponse() *components.StatsResponse {
	if o == nil {
		return nil
	}
	return o.StatsResponse
}
