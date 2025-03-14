// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type V2ListTriggersRequest struct {
	// Parameter used in pagination requests.
	// Set to the value of next for the next page of results.
	// Set to the value of previous for the previous page of results.
	// No other parameters can be set when this parameter is set.
	//
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	// search by name
	Name *string `queryParam:"style=form,explode=true,name=name"`
	// The maximum number of results to return per page.
	//
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

func (o *V2ListTriggersRequest) GetCursor() *string {
	if o == nil {
		return nil
	}
	return o.Cursor
}

func (o *V2ListTriggersRequest) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *V2ListTriggersRequest) GetPageSize() *int64 {
	if o == nil {
		return nil
	}
	return o.PageSize
}

type V2ListTriggersResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// List of triggers
	V2ListTriggersResponse *components.V2ListTriggersResponse
}

func (o *V2ListTriggersResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *V2ListTriggersResponse) GetV2ListTriggersResponse() *components.V2ListTriggersResponse {
	if o == nil {
		return nil
	}
	return o.V2ListTriggersResponse
}
