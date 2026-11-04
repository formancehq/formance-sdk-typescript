# ScriptReference

## Example Usage

```typescript
import { ScriptReference } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: ScriptReference = {
  name: "<value>",
  version: "<value>",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                             | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Name of the numscript in the ledger's library                                                                                                      |
| `vars`                                                                                                                                             | Record<string, *string*>                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | Variables to pass to the referenced script                                                                                                         |
| `version`                                                                                                                                          | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Version selector: the literal `latest` or an exact full semver<br/>(`1.2.3`). Partial selectors such as `1` or `1.2` are read-only and<br/>rejected here.<br/> |