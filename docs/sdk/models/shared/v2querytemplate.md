# V2QueryTemplate

## Example Usage

```typescript
import { V2QueryTemplate } from "@formance/formance-sdk/sdk/models/shared";

let value: V2QueryTemplate = {
  params: {
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    pageSize: 100,
    sort: "id:desc",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `body`                                                                                        | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `params`                                                                                      | *shared.V2QueryParams*                                                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `resource`                                                                                    | [shared.V2QueryResource](../../../sdk/models/shared/v2queryresource.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `vars`                                                                                        | Record<string, [shared.V2QueryTemplateVar](../../../sdk/models/shared/v2querytemplatevar.md)> | :heavy_minus_sign:                                                                            | N/A                                                                                           |