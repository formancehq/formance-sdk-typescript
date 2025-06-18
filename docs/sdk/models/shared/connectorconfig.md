# ConnectorConfig


## Supported Types

### `shared.AdyenConfig`

```typescript
const value: shared.AdyenConfig = {
  apiKey: "XXX",
  hmacKey: "XXX",
  liveEndpointPrefix: "XXX",
  name: "My Adyen Account",
  pollingPeriod: "60s",
};
```

### `shared.AtlarConfig`

```typescript
const value: shared.AtlarConfig = {
  accessKey: "XXX",
  baseUrl: "https://api.example.com",
  name: "My Atlar Account",
  pageSize: 50,
  pollingPeriod: "60s",
  secret: "XXX",
  transferInitiationStatusPollingPeriod: "60s",
};
```

### `shared.BankingCircleConfig`

```typescript
const value: shared.BankingCircleConfig = {
  authorizationEndpoint: "XXX",
  endpoint: "XXX",
  name: "My Banking Circle Account",
  password: "XXX",
  pollingPeriod: "60s",
  userCertificate: "XXX",
  userCertificateKey: "XXX",
  username: "XXX",
};
```

### `shared.CurrencyCloudConfig`

```typescript
const value: shared.CurrencyCloudConfig = {
  apiKey: "XXX",
  endpoint: "XXX",
  loginID: "XXX",
  name: "My CurrencyCloud Account",
  pollingPeriod: "60s",
};
```

### `shared.DummyPayConfig`

```typescript
const value: shared.DummyPayConfig = {
  directory: "/tmp/dummypay",
  filePollingPeriod: "60s",
  name: "My DummyPay Account",
};
```

### `shared.GenericConfig`

```typescript
const value: shared.GenericConfig = {
  apiKey: "XXX",
  endpoint: "XXX",
  name: "My Generic Account",
  pollingPeriod: "60s",
};
```

### `shared.MangoPayConfig`

```typescript
const value: shared.MangoPayConfig = {
  apiKey: "XXX",
  clientID: "XXX",
  endpoint: "XXX",
  name: "My MangoPay Account",
  pollingPeriod: "60s",
};
```

### `shared.ModulrConfig`

```typescript
const value: shared.ModulrConfig = {
  apiKey: "XXX",
  apiSecret: "XXX",
  endpoint: "XXX",
  name: "My Modulr Account",
  pollingPeriod: "60s",
};
```

### `shared.MoneycorpConfig`

```typescript
const value: shared.MoneycorpConfig = {
  apiKey: "XXX",
  clientID: "XXX",
  endpoint: "XXX",
  name: "My Moneycorp Account",
  pollingPeriod: "60s",
};
```

### `shared.StripeConfig`

```typescript
const value: shared.StripeConfig = {
  apiKey: "XXX",
  name: "My Stripe Account",
  pageSize: 50,
  pollingPeriod: "60s",
};
```

### `shared.WiseConfig`

```typescript
const value: shared.WiseConfig = {
  apiKey: "XXX",
  name: "My Wise Account",
  pollingPeriod: "60s",
};
```

