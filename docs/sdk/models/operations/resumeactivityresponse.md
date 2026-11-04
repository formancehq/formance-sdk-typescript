# ResumeActivityResponse

## Example Usage

```typescript
import { ResumeActivityResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ResumeActivityResponse = {
  contentType: "<value>",
  statusCode: 873422,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `error`                                                               | [orchestration.ErrorT](../../../sdk/models/orchestration/errort.md)   | :heavy_minus_sign:                                                    | General error                                                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |