# GetTransferInitiationResponse

## Example Usage

```typescript
import { GetTransferInitiationResponse } from "@formance/formance-sdk/sdk/models/operations";
import { TransferInitiationStatus, TransferInitiationType } from "@formance/formance-sdk/sdk/models/shared";

let value: GetTransferInitiationResponse = {
  contentType: "<value>",
  statusCode: 203,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  transferInitiationResponse: {
    data: {
      amount: BigInt("814967"),
      asset: "USD",
      connectorID: "<id>",
      createdAt: new Date("2024-12-16T02:21:59.446Z"),
      description:
        "furthermore jaggedly hence runny knavishly egg keenly grave incidentally righteously",
      destinationAccountID: "<id>",
      error: "<value>",
      id: "XXX",
      initialAmount: BigInt("879235"),
      reference: "<value>",
      scheduledAt: new Date("2023-08-19T20:54:27.100Z"),
      sourceAccountID: "<id>",
      status: TransferInitiationStatus.Failed,
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