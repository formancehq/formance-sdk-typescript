// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"mockserver/internal/sdk/utils"
)

type ModulrConfig struct {
	APIKey    string  `json:"apiKey"`
	APISecret string  `json:"apiSecret"`
	Endpoint  *string `json:"endpoint,omitempty"`
	Name      string  `json:"name"`
	// The frequency at which the connector will try to fetch new BalanceTransaction objects from Modulr API.
	//
	PollingPeriod *string `default:"120s" json:"pollingPeriod"`
	Provider      *string `default:"Modulr" json:"provider"`
}

func (m ModulrConfig) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(m, "", false)
}

func (m *ModulrConfig) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &m, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *ModulrConfig) GetAPIKey() string {
	if o == nil {
		return ""
	}
	return o.APIKey
}

func (o *ModulrConfig) GetAPISecret() string {
	if o == nil {
		return ""
	}
	return o.APISecret
}

func (o *ModulrConfig) GetEndpoint() *string {
	if o == nil {
		return nil
	}
	return o.Endpoint
}

func (o *ModulrConfig) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *ModulrConfig) GetPollingPeriod() *string {
	if o == nil {
		return nil
	}
	return o.PollingPeriod
}

func (o *ModulrConfig) GetProvider() *string {
	if o == nil {
		return nil
	}
	return o.Provider
}
