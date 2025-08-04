# V2GetLedgerResponse

## Example Usage

```typescript
import { V2GetLedgerResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2GetLedgerResponse = {
  contentType: "<value>",
  statusCode: 75578,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |
| `v2GetLedgerResponse`                                                           | [shared.V2GetLedgerResponse](../../../sdk/models/shared/v2getledgerresponse.md) | :heavy_minus_sign:                                                              | OK                                                                              |