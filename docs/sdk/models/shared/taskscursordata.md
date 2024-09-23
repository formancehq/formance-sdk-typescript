# TasksCursorData

## Example Usage

```typescript
import { PaymentStatus, TasksCursorData } from "@formance/formance-sdk/sdk/models/shared";

let value: TasksCursorData = {
  connectorID: "<value>",
  createdAt: new Date("2022-02-06T14:44:43.529Z"),
  descriptor: {
    account: "53223757",
    name: "<value>",
  },
  id: "dd66ea18-5f09-4b4f-ade0-94da818af9ff",
  state: {},
  status: PaymentStatus.Refunded,
  updatedAt: new Date("2023-05-26T18:14:09.419Z"),
};
```

## Supported Types

### `shared.TaskStripe`

```typescript
const value: shared.TaskStripe = /* values here */
```

### `shared.TaskWise`

```typescript
const value: shared.TaskWise = /* values here */
```

### `shared.TaskCurrencyCloud`

```typescript
const value: shared.TaskCurrencyCloud = /* values here */
```

### `shared.TaskDummyPay`

```typescript
const value: shared.TaskDummyPay = /* values here */
```

### `shared.TaskModulr`

```typescript
const value: shared.TaskModulr = /* values here */
```

### `shared.TaskBankingCircle`

```typescript
const value: shared.TaskBankingCircle = /* values here */
```

### `shared.TaskMangoPay`

```typescript
const value: shared.TaskMangoPay = /* values here */
```

### `shared.TaskMoneycorp`

```typescript
const value: shared.TaskMoneycorp = /* values here */
```

