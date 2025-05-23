// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"mockserver/internal/sdk/utils"
	"time"
)

type V3BankAccount struct {
	AccountNumber   *string                       `json:"accountNumber,omitempty"`
	Country         *string                       `json:"country,omitempty"`
	CreatedAt       time.Time                     `json:"createdAt"`
	Iban            *string                       `json:"iban,omitempty"`
	ID              string                        `json:"id"`
	Metadata        map[string]string             `json:"metadata,omitempty"`
	Name            string                        `json:"name"`
	RelatedAccounts []V3BankAccountRelatedAccount `json:"relatedAccounts,omitempty"`
	SwiftBicCode    *string                       `json:"swiftBicCode,omitempty"`
}

func (v V3BankAccount) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(v, "", false)
}

func (v *V3BankAccount) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &v, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *V3BankAccount) GetAccountNumber() *string {
	if o == nil {
		return nil
	}
	return o.AccountNumber
}

func (o *V3BankAccount) GetCountry() *string {
	if o == nil {
		return nil
	}
	return o.Country
}

func (o *V3BankAccount) GetCreatedAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.CreatedAt
}

func (o *V3BankAccount) GetIban() *string {
	if o == nil {
		return nil
	}
	return o.Iban
}

func (o *V3BankAccount) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *V3BankAccount) GetMetadata() map[string]string {
	if o == nil {
		return nil
	}
	return o.Metadata
}

func (o *V3BankAccount) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *V3BankAccount) GetRelatedAccounts() []V3BankAccountRelatedAccount {
	if o == nil {
		return nil
	}
	return o.RelatedAccounts
}

func (o *V3BankAccount) GetSwiftBicCode() *string {
	if o == nil {
		return nil
	}
	return o.SwiftBicCode
}
