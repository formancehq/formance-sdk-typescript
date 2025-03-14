// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type V3ListPoolsRequest struct {
	// Parameter used in pagination requests. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set.
	//
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	// The number of items to return
	PageSize *int64         `queryParam:"style=form,explode=true,name=pageSize"`
	Query    map[string]any `queryParam:"serialization=json,name=query"`
}

func (o *V3ListPoolsRequest) GetCursor() *string {
	if o == nil {
		return nil
	}
	return o.Cursor
}

func (o *V3ListPoolsRequest) GetPageSize() *int64 {
	if o == nil {
		return nil
	}
	return o.PageSize
}

func (o *V3ListPoolsRequest) GetQuery() map[string]any {
	if o == nil {
		return nil
	}
	return o.Query
}

type V3ListPoolsResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// OK
	V3PoolsCursorResponse *components.V3PoolsCursorResponse
}

func (o *V3ListPoolsResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *V3ListPoolsResponse) GetV3PoolsCursorResponse() *components.V3PoolsCursorResponse {
	if o == nil {
		return nil
	}
	return o.V3PoolsCursorResponse
}
