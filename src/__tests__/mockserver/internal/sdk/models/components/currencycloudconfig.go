// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"mockserver/internal/sdk/utils"
)

type CurrencyCloudConfig struct {
	APIKey string `json:"apiKey"`
	// The endpoint to use for the API. Defaults to https://devapi.currencycloud.com
	Endpoint *string `json:"endpoint,omitempty"`
	// Username of the API Key holder
	LoginID string `json:"loginID"`
	Name    string `json:"name"`
	// The frequency at which the connector will fetch transactions
	PollingPeriod *string `default:"120s" json:"pollingPeriod"`
}

func (c CurrencyCloudConfig) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(c, "", false)
}

func (c *CurrencyCloudConfig) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &c, "", false, true); err != nil {
		return err
	}
	return nil
}

func (o *CurrencyCloudConfig) GetAPIKey() string {
	if o == nil {
		return ""
	}
	return o.APIKey
}

func (o *CurrencyCloudConfig) GetEndpoint() *string {
	if o == nil {
		return nil
	}
	return o.Endpoint
}

func (o *CurrencyCloudConfig) GetLoginID() string {
	if o == nil {
		return ""
	}
	return o.LoginID
}

func (o *CurrencyCloudConfig) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *CurrencyCloudConfig) GetPollingPeriod() *string {
	if o == nil {
		return nil
	}
	return o.PollingPeriod
}
