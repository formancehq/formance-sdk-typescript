# UpdateClientResponse

## Example Usage

```typescript
import { UpdateClientResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: UpdateClientResponse = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `createClientResponse`                                                            | [shared.CreateClientResponse](../../../sdk/models/shared/createclientresponse.md) | :heavy_minus_sign:                                                                | Updated client                                                                    |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |