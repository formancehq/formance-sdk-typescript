// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type GetManyConfigsRequest struct {
	// Optional filter by endpoint URL
	Endpoint *string `queryParam:"style=form,explode=true,name=endpoint"`
	// Optional filter by Config ID
	ID *string `queryParam:"style=form,explode=true,name=id"`
}

func (o *GetManyConfigsRequest) GetEndpoint() *string {
	if o == nil {
		return nil
	}
	return o.Endpoint
}

func (o *GetManyConfigsRequest) GetID() *string {
	if o == nil {
		return nil
	}
	return o.ID
}

type GetManyConfigsResponse struct {
	// OK
	ConfigsResponse *components.ConfigsResponse
	HTTPMeta        components.HTTPMetadata `json:"-"`
}

func (o *GetManyConfigsResponse) GetConfigsResponse() *components.ConfigsResponse {
	if o == nil {
		return nil
	}
	return o.ConfigsResponse
}

func (o *GetManyConfigsResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}
