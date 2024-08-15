# GetManyConfigsRequest

## Example Usage

```typescript
import { GetManyConfigsRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: GetManyConfigsRequest = {
    endpoint: "https://example.com",
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `endpoint`                           | *string*                             | :heavy_minus_sign:                   | Optional filter by endpoint URL      | https://example.com                  |
| `id`                                 | *string*                             | :heavy_minus_sign:                   | Optional filter by Config ID         | 4997257d-dfb6-445b-929c-cbe2ab182818 |