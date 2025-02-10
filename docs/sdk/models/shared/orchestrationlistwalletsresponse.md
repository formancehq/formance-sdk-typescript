# OrchestrationListWalletsResponse

## Example Usage

```typescript
import { OrchestrationListWalletsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: OrchestrationListWalletsResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2023-10-27T14:09:54.597Z"),
        id: "e2a1fbd9-7987-4c22-a651-dc8f1c453c2d",
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