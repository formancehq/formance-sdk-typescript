# ListReconciliationsResponse

## Example Usage

```typescript
import { ListReconciliationsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ListReconciliationsResponse = {
  contentType: "<value>",
  reconciliationsCursorResponse: {
    cursor: {
      data: [
        {
          createdAt: new Date("2021-01-01T00:00:00.000Z"),
          driftBalances: {
            "key": BigInt("918547"),
          },
          id: "XXX",
          ledgerBalances: {
            "key": BigInt("120120"),
          },
          paymentsBalances: {
            "key": BigInt("334474"),
          },
          policyID: "XXX",
          reconciledAtLedger: new Date("2021-01-01T00:00:00.000Z"),
          reconciledAtPayments: new Date("2021-01-01T00:00:00.000Z"),
          status: "COMPLETED",
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
  statusCode: 100,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `reconciliationsCursorResponse`                                                                     | [shared.ReconciliationsCursorResponse](../../../sdk/models/shared/reconciliationscursorresponse.md) | :heavy_minus_sign:                                                                                  | OK                                                                                                  |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |