// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type V2StageSendDestinationPayment struct {
	Psp string `json:"psp"`
}

func (o *V2StageSendDestinationPayment) GetPsp() string {
	if o == nil {
		return ""
	}
	return o.Psp
}
