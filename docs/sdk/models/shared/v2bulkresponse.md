# V2BulkResponse

## Example Usage

```typescript
import { V2BulkResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2BulkResponse = {
  data: [
    {
      data: {
        id: BigInt("771226"),
        metadata: {
          "admin": "true",
        },
        postings: [
          {
            amount: BigInt("100"),
            asset: "COIN",
            destination: "users:002",
            source: "users:001",
          },
        ],
        reference: "ref:001",
        reverted: false,
        timestamp: new Date("2022-01-14T08:09:00.404Z"),
      },
      responseType: "<value>",
    },
  ],
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `data`                         | *shared.V2BulkElementResult*[] | :heavy_check_mark:             | N/A                            |