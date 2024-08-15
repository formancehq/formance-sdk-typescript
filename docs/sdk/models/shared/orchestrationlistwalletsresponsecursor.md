# OrchestrationListWalletsResponseCursor

## Example Usage

```typescript
import { OrchestrationListWalletsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: OrchestrationListWalletsResponseCursor = {
    data: [
        {
            createdAt: new Date("2023-02-15T06:11:50.364Z"),
            id: "f0642dac-7af5-415c-8413-aa63aae8d678",
            ledger: "<value>",
            metadata: {
                key: "<value>",
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