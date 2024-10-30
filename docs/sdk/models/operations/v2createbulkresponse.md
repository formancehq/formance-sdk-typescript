# V2CreateBulkResponse

## Example Usage

```typescript
import { V2CreateBulkResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2CreateBulkResponse = {
  contentType: "<value>",
  statusCode: 102,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2BulkResponse: {
    data: [
      {
        data: {
          id: BigInt("318569"),
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
          timestamp: new Date("2024-01-02T11:33:45.485Z"),
        },
        responseType: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `v2BulkResponse`                                                      | [shared.V2BulkResponse](../../../sdk/models/shared/v2bulkresponse.md) | :heavy_minus_sign:                                                    | OK                                                                    |