# OrchestrationListWalletsResponse

## Example Usage

```typescript
import { OrchestrationListWalletsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: OrchestrationListWalletsResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2022-09-17T22:36:22.436Z"),
        id: "9d08086a-1840-4394-8260-71f93f5f0642",
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