# V2GetLedgerInfoResponse

## Example Usage

```typescript
import { V2GetLedgerInfoResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2GetLedgerInfoResponse = {
  contentType: "<value>",
  statusCode: 456150,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2LedgerInfoResponse: {
    data: {
      name: "ledger001",
      storage: {
        migrations: [
          {
            name: "migrations:001",
            version: 11,
          },
        ],
      },
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
| `v2LedgerInfoResponse`                                                            | [shared.V2LedgerInfoResponse](../../../sdk/models/shared/v2ledgerinforesponse.md) | :heavy_minus_sign:                                                                | OK                                                                                |