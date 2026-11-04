# V2Exporter

## Example Usage

```typescript
import { V2Exporter } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2Exporter = {
  config: {
    "key": "<value>",
    "key1": "<value>",
  },
  createdAt: new Date("2025-01-11T12:26:44.794Z"),
  driver: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `config`                                                                                      | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | Driver-specific configuration for the exporter                                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `driver`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the exporter driver to use                                                            |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |