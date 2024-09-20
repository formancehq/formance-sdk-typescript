# V2BulkResponse

## Example Usage

```typescript
import { V2BulkResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2BulkResponse = {
  data: [
    {
      data: {
        id: BigInt("288398"),
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
        timestamp: new Date("2022-03-19T05:02:34.319Z"),
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