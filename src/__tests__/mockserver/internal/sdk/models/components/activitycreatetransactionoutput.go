// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type ActivityCreateTransactionOutput struct {
	Data OrchestrationTransaction `json:"data"`
}

func (o *ActivityCreateTransactionOutput) GetData() OrchestrationTransaction {
	if o == nil {
		return OrchestrationTransaction{}
	}
	return o.Data
}
