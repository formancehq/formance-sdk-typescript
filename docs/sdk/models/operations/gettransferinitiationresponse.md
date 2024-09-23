# GetTransferInitiationResponse

## Example Usage

```typescript
import { GetTransferInitiationResponse } from "@formance/formance-sdk/sdk/models/operations";
import { TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: GetTransferInitiationResponse = {
  contentType: "<value>",
  statusCode: 799203,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  transferInitiationResponse: {
    data: {
      amount: BigInt("630448"),
      asset: "USD",
      connectorID: "<value>",
      createdAt: new Date("2024-08-16T05:16:14.427Z"),
      description: "Focused static middleware",
      destinationAccountID: "<value>",
      error: "<value>",
      id: "XXX",
      initialAmount: BigInt("13236"),
      reference: "<value>",
      scheduledAt: new Date("2023-01-16T13:37:49.640Z"),
      sourceAccountID: "<value>",
      status: TransferInitiationStatus.Processing,
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