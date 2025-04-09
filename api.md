# Store

## Orders

# User

# Messages

Types:

- <code><a href="./src/resources/messages/messages.ts">MessageCreateResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageCountTokensResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageCountTokensBetaResponse</a></code>

Methods:

- <code title="post /v1/messages">client.messages.<a href="./src/resources/messages/messages.ts">create</a>({ ...params }) -> MessageCreateResponse</code>
- <code title="post /v1/messages/count_tokens">client.messages.<a href="./src/resources/messages/messages.ts">countTokens</a>({ ...params }) -> MessageCountTokensResponse</code>
- <code title="post /v1/messages/count_tokens?beta=true">client.messages.<a href="./src/resources/messages/messages.ts">countTokensBeta</a>({ ...params }) -> MessageCountTokensBetaResponse</code>

## Batches

Types:

- <code><a href="./src/resources/messages/batches/batches.ts">BatchCreateResponse</a></code>
- <code><a href="./src/resources/messages/batches/batches.ts">BatchRetrieveResponse</a></code>
- <code><a href="./src/resources/messages/batches/batches.ts">BatchListResponse</a></code>
- <code><a href="./src/resources/messages/batches/batches.ts">BatchDeleteResponse</a></code>
- <code><a href="./src/resources/messages/batches/batches.ts">BatchCancelResponse</a></code>
- <code><a href="./src/resources/messages/batches/batches.ts">BatchCancelBetaResponse</a></code>
- <code><a href="./src/resources/messages/batches/batches.ts">BatchResultsResponse</a></code>
- <code><a href="./src/resources/messages/batches/batches.ts">BatchResultsBetaResponse</a></code>

Methods:

- <code title="post /v1/messages/batches">client.messages.batches.<a href="./src/resources/messages/batches/batches.ts">create</a>({ ...params }) -> BatchCreateResponse</code>
- <code title="get /v1/messages/batches/{message_batch_id}">client.messages.batches.<a href="./src/resources/messages/batches/batches.ts">retrieve</a>(messageBatchID, { ...params }) -> BatchRetrieveResponse</code>
- <code title="get /v1/messages/batches">client.messages.batches.<a href="./src/resources/messages/batches/batches.ts">list</a>({ ...params }) -> BatchListResponse</code>
- <code title="delete /v1/messages/batches/{message_batch_id}">client.messages.batches.<a href="./src/resources/messages/batches/batches.ts">delete</a>(messageBatchID, { ...params }) -> BatchDeleteResponse</code>
- <code title="post /v1/messages/batches/{message_batch_id}/cancel">client.messages.batches.<a href="./src/resources/messages/batches/batches.ts">cancel</a>(messageBatchID, { ...params }) -> BatchCancelResponse</code>
- <code title="post /v1/messages/batches/{message_batch_id}/cancel?beta=true">client.messages.batches.<a href="./src/resources/messages/batches/batches.ts">cancelBeta</a>(messageBatchID, { ...params }) -> BatchCancelBetaResponse</code>
- <code title="get /v1/messages/batches/{message_batch_id}/results">client.messages.batches.<a href="./src/resources/messages/batches/batches.ts">results</a>(messageBatchID, { ...params }) -> BatchResultsResponse</code>
- <code title="get /v1/messages/batches/{message_batch_id}/results?beta=true">client.messages.batches.<a href="./src/resources/messages/batches/batches.ts">resultsBeta</a>(messageBatchID, { ...params }) -> BatchResultsBetaResponse</code>

### BetaTrue

Types:

- <code><a href="./src/resources/messages/batches/beta-true.ts">BetaTrueRetrieveResponse</a></code>
- <code><a href="./src/resources/messages/batches/beta-true.ts">BetaTrueDeleteResponse</a></code>

Methods:

- <code title="get /v1/messages/batches/{message_batch_id}?beta=true">client.messages.batches.betaTrue.<a href="./src/resources/messages/batches/beta-true.ts">retrieve</a>(messageBatchID, { ...params }) -> BetaTrueRetrieveResponse</code>
- <code title="delete /v1/messages/batches/{message_batch_id}?beta=true">client.messages.batches.betaTrue.<a href="./src/resources/messages/batches/beta-true.ts">delete</a>(messageBatchID, { ...params }) -> BetaTrueDeleteResponse</code>

## BatchesBetaTrue

Types:

- <code><a href="./src/resources/messages/batches-beta-true.ts">BatchesBetaTrueCreateResponse</a></code>
- <code><a href="./src/resources/messages/batches-beta-true.ts">BatchesBetaTrueListResponse</a></code>

Methods:

- <code title="post /v1/messages/batches?beta=true">client.messages.batchesBetaTrue.<a href="./src/resources/messages/batches-beta-true.ts">create</a>({ ...params }) -> BatchesBetaTrueCreateResponse</code>
- <code title="get /v1/messages/batches?beta=true">client.messages.batchesBetaTrue.<a href="./src/resources/messages/batches-beta-true.ts">list</a>({ ...params }) -> BatchesBetaTrueListResponse</code>

# Complete

Types:

- <code><a href="./src/resources/complete.ts">CompleteCreateResponse</a></code>

Methods:

- <code title="post /v1/complete">client.complete.<a href="./src/resources/complete.ts">create</a>({ ...params }) -> CompleteCreateResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelRetrieveResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelRetrieveBetaResponse</a></code>

Methods:

- <code title="get /v1/models/{model_id}">client.models.<a href="./src/resources/models.ts">retrieve</a>(modelID, { ...params }) -> ModelRetrieveResponse</code>
- <code title="get /v1/models">client.models.<a href="./src/resources/models.ts">list</a>({ ...params }) -> ModelListResponse</code>
- <code title="get /v1/models/{model_id}?beta=true">client.models.<a href="./src/resources/models.ts">retrieveBeta</a>(modelID, { ...params }) -> ModelRetrieveBetaResponse</code>

# MessagesBetaTrue

Types:

- <code><a href="./src/resources/messages-beta-true.ts">MessagesBetaTrueCreateResponse</a></code>

Methods:

- <code title="post /v1/messages?beta=true">client.messagesBetaTrue.<a href="./src/resources/messages-beta-true.ts">create</a>({ ...params }) -> MessagesBetaTrueCreateResponse</code>

# ModelsBetaTrue

Types:

- <code><a href="./src/resources/models-beta-true.ts">ModelsBetaTrueListResponse</a></code>

Methods:

- <code title="get /v1/models?beta=true">client.modelsBetaTrue.<a href="./src/resources/models-beta-true.ts">list</a>({ ...params }) -> ModelsBetaTrueListResponse</code>

# SamPlopPlop
