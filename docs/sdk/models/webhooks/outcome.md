# Outcome

How the attempt ended. A retryable failure is retried, a permanent failure is not

## Example Usage

```typescript
import { Outcome } from "@formance/formance-sdk/sdk/models/webhooks";

let value: Outcome = "succeeded";
```

## Values

```typescript
"succeeded" | "retryable_failure" | "permanent_failure"
```