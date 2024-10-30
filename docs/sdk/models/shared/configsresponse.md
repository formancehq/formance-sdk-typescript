# ConfigsResponse

## Example Usage

```typescript
import { ConfigsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigsResponse = {
  cursor: {
    data: [
      {
        active: true,
        createdAt: new Date("2024-01-07T16:35:45.521Z"),
        endpoint: "https://example.com",
        eventTypes: [
          "TYPE1",
          "TYPE2",
        ],
        id: "5bfc9b74-0a27-4ae9-937a-3bc8d38ebc39",
        secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
        updatedAt: new Date("2023-12-24T04:08:16.291Z"),
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