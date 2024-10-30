# GetReconciliationResponse

## Example Usage

```typescript
import { GetReconciliationResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetReconciliationResponse = {
  contentType: "<value>",
  reconciliationResponse: {
    data: {
      createdAt: new Date("2021-01-01T00:00:00.000Z"),
      driftBalances: {
        "key": BigInt("63553"),
      },
      id: "XXX",
      ledgerBalances: {
        "key": BigInt("208253"),
      },
      paymentsBalances: {
        "key": BigInt("932394"),
      },
      policyID: "XXX",
      reconciledAtLedger: new Date("2021-01-01T00:00:00.000Z"),
      reconciledAtPayments: new Date("2021-01-01T00:00:00.000Z"),
      status: "COMPLETED",
    },
  },
  statusCode: 208,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `reconciliationResponse`                                                              | [shared.ReconciliationResponse](../../../sdk/models/shared/reconciliationresponse.md) | :heavy_minus_sign:                                                                    | OK                                                                                    |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |