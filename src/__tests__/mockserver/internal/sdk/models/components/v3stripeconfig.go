// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"mockserver/internal/sdk/utils"
)

type V3StripeConfig struct {
	APIKey        string  `json:"apiKey"`
	Name          string  `json:"name"`
	PageSize      *int64  `default:"25" json:"pageSize"`
	PollingPeriod *string `default:"2m" json:"pollingPeriod"`
	Provider      *string `default:"Stripe" json:"provider"`
}

func (v V3StripeConfig) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(v, "", false)
}

func (v *V3StripeConfig) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &v, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *V3StripeConfig) GetAPIKey() string {
	if o == nil {
		return ""
	}
	return o.APIKey
}

func (o *V3StripeConfig) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *V3StripeConfig) GetPageSize() *int64 {
	if o == nil {
		return nil
	}
	return o.PageSize
}

func (o *V3StripeConfig) GetPollingPeriod() *string {
	if o == nil {
		return nil
	}
	return o.PollingPeriod
}

func (o *V3StripeConfig) GetProvider() *string {
	if o == nil {
		return nil
	}
	return o.Provider
}
