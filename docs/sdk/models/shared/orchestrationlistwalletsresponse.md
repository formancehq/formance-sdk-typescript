# OrchestrationListWalletsResponse

## Example Usage

```typescript
import { OrchestrationListWalletsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: OrchestrationListWalletsResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2023-06-15T04:38:07.271Z"),
        id: "4d34cb8b-6008-410f-bd20-f42b14fa86c2",
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