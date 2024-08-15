# GetTransferInitiationResponse

## Example Usage

```typescript
import { GetTransferInitiationResponse } from "@formance/formance-sdk/sdk/models/operations";
import { TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: GetTransferInitiationResponse = {
    contentType: "<value>",
    statusCode: 83112,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
    transferInitiationResponse: {
        data: {
            amount: BigInt("929297"),
            asset: "USD",
            connectorID: "<value>",
            createdAt: new Date("2022-11-01T09:06:32.789Z"),
            description: "Fully-configurable 24 hour moratorium",
            destinationAccountID: "<value>",
            error: "<value>",
            id: "XXX",
            initialAmount: BigInt("842342"),
            reference: "<value>",
            scheduledAt: new Date("2022-05-25T10:48:39.464Z"),
            sourceAccountID: "<value>",
            status: TransferInitiationStatus.AskReversed,
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