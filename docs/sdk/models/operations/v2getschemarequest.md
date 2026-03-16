# V2GetSchemaRequest

## Example Usage

```typescript
import { V2GetSchemaRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2GetSchemaRequest = {
  ledger: "ledger001",
  version: "v1.0.0",
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `ledger`            | *string*            | :heavy_check_mark:  | Name of the ledger. | ledger001           |
| `version`           | *string*            | :heavy_check_mark:  | Schema version.     | v1.0.0              |