# SegmentType

Constraint for a variable segment in an account type pattern. Null means
any non-empty string is accepted. The
`type` field discriminates the constraint kind; only `regex` carries a
value.


## Example Usage

```typescript
import { SegmentType } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: SegmentType = {
  regex: "[A-Z]{2}[0-9]{14}",
  type: "bytes",
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       | Example                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `regex`                                                                                                                                           | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Regular expression to match the segment against. Required when `type` is `regex`.                                                                 | [A-Z]{2}[0-9]{14}                                                                                                                                 |
| `type`                                                                                                                                            | [ledgerV3.SegmentTypeType](../../../sdk/models/ledgerV3/segmenttypetype.md)                                                                       | :heavy_check_mark:                                                                                                                                | regex: custom regular expression (requires `regex`).<br/>uuid: RFC 4122 UUID format.<br/>uint64: decimal uint64.<br/>bytes: hex-encoded bytes (even length).<br/> |                                                                                                                                                   |