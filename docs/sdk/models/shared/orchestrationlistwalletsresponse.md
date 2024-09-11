# OrchestrationListWalletsResponse

## Example Usage

```typescript
import { OrchestrationListWalletsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: OrchestrationListWalletsResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2024-06-20T12:36:13.279Z"),
        id: "bb675fd5-e60b-4375-ad4f-6fbee41f3331",
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
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                              | [shared.OrchestrationListWalletsResponseCursor](../../../sdk/models/shared/orchestrationlistwalletsresponsecursor.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |