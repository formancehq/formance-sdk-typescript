// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type V2ActivityGetAccount struct {
	ID     string `json:"id"`
	Ledger string `json:"ledger"`
}

func (o *V2ActivityGetAccount) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *V2ActivityGetAccount) GetLedger() string {
	if o == nil {
		return ""
	}
	return o.Ledger
}
