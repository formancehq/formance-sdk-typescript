# V2ListLedgersResponse

## Example Usage

```typescript
import { V2ListLedgersResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ListLedgersResponse = {
  contentType: "<value>",
  statusCode: 929297,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2LedgerListResponse: {
    cursor: {
      data: [
        {
          addedAt: new Date("2022-12-16T03:38:15.811Z"),
          bucket: "<value>",
          metadata: {
            "admin": "true",
          },
          name: "<value>",
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
| `v2LedgerListResponse`                                                            | [shared.V2LedgerListResponse](../../../sdk/models/shared/v2ledgerlistresponse.md) | :heavy_minus_sign:                                                                | OK                                                                                |