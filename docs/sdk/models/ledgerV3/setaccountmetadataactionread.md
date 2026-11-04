# SetAccountMetadataActionRead

See SetMetadataActionRead for the literal-vs-CEL and `type` semantics.


## Example Usage

```typescript
import { SetAccountMetadataActionRead } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: SetAccountMetadataActionRead = {
  account: "70500939",
  key: "<key>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `account`          | *string*           | :heavy_check_mark: | N/A                |
| `key`              | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *string*           | :heavy_minus_sign: | N/A                |
| `value`            | *string*           | :heavy_minus_sign: | N/A                |
| `valueExpr`        | *string*           | :heavy_minus_sign: | N/A                |