# V2BulkResponse

## Example Usage

```typescript
import { V2BulkResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2BulkResponse = {
  data: [
    {
      errorCode: "<value>",
      errorDescription: "<value>",
      responseType: "<value>",
    },
  ],
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `data`                         | *shared.V2BulkElementResult*[] | :heavy_check_mark:             | N/A                            |