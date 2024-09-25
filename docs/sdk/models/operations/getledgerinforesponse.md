# GetLedgerInfoResponse

## Example Usage

```typescript
import { GetLedgerInfoResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetLedgerInfoResponse = {
  contentType: "<value>",
  ledgerInfoResponse: {
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
  statusCode: 203,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `ledgerInfoResponse`                                                          | [shared.LedgerInfoResponse](../../../sdk/models/shared/ledgerinforesponse.md) | :heavy_minus_sign:                                                            | OK                                                                            |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |