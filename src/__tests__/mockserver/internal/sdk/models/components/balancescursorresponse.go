// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type BalancesCursorResponseCursor struct {
	Data     []map[string]map[string]int64 `json:"data"`
	HasMore  bool                          `json:"hasMore"`
	Next     *string                       `json:"next,omitempty"`
	PageSize int64                         `json:"pageSize"`
	Previous *string                       `json:"previous,omitempty"`
}

func (o *BalancesCursorResponseCursor) GetData() []map[string]map[string]int64 {
	if o == nil {
		return []map[string]map[string]int64{}
	}
	return o.Data
}

func (o *BalancesCursorResponseCursor) GetHasMore() bool {
	if o == nil {
		return false
	}
	return o.HasMore
}

func (o *BalancesCursorResponseCursor) GetNext() *string {
	if o == nil {
		return nil
	}
	return o.Next
}

func (o *BalancesCursorResponseCursor) GetPageSize() int64 {
	if o == nil {
		return 0
	}
	return o.PageSize
}

func (o *BalancesCursorResponseCursor) GetPrevious() *string {
	if o == nil {
		return nil
	}
	return o.Previous
}

type BalancesCursorResponse struct {
	Cursor BalancesCursorResponseCursor `json:"cursor"`
}

func (o *BalancesCursorResponse) GetCursor() BalancesCursorResponseCursor {
	if o == nil {
		return BalancesCursorResponseCursor{}
	}
	return o.Cursor
}
