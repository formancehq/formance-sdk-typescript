# ConfigsResponse

## Example Usage

```typescript
import { ConfigsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigsResponse = {
  cursor: {
    data: [
      {
        active: true,
        createdAt: new Date("2023-01-16T01:27:31.910Z"),
        endpoint: "https://example.com",
        eventTypes: [
          "TYPE1",
          "TYPE2",
        ],
        id: "9801d712-950a-4012-82c1-272b7e0d2e58",
        secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
        updatedAt: new Date("2025-03-10T03:16:11.634Z"),
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