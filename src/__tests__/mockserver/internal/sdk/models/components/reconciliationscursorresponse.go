// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type ReconciliationsCursorResponseCursor struct {
	Data     []Reconciliation `json:"data"`
	HasMore  bool             `json:"hasMore"`
	Next     *string          `json:"next,omitempty"`
	PageSize int64            `json:"pageSize"`
	Previous *string          `json:"previous,omitempty"`
}

func (o *ReconciliationsCursorResponseCursor) GetData() []Reconciliation {
	if o == nil {
		return []Reconciliation{}
	}
	return o.Data
}

func (o *ReconciliationsCursorResponseCursor) GetHasMore() bool {
	if o == nil {
		return false
	}
	return o.HasMore
}

func (o *ReconciliationsCursorResponseCursor) GetNext() *string {
	if o == nil {
		return nil
	}
	return o.Next
}

func (o *ReconciliationsCursorResponseCursor) GetPageSize() int64 {
	if o == nil {
		return 0
	}
	return o.PageSize
}

func (o *ReconciliationsCursorResponseCursor) GetPrevious() *string {
	if o == nil {
		return nil
	}
	return o.Previous
}

// ReconciliationsCursorResponse - OK
type ReconciliationsCursorResponse struct {
	Cursor ReconciliationsCursorResponseCursor `json:"cursor"`
}

func (o *ReconciliationsCursorResponse) GetCursor() ReconciliationsCursorResponseCursor {
	if o == nil {
		return ReconciliationsCursorResponseCursor{}
	}
	return o.Cursor
}
