# ConfigsResponse

## Example Usage

```typescript
import { ConfigsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigsResponse = {
  cursor: {
    data: [
      {
        active: true,
        createdAt: new Date("2024-02-10T05:09:54.223Z"),
        endpoint: "https://example.com",
        eventTypes: [
          "TYPE1",
          "TYPE2",
        ],
        id: "cea3d6b7-f123-4332-9b33-36f54153c124",
        secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
        updatedAt: new Date("2025-07-16T13:12:18.198Z"),
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