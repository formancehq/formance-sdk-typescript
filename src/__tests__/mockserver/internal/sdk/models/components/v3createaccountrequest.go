// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"mockserver/internal/sdk/utils"
	"time"
)

type V3CreateAccountRequest struct {
	AccountName  string            `json:"accountName"`
	ConnectorID  string            `json:"connectorID"`
	CreatedAt    time.Time         `json:"createdAt"`
	DefaultAsset *string           `json:"defaultAsset,omitempty"`
	Metadata     map[string]string `json:"metadata,omitempty"`
	Reference    string            `json:"reference"`
	Type         V3AccountTypeEnum `json:"type"`
}

func (v V3CreateAccountRequest) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(v, "", false)
}

func (v *V3CreateAccountRequest) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &v, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *V3CreateAccountRequest) GetAccountName() string {
	if o == nil {
		return ""
	}
	return o.AccountName
}

func (o *V3CreateAccountRequest) GetConnectorID() string {
	if o == nil {
		return ""
	}
	return o.ConnectorID
}

func (o *V3CreateAccountRequest) GetCreatedAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.CreatedAt
}

func (o *V3CreateAccountRequest) GetDefaultAsset() *string {
	if o == nil {
		return nil
	}
	return o.DefaultAsset
}

func (o *V3CreateAccountRequest) GetMetadata() map[string]string {
	if o == nil {
		return nil
	}
	return o.Metadata
}

func (o *V3CreateAccountRequest) GetReference() string {
	if o == nil {
		return ""
	}
	return o.Reference
}

func (o *V3CreateAccountRequest) GetType() V3AccountTypeEnum {
	if o == nil {
		return V3AccountTypeEnum("")
	}
	return o.Type
}
