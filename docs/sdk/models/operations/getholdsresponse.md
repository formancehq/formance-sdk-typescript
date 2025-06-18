# GetHoldsResponse

## Example Usage

```typescript
import { GetHoldsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetHoldsResponse = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `getHoldsResponse`                                                        | [shared.GetHoldsResponse](../../../sdk/models/shared/getholdsresponse.md) | :heavy_minus_sign:                                                        | Holds                                                                     |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |