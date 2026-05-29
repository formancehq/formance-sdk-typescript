# GetTransactionsResponse

## Example Usage

```typescript
import { GetTransactionsResponse } from "@formance/formance-sdk/sdk/models/wallets";

let value: GetTransactionsResponse = {
  cursor: {
    data: [],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                              | [wallets.GetTransactionsResponseCursor](../../../sdk/models/wallets/gettransactionsresponsecursor.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |