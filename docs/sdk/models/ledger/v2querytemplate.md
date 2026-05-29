# V2QueryTemplate

## Example Usage

```typescript
import { V2QueryTemplate } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2QueryTemplate = {
  v2QueryParams: {
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    pageSize: 100,
    sort: "id:desc",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `v2QueryParams`                                                                               | *ledger.V2QueryParams*                                                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `v2QueryResource`                                                                             | [ledger.V2QueryResource](../../../sdk/models/ledger/v2queryresource.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `body`                                                                                        | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `vars`                                                                                        | Record<string, [ledger.V2QueryTemplateVar](../../../sdk/models/ledger/v2querytemplatevar.md)> | :heavy_minus_sign:                                                                            | N/A                                                                                           |