// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type UpdateConnectorConfigV1Request struct {
	ConnectorConfig components.ConnectorConfig `request:"mediaType=application/json"`
	// The name of the connector.
	Connector components.Connector `pathParam:"style=simple,explode=false,name=connector"`
	// The connector ID.
	ConnectorID string `pathParam:"style=simple,explode=false,name=connectorId"`
}

func (o *UpdateConnectorConfigV1Request) GetConnectorConfig() components.ConnectorConfig {
	if o == nil {
		return components.ConnectorConfig{}
	}
	return o.ConnectorConfig
}

func (o *UpdateConnectorConfigV1Request) GetConnectorConfigAdyen() *components.AdyenConfig {
	return o.GetConnectorConfig().AdyenConfig
}

func (o *UpdateConnectorConfigV1Request) GetConnectorConfigAtlar() *components.AtlarConfig {
	return o.GetConnectorConfig().AtlarConfig
}

func (o *UpdateConnectorConfigV1Request) GetConnectorConfigBankingcircle() *components.BankingCircleConfig {
	return o.GetConnectorConfig().BankingCircleConfig
}

func (o *UpdateConnectorConfigV1Request) GetConnectorConfigCurrencycloud() *components.CurrencyCloudConfig {
	return o.GetConnectorConfig().CurrencyCloudConfig
}

func (o *UpdateConnectorConfigV1Request) GetConnectorConfigDummypay() *components.DummyPayConfig {
	return o.GetConnectorConfig().DummyPayConfig
}

func (o *UpdateConnectorConfigV1Request) GetConnectorConfigGeneric() *components.GenericConfig {
	return o.GetConnectorConfig().GenericConfig
}

func (o *UpdateConnectorConfigV1Request) GetConnectorConfigMangopay() *components.MangoPayConfig {
	return o.GetConnectorConfig().MangoPayConfig
}

func (o *UpdateConnectorConfigV1Request) GetConnectorConfigModulr() *components.ModulrConfig {
	return o.GetConnectorConfig().ModulrConfig
}

func (o *UpdateConnectorConfigV1Request) GetConnectorConfigMoneycorp() *components.MoneycorpConfig {
	return o.GetConnectorConfig().MoneycorpConfig
}

func (o *UpdateConnectorConfigV1Request) GetConnectorConfigStripe() *components.StripeConfig {
	return o.GetConnectorConfig().StripeConfig
}

func (o *UpdateConnectorConfigV1Request) GetConnectorConfigWise() *components.WiseConfig {
	return o.GetConnectorConfig().WiseConfig
}

func (o *UpdateConnectorConfigV1Request) GetConnector() components.Connector {
	if o == nil {
		return components.Connector("")
	}
	return o.Connector
}

func (o *UpdateConnectorConfigV1Request) GetConnectorID() string {
	if o == nil {
		return ""
	}
	return o.ConnectorID
}

type UpdateConnectorConfigV1Response struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
}

func (o *UpdateConnectorConfigV1Response) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}
