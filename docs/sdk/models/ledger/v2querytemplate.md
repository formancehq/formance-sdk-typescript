# V2QueryTemplate

## Example Usage

```typescript
import { V2QueryTemplate } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2QueryTemplate = {
  params: {
    resource: "transactions",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `body`                                                                                        | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `params`                                                                                      | *ledger.V2QueryParams*                                                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `resource`                                                                                    | [ledger.V2QueryResource](../../../sdk/models/ledger/v2queryresource.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `vars`                                                                                        | Record<string, [ledger.V2QueryTemplateVar](../../../sdk/models/ledger/v2querytemplatevar.md)> | :heavy_minus_sign:                                                                            | N/A                                                                                           |