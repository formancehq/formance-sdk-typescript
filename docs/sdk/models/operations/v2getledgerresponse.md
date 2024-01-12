# V2GetLedgerResponse


## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `v2ErrorResponse`                                                     | *errors.V2ErrorResponse*                                              | :heavy_minus_sign:                                                    | Error                                                                 |
| `v2Ledger`                                                            | [shared.V2Ledger](../../../sdk/models/shared/v2ledger.md)             | :heavy_minus_sign:                                                    | OK                                                                    |