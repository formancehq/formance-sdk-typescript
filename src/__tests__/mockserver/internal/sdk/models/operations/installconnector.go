// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type InstallConnectorRequest struct {
	ConnectorConfig components.ConnectorConfig `request:"mediaType=application/json"`
	// The name of the connector.
	Connector components.Connector `pathParam:"style=simple,explode=false,name=connector"`
}

func (o *InstallConnectorRequest) GetConnectorConfig() components.ConnectorConfig {
	if o == nil {
		return components.ConnectorConfig{}
	}
	return o.ConnectorConfig
}

func (o *InstallConnectorRequest) GetConnector() components.Connector {
	if o == nil {
		return components.Connector("")
	}
	return o.Connector
}

type InstallConnectorResponse struct {
	// OK
	ConnectorResponse *components.ConnectorResponse
	HTTPMeta          components.HTTPMetadata `json:"-"`
}

func (o *InstallConnectorResponse) GetConnectorResponse() *components.ConnectorResponse {
	if o == nil {
		return nil
	}
	return o.ConnectorResponse
}

func (o *InstallConnectorResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}
