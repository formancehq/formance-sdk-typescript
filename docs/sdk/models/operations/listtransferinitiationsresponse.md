# ListTransferInitiationsResponse

## Example Usage

```typescript
import { ListTransferInitiationsResponse } from "@formance/formance-sdk/sdk/models/operations";
import { TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: ListTransferInitiationsResponse = {
  contentType: "<value>",
  statusCode: 103,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  transferInitiationsCursor: {
    cursor: {
      data: [
        {
          amount: BigInt("739884"),
          asset: "USD",
          connectorID: "<id>",
          createdAt: new Date("2025-09-11T06:37:56.079Z"),
          description: "why however complicated form rundown phew trolley hmph",
          destinationAccountID: "<id>",
          error: "<value>",
          id: "XXX",
          initialAmount: BigInt("97258"),
          provider: "<value>",
          reference: "<value>",
          scheduledAt: new Date("2024-06-29T13:31:25.620Z"),
          sourceAccountID: "<id>",
          status: TransferInitiationStatus.AskRetried,
          type: TransferInitiationType.Transfer,
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