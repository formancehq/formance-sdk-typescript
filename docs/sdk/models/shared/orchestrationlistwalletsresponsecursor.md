# OrchestrationListWalletsResponseCursor

## Example Usage

```typescript
import { OrchestrationListWalletsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: OrchestrationListWalletsResponseCursor = {
  data: [
    {
      createdAt: new Date("2023-12-15T09:38:31.047Z"),
      id: "da6669ee-0213-458a-bbef-adc4e0047a1a",
      ledger: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [shared.OrchestrationWallet](../../../sdk/models/shared/orchestrationwallet.md)[] | :heavy_check_mark:                                                                | N/A                                                                               |                                                                                   |
| `hasMore`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | N/A                                                                               | false                                                                             |
| `next`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |
| `pageSize`                                                                        | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               | 15                                                                                |
| `previous`                                                                        | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                                      |