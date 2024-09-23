# V2BulkResponse

## Example Usage

```typescript
import { V2BulkResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2BulkResponse = {
  data: [
    {
      data: {
        id: BigInt("159146"),
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
        timestamp: new Date("2023-10-26T20:38:50.367Z"),
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