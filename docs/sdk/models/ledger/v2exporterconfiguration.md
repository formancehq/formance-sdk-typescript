# V2ExporterConfiguration

## Example Usage

```typescript
import { V2ExporterConfiguration } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2ExporterConfiguration = {
  config: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  driver: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `config`                                       | Record<string, *any*>                          | :heavy_check_mark:                             | Driver-specific configuration for the exporter |
| `driver`                                       | *string*                                       | :heavy_check_mark:                             | Name of the exporter driver to use             |