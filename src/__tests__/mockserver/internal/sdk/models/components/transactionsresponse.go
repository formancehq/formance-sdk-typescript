// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type TransactionsResponse struct {
	Data []Transaction `json:"data"`
}

func (o *TransactionsResponse) GetData() []Transaction {
	if o == nil {
		return []Transaction{}
	}
	return o.Data
}
