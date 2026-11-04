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
| `body`                                                                                        | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The filter expression the query evaluates                                                     |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Human-readable description of what the query returns                                          |
| `params`                                                                                      | *ledger.V2QueryParams*                                                                        | :heavy_minus_sign:                                                                            | Parameters applied when running a query template                                              |
| `resource`                                                                                    | [ledger.V2QueryResource](../../../sdk/models/ledger/v2queryresource.md)                       | :heavy_minus_sign:                                                                            | The resource a query template targets                                                         |
| `vars`                                                                                        | Record<string, [ledger.V2QueryTemplateVar](../../../sdk/models/ledger/v2querytemplatevar.md)> | :heavy_minus_sign:                                                                            | Variables the query accepts, keyed by variable name                                           |