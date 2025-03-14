# CreateTransferInitiationResponse

## Example Usage

```typescript
import { CreateTransferInitiationResponse } from "@formance/formance-sdk/sdk/models/operations";
import { TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: CreateTransferInitiationResponse = {
  contentType: "<value>",
  statusCode: 304,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  transferInitiationResponse: {
    data: {
      amount: BigInt("536178"),
      asset: "USD",
      connectorID: "<id>",
      createdAt: new Date("2025-01-16T19:20:54.956Z"),
      description: "gah runny vanish sugary woot",
      destinationAccountID: "<id>",
      error: "<value>",
      id: "XXX",
      initialAmount: BigInt("258684"),
      reference: "<value>",
      scheduledAt: new Date("2025-07-19T13:06:13.194Z"),
      sourceAccountID: "<id>",
      status: TransferInitiationStatus.WaitingForValidation,
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