# Script

## Example Usage

```typescript
import { Script } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: Script = {
  plain: "<value>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `plain`                         | *string*                        | :heavy_check_mark:              | The numscript source code       |
| `vars`                          | Record<string, *string*>        | :heavy_minus_sign:              | Variables to pass to the script |