# GetTransferInitiationResponse

## Example Usage

```typescript
import { GetTransferInitiationResponse } from "@formance/formance-sdk/sdk/models/operations";
import { TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: GetTransferInitiationResponse = {
  contentType: "<value>",
  statusCode: 414263,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  transferInitiationResponse: {
    data: {
      amount: BigInt("918236"),
      asset: "USD",
      connectorID: "<value>",
      createdAt: new Date("2022-03-12T07:20:09.120Z"),
      description: "Down-sized needs-based knowledge base",
      destinationAccountID: "<value>",
      error: "<value>",
      id: "XXX",
      initialAmount: BigInt("566602"),
      reference: "<value>",
      scheduledAt: new Date("2024-08-06T03:39:28.235Z"),
      sourceAccountID: "<value>",
      status: TransferInitiationStatus.Failed,
      type: TransferInitiationType.Payout,
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `transferInitiationResponse`                                                                  | [shared.TransferInitiationResponse](../../../sdk/models/shared/transferinitiationresponse.md) | :heavy_minus_sign:                                                                            | OK                                                                                            |