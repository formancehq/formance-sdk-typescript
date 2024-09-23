# DebitWalletResponse

## Example Usage

```typescript
import { DebitWalletResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: DebitWalletResponse = {
  contentType: "<value>",
  statusCode: 990345,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `debitWalletResponse`                                                           | [shared.DebitWalletResponse](../../../sdk/models/shared/debitwalletresponse.md) | :heavy_minus_sign:                                                              | Wallet successfully debited as a pending hold                                   |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |