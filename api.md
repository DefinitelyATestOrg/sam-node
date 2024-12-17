# Store

## Orders

Types:

- <code><a href="./src/resources/store/orders.ts">Order</a></code>

Methods:

- <code title="get /store/order/{orderId}">client.store.orders.<a href="./src/resources/store/orders.ts">retrieve</a>(orderId) -> Order</code>
- <code title="delete /store/order/{orderId}">client.store.orders.<a href="./src/resources/store/orders.ts">delete</a>(orderId) -> void</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">User</a></code>
- <code><a href="./src/resources/users.ts">UserLoginResponse</a></code>

Methods:

- <code title="post /user">client.users.<a href="./src/resources/users.ts">create</a>({ ...params }) -> User</code>
- <code title="get /user/{username}">client.users.<a href="./src/resources/users.ts">retrieve</a>(username) -> User</code>
- <code title="put /user/{username}">client.users.<a href="./src/resources/users.ts">update</a>({ ...params }) -> void</code>
- <code title="delete /user/{username}">client.users.<a href="./src/resources/users.ts">delete</a>(username) -> void</code>
- <code title="post /user/createWithList">client.users.<a href="./src/resources/users.ts">createWithList</a>([ ...body ]) -> User</code>
- <code title="get /user/login">client.users.<a href="./src/resources/users.ts">login</a>({ ...params }) -> string</code>
- <code title="get /user/logout">client.users.<a href="./src/resources/users.ts">logout</a>() -> void</code>
