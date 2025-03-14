# GetTransferInitiationResponse

## Example Usage

```typescript
import { GetTransferInitiationResponse } from "@formance/formance-sdk/sdk/models/operations";
import { TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: GetTransferInitiationResponse = {
  contentType: "<value>",
  statusCode: 202,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  transferInitiationResponse: {
    data: {
      amount: BigInt("662505"),
      asset: "USD",
      connectorID: "<id>",
      createdAt: new Date("2023-09-27T16:26:45.665Z"),
      description: "fuss um unit grade soap sizzling huzzah like",
      destinationAccountID: "<id>",
      error: "<value>",
      id: "XXX",
      initialAmount: BigInt("274823"),
      reference: "<value>",
      scheduledAt: new Date("2024-10-11T02:01:44.166Z"),
      sourceAccountID: "<id>",
      status: TransferInitiationStatus.PartiallyReversed,
      type: TransferInitiationType.Transfer,
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