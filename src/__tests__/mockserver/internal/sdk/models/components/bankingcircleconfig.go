// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"mockserver/internal/sdk/utils"
)

type BankingCircleConfig struct {
	AuthorizationEndpoint string `json:"authorizationEndpoint"`
	Endpoint              string `json:"endpoint"`
	Name                  string `json:"name"`
	Password              string `json:"password"`
	// The frequency at which the connector will try to fetch new BalanceTransaction objects from Banking Circle API.
	//
	PollingPeriod      *string `default:"120s" json:"pollingPeriod"`
	Provider           *string `default:"Bankingcircle" json:"provider"`
	UserCertificate    string  `json:"userCertificate"`
	UserCertificateKey string  `json:"userCertificateKey"`
	Username           string  `json:"username"`
}

func (b BankingCircleConfig) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(b, "", false)
}

func (b *BankingCircleConfig) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &b, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *BankingCircleConfig) GetAuthorizationEndpoint() string {
	if o == nil {
		return ""
	}
	return o.AuthorizationEndpoint
}

func (o *BankingCircleConfig) GetEndpoint() string {
	if o == nil {
		return ""
	}
	return o.Endpoint
}

func (o *BankingCircleConfig) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *BankingCircleConfig) GetPassword() string {
	if o == nil {
		return ""
	}
	return o.Password
}

func (o *BankingCircleConfig) GetPollingPeriod() *string {
	if o == nil {
		return nil
	}
	return o.PollingPeriod
}

func (o *BankingCircleConfig) GetProvider() *string {
	if o == nil {
		return nil
	}
	return o.Provider
}

func (o *BankingCircleConfig) GetUserCertificate() string {
	if o == nil {
		return ""
	}
	return o.UserCertificate
}

func (o *BankingCircleConfig) GetUserCertificateKey() string {
	if o == nil {
		return ""
	}
	return o.UserCertificateKey
}

func (o *BankingCircleConfig) GetUsername() string {
	if o == nil {
		return ""
	}
	return o.Username
}
