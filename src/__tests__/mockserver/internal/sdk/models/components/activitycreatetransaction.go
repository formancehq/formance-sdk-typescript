// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type ActivityCreateTransaction struct {
	Data   *OrchestrationPostTransaction `json:"data,omitempty"`
	Ledger *string                       `json:"ledger,omitempty"`
}

func (o *ActivityCreateTransaction) GetData() *OrchestrationPostTransaction {
	if o == nil {
		return nil
	}
	return o.Data
}

func (o *ActivityCreateTransaction) GetLedger() *string {
	if o == nil {
		return nil
	}
	return o.Ledger
}
