// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type V2ActivityCreateTransactionOutput struct {
	Data []OrchestrationV2Transaction `json:"data"`
}

func (o *V2ActivityCreateTransactionOutput) GetData() []OrchestrationV2Transaction {
	if o == nil {
		return []OrchestrationV2Transaction{}
	}
	return o.Data
}
