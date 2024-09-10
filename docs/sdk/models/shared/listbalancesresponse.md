# ListBalancesResponse

## Example Usage

```typescript
import { ListBalancesResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ListBalancesResponse = {
  cursor: {
    data: [
      {
        name: "<value>",
      },
    ],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cursor`                                                                                      | [shared.ListBalancesResponseCursor](../../../sdk/models/shared/listbalancesresponsecursor.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |