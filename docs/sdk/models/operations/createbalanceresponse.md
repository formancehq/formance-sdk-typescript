# CreateBalanceResponse

## Example Usage

```typescript
import { CreateBalanceResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: CreateBalanceResponse = {
  contentType: "<value>",
  statusCode: 389772,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `createBalanceResponse`                                                             | [shared.CreateBalanceResponse](../../../sdk/models/shared/createbalanceresponse.md) | :heavy_minus_sign:                                                                  | Created balance                                                                     |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |