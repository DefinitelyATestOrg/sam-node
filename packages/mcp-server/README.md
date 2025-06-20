# Sam TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:DefinitelyATestOrg/sam-node.git
cd sam-node
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export API_KEY="My API Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y sam-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "sam_api": {
      "command": "node",
      "args": ["/path/to/local/sam-node/packages/mcp-server", "--client=claude", "--tools=dynamic"],
      "env": {
        "API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "sam-mcp/server";

// import a specific tool
import createMessages from "sam-mcp/tools/messages/create-messages";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createMessages, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `messages`:

- `create_messages` (`write`): Send a structured list of input messages with text and/or image content, and the model will generate the next message in the conversation.

  The Messages API can be used for either single queries or stateless multi-turn conversations.

  Learn more about the Messages API in our [user guide](/en/docs/initial-setup)

- `count_tokens_messages` (`write`): Count the number of tokens in a Message.

  The Token Count API can be used to count the number of tokens in a Message, including tools, images, and documents, without creating it.

  Learn more about token counting in our [user guide](/en/docs/build-with-claude/token-counting)

- `count_tokens_beta_messages` (`write`): Count the number of tokens in a Message.

  The Token Count API can be used to count the number of tokens in a Message, including tools, images, and documents, without creating it.

  Learn more about token counting in our [user guide](/en/docs/build-with-claude/token-counting)

### Resource `messages.batches`:

- `create_messages_batches` (`write`): Send a batch of Message creation requests.

  The Message Batches API can be used to process multiple Messages API requests at once. Once a Message Batch is created, it begins processing immediately. Batches can take up to 24 hours to complete.

  Learn more about the Message Batches API in our [user guide](/en/docs/build-with-claude/batch-processing)

- `retrieve_messages_batches` (`read`): This endpoint is idempotent and can be used to poll for Message Batch completion. To access the results of a Message Batch, make a request to the `results_url` field in the response.

  Learn more about the Message Batches API in our [user guide](/en/docs/build-with-claude/batch-processing)

- `list_messages_batches` (`read`): List all Message Batches within a Workspace. Most recently created batches are returned first.

  Learn more about the Message Batches API in our [user guide](/en/docs/build-with-claude/batch-processing)

- `delete_messages_batches` (`write`): Delete a Message Batch.

  Message Batches can only be deleted once they've finished processing. If you'd like to delete an in-progress batch, you must first cancel it.

  Learn more about the Message Batches API in our [user guide](/en/docs/build-with-claude/batch-processing)

- `cancel_messages_batches` (`write`): Batches may be canceled any time before processing ends. Once cancellation is initiated, the batch enters a `canceling` state, at which time the system may complete any in-progress, non-interruptible requests before finalizing cancellation.

  The number of canceled requests is specified in `request_counts`. To determine which requests were canceled, check the individual results within the batch. Note that cancellation may not result in any canceled requests if they were non-interruptible.

  Learn more about the Message Batches API in our [user guide](/en/docs/build-with-claude/batch-processing)

- `cancel_beta_messages_batches` (`write`): Batches may be canceled any time before processing ends. Once cancellation is initiated, the batch enters a `canceling` state, at which time the system may complete any in-progress, non-interruptible requests before finalizing cancellation.

  The number of canceled requests is specified in `request_counts`. To determine which requests were canceled, check the individual results within the batch. Note that cancellation may not result in any canceled requests if they were non-interruptible.

  Learn more about the Message Batches API in our [user guide](/en/docs/build-with-claude/batch-processing)

- `results_messages_batches` (`read`): Streams the results of a Message Batch as a `.jsonl` file.

  Each line in the file is a JSON object containing the result of a single request in the Message Batch. Results are not guaranteed to be in the same order as requests. Use the `custom_id` field to match results to requests.

  Learn more about the Message Batches API in our [user guide](/en/docs/build-with-claude/batch-processing)

- `results_beta_messages_batches` (`read`): Streams the results of a Message Batch as a `.jsonl` file.

  Each line in the file is a JSON object containing the result of a single request in the Message Batch. Results are not guaranteed to be in the same order as requests. Use the `custom_id` field to match results to requests.

  Learn more about the Message Batches API in our [user guide](/en/docs/build-with-claude/batch-processing)

### Resource `messages.batches.beta_true`:

- `retrieve_batches_messages_beta_true` (`read`): This endpoint is idempotent and can be used to poll for Message Batch completion. To access the results of a Message Batch, make a request to the `results_url` field in the response.

  Learn more about the Message Batches API in our [user guide](/en/docs/build-with-claude/batch-processing)

- `delete_batches_messages_beta_true` (`write`): Delete a Message Batch.

  Message Batches can only be deleted once they've finished processing. If you'd like to delete an in-progress batch, you must first cancel it.

  Learn more about the Message Batches API in our [user guide](/en/docs/build-with-claude/batch-processing)

### Resource `messages.batches_beta_true`:

- `create_messages_batches_beta_true` (`write`): Send a batch of Message creation requests.

  The Message Batches API can be used to process multiple Messages API requests at once. Once a Message Batch is created, it begins processing immediately. Batches can take up to 24 hours to complete.

  Learn more about the Message Batches API in our [user guide](/en/docs/build-with-claude/batch-processing)

- `list_messages_batches_beta_true` (`read`): List all Message Batches within a Workspace. Most recently created batches are returned first.

  Learn more about the Message Batches API in our [user guide](/en/docs/build-with-claude/batch-processing)

### Resource `complete`:

- `create_complete` (`write`): [Legacy] Create a Text Completion.

  The Text Completions API is a legacy API. We recommend using the [Messages API](https://docs.anthropic.com/en/api/messages) going forward.

  Future models and features will not be compatible with Text Completions. See our [migration guide](https://docs.anthropic.com/en/api/migrating-from-text-completions-to-messages) for guidance in migrating from Text Completions to Messages.

### Resource `models`:

- `retrieve_models` (`read`): Get a specific model.

  The Models API response can be used to determine information about a specific model or resolve a model alias to a model ID.

- `list_models` (`read`): List available models.

  The Models API response can be used to determine which models are available for use in the API. More recently released models are listed first.

- `retrieve_beta_models` (`read`): Get a specific model.

  The Models API response can be used to determine information about a specific model or resolve a model alias to a model ID.

### Resource `messages_beta_true`:

- `create_messages_beta_true` (`write`): Send a structured list of input messages with text and/or image content, and the model will generate the next message in the conversation.

  The Messages API can be used for either single queries or stateless multi-turn conversations.

  Learn more about the Messages API in our [user guide](/en/docs/initial-setup)

### Resource `models_beta_true`:

- `list_models_beta_true` (`read`): List available models.

  The Models API response can be used to determine which models are available for use in the API. More recently released models are listed first.
