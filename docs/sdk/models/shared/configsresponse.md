# ConfigsResponse

## Example Usage

```typescript
import { ConfigsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigsResponse = {
    cursor: {
        data: [
            {
                active: true,
                createdAt: new Date("2022-03-08T17:42:32.888Z"),
                endpoint: "https://example.com",
                eventTypes: ["TYPE1", "TYPE2"],
                id: "2e2ec09f-f8f0-4f81-aff3-477c13e902c1",
                secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
                updatedAt: new Date("2022-11-02T01:09:39.368Z"),
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