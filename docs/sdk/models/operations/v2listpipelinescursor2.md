# V2ListPipelinesCursor2

## Example Usage

```typescript
import { V2ListPipelinesCursor2 } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ListPipelinesCursor2 = {
  data: [],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `data`                                                          | [shared.V2Pipeline](../../../sdk/models/shared/v2pipeline.md)[] | :heavy_check_mark:                                              | N/A                                                             |                                                                 |
| `hasMore`                                                       | *boolean*                                                       | :heavy_check_mark:                                              | N/A                                                             | false                                                           |
| `next`                                                          | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |                                                                 |
| `pageSize`                                                      | *number*                                                        | :heavy_check_mark:                                              | N/A                                                             | 15                                                              |
| `previous`                                                      | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                    |