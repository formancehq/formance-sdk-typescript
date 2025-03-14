# OrchestrationListWalletsResponse

## Example Usage

```typescript
import { OrchestrationListWalletsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: OrchestrationListWalletsResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2025-06-15T14:42:11.992Z"),
        id: "9306add0-353c-4c8f-92e1-2b196becd048",
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