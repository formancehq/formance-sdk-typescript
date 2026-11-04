# TemplateUsage

## Example Usage

```typescript
import { TemplateUsage } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: TemplateUsage = {
  count: 336315,
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `count`                                                                                                                                                | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | Number of times the template has been invoked. `0` means never invoked (or the<br/>usagebuilder has not yet caught up to any invocation on this replica).<br/> |
| `lastUsed`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                          | :heavy_minus_sign:                                                                                                                                     | Timestamp of the most recent invocation (ISO 8601). Absent when `count` is 0.<br/>                                                                     |