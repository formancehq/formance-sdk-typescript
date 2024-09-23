# ListTransferInitiationsResponse

## Example Usage

```typescript
import { ListTransferInitiationsResponse } from "@formance/formance-sdk/sdk/models/operations";
import { TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: ListTransferInitiationsResponse = {
  contentType: "<value>",
  statusCode: 959167,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  transferInitiationsCursor: {
    cursor: {
      data: [
        {
          amount: BigInt("458139"),
          asset: "USD",
          connectorID: "<value>",
          createdAt: new Date("2023-10-10T17:14:50.945Z"),
          description: "Synchronised high-level throughput",
          destinationAccountID: "<value>",
          error: "<value>",
          id: "XXX",
          initialAmount: BigInt("575751"),
          reference: "<value>",
          scheduledAt: new Date("2024-06-18T13:27:30.035Z"),
          sourceAccountID: "<value>",
          status: TransferInitiationStatus.PartiallyReversed,
          type: TransferInitiationType.Payout,
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

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `transferInitiationsCursor`                                                                 | [shared.TransferInitiationsCursor](../../../sdk/models/shared/transferinitiationscursor.md) | :heavy_minus_sign:                                                                          | OK                                                                                          |