# CreateTransferInitiationResponse

## Example Usage

```typescript
import { CreateTransferInitiationResponse } from "@formance/formance-sdk/sdk/models/operations";
import { TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: CreateTransferInitiationResponse = {
  contentType: "<value>",
  statusCode: 716860,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  transferInitiationResponse: {
    data: {
      amount: BigInt("396060"),
      asset: "USD",
      connectorID: "<value>",
      createdAt: new Date("2023-09-12T16:50:31.874Z"),
      description: "Digitized bifurcated infrastructure",
      destinationAccountID: "<value>",
      error: "<value>",
      id: "XXX",
      initialAmount: BigInt("355613"),
      reference: "<value>",
      scheduledAt: new Date("2024-10-27T17:07:18.797Z"),
      sourceAccountID: "<value>",
      status: TransferInitiationStatus.ReverseFailed,
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