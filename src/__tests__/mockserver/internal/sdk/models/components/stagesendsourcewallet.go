// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type StageSendSourceWallet struct {
	Balance *string `json:"balance,omitempty"`
	ID      string  `json:"id"`
}

func (o *StageSendSourceWallet) GetBalance() *string {
	if o == nil {
		return nil
	}
	return o.Balance
}

func (o *StageSendSourceWallet) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}
