# ListTransferInitiationsResponse

## Example Usage

```typescript
import { ListTransferInitiationsResponse } from "@formance/formance-sdk/sdk/models/operations";
import { TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: ListTransferInitiationsResponse = {
  contentType: "<value>",
  statusCode: 222443,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  transferInitiationsCursor: {
    cursor: {
      data: [
        {
          amount: BigInt("186193"),
          asset: "USD",
          connectorID: "<value>",
          createdAt: new Date("2022-08-28T17:59:00.140Z"),
          description: "User-centric local policy",
          destinationAccountID: "<value>",
          error: "<value>",
          id: "XXX",
          initialAmount: BigInt("452109"),
          reference: "<value>",
          scheduledAt: new Date("2023-06-22T13:01:41.966Z"),
          sourceAccountID: "<value>",
          status: TransferInitiationStatus.Reversed,
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