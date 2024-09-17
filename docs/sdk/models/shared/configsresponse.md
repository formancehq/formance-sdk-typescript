# ConfigsResponse

## Example Usage

```typescript
import { ConfigsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigsResponse = {
  cursor: {
    data: [
      {
        active: true,
        createdAt: new Date("2024-07-19T22:10:09.923Z"),
        endpoint: "https://example.com",
        eventTypes: [
          "TYPE1",
          "TYPE2",
        ],
        id: "5db3adeb-d5da-4ea4-8506-a8aa94c02644",
        secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
        updatedAt: new Date("2024-04-08T10:20:22.223Z"),
      },
    ],
    hasMore: false,
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `cursor`                                                                            | [shared.ConfigsResponseCursor](../../../sdk/models/shared/configsresponsecursor.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |