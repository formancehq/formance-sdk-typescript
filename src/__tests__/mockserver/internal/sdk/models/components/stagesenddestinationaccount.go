// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type StageSendDestinationAccount struct {
	ID     string  `json:"id"`
	Ledger *string `json:"ledger,omitempty"`
}

func (o *StageSendDestinationAccount) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *StageSendDestinationAccount) GetLedger() *string {
	if o == nil {
		return nil
	}
	return o.Ledger
}
