// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type Total struct {
	Relation *string `json:"relation,omitempty"`
	Value    *int64  `json:"value,omitempty"`
}

func (o *Total) GetRelation() *string {
	if o == nil {
		return nil
	}
	return o.Relation
}

func (o *Total) GetValue() *int64 {
	if o == nil {
		return nil
	}
	return o.Value
}

type ResponseCursor struct {
	Data     []map[string]any `json:"data,omitempty"`
	HasMore  *bool            `json:"hasMore,omitempty"`
	Next     *string          `json:"next,omitempty"`
	PageSize *int64           `json:"pageSize,omitempty"`
	Previous *string          `json:"previous,omitempty"`
	Total    *Total           `json:"total,omitempty"`
}

func (o *ResponseCursor) GetData() []map[string]any {
	if o == nil {
		return nil
	}
	return o.Data
}

func (o *ResponseCursor) GetHasMore() *bool {
	if o == nil {
		return nil
	}
	return o.HasMore
}

func (o *ResponseCursor) GetNext() *string {
	if o == nil {
		return nil
	}
	return o.Next
}

func (o *ResponseCursor) GetPageSize() *int64 {
	if o == nil {
		return nil
	}
	return o.PageSize
}

func (o *ResponseCursor) GetPrevious() *string {
	if o == nil {
		return nil
	}
	return o.Previous
}

func (o *ResponseCursor) GetTotal() *Total {
	if o == nil {
		return nil
	}
	return o.Total
}

type Response struct {
	Cursor *ResponseCursor `json:"cursor,omitempty"`
	// The payload
	Data map[string]any `json:"data,omitempty"`
}

func (o *Response) GetCursor() *ResponseCursor {
	if o == nil {
		return nil
	}
	return o.Cursor
}

func (o *Response) GetData() map[string]any {
	if o == nil {
		return nil
	}
	return o.Data
}
