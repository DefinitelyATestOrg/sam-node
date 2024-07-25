# Shared

Types:

- <code><a href="./src/resources/shared.ts">Order</a></code>

# Pets

Types:

- <code><a href="./src/resources/pets.ts">APIResponse</a></code>
- <code><a href="./src/resources/pets.ts">Pet</a></code>
- <code><a href="./src/resources/pets.ts">PetFindByStatusResponse</a></code>
- <code><a href="./src/resources/pets.ts">PetFindByTagsResponse</a></code>

Methods:

- <code title="post /pet/{petId}">client.pets.<a href="./src/resources/pets.ts">create</a>(petId, { ...params }) -> void</code>
- <code title="get /pet/{petId}">client.pets.<a href="./src/resources/pets.ts">retrieve</a>(petId) -> Pet</code>
- <code title="put /pet">client.pets.<a href="./src/resources/pets.ts">update</a>({ ...params }) -> Pet</code>
- <code title="delete /pet/{petId}">client.pets.<a href="./src/resources/pets.ts">delete</a>(petId, { ...params }) -> void</code>
- <code title="get /pet/findByStatus">client.pets.<a href="./src/resources/pets.ts">findByStatus</a>({ ...params }) -> PetFindByStatusResponse</code>
- <code title="get /pet/findByTags">client.pets.<a href="./src/resources/pets.ts">findByTags</a>({ ...params }) -> PetFindByTagsResponse</code>
- <code title="post /pet/{petId}/uploadImage">client.pets.<a href="./src/resources/pets.ts">uploadImage</a>(petId, { ...params }) -> APIResponse</code>

# Stores

Types:

- <code><a href="./src/resources/stores/stores.ts">StoreInventoryResponse</a></code>

Methods:

- <code title="post /store/order">client.stores.<a href="./src/resources/stores/stores.ts">createOrder</a>({ ...params }) -> Order</code>
- <code title="get /store/inventory">client.stores.<a href="./src/resources/stores/stores.ts">inventory</a>() -> StoreInventoryResponse</code>

## Orders

# Store

## Orders

Methods:

- <code title="get /store/order/{orderId}">client.store.orders.<a href="./src/resources/store/orders.ts">retrieve</a>(orderId) -> Order</code>
- <code title="delete /store/order/{orderId}">client.store.orders.<a href="./src/resources/store/orders.ts">delete</a>(orderId) -> void</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">User</a></code>
- <code><a href="./src/resources/users.ts">UserLoginResponse</a></code>

Methods:

- <code title="post /user">client.users.<a href="./src/resources/users.ts">create</a>({ ...params }) -> void</code>
- <code title="get /user/{username}">client.users.<a href="./src/resources/users.ts">retrieve</a>(username) -> User</code>
- <code title="put /user/{username}">client.users.<a href="./src/resources/users.ts">update</a>({ ...params }) -> void</code>
- <code title="delete /user/{username}">client.users.<a href="./src/resources/users.ts">delete</a>(username) -> void</code>
- <code title="post /user/createWithList">client.users.<a href="./src/resources/users.ts">createWithList</a>([ ...body ]) -> User</code>
- <code title="get /user/login">client.users.<a href="./src/resources/users.ts">login</a>({ ...params }) -> string</code>
- <code title="get /user/logout">client.users.<a href="./src/resources/users.ts">logout</a>() -> void</code>
