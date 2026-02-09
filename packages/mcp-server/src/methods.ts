import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.messages.create',
    fullyQualifiedName: 'messages.create',
    httpMethod: 'post',
    httpPath: '/v1/messages',
  },
  {
    clientCallName: 'client.messages.countTokens',
    fullyQualifiedName: 'messages.countTokens',
    httpMethod: 'post',
    httpPath: '/v1/messages/count_tokens',
  },
  {
    clientCallName: 'client.messages.countTokensBeta',
    fullyQualifiedName: 'messages.countTokensBeta',
    httpMethod: 'post',
    httpPath: '/v1/messages/count_tokens?beta=true',
  },
  {
    clientCallName: 'client.messages.batches.create',
    fullyQualifiedName: 'messages.batches.create',
    httpMethod: 'post',
    httpPath: '/v1/messages/batches',
  },
  {
    clientCallName: 'client.messages.batches.retrieve',
    fullyQualifiedName: 'messages.batches.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/messages/batches/{message_batch_id}',
  },
  {
    clientCallName: 'client.messages.batches.list',
    fullyQualifiedName: 'messages.batches.list',
    httpMethod: 'get',
    httpPath: '/v1/messages/batches',
  },
  {
    clientCallName: 'client.messages.batches.delete',
    fullyQualifiedName: 'messages.batches.delete',
    httpMethod: 'delete',
    httpPath: '/v1/messages/batches/{message_batch_id}',
  },
  {
    clientCallName: 'client.messages.batches.cancel',
    fullyQualifiedName: 'messages.batches.cancel',
    httpMethod: 'post',
    httpPath: '/v1/messages/batches/{message_batch_id}/cancel',
  },
  {
    clientCallName: 'client.messages.batches.cancelBeta',
    fullyQualifiedName: 'messages.batches.cancelBeta',
    httpMethod: 'post',
    httpPath: '/v1/messages/batches/{message_batch_id}/cancel?beta=true',
  },
  {
    clientCallName: 'client.messages.batches.results',
    fullyQualifiedName: 'messages.batches.results',
    httpMethod: 'get',
    httpPath: '/v1/messages/batches/{message_batch_id}/results',
  },
  {
    clientCallName: 'client.messages.batches.resultsBeta',
    fullyQualifiedName: 'messages.batches.resultsBeta',
    httpMethod: 'get',
    httpPath: '/v1/messages/batches/{message_batch_id}/results?beta=true',
  },
  {
    clientCallName: 'client.messages.batches.betaTrue.retrieve',
    fullyQualifiedName: 'messages.batches.betaTrue.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/messages/batches/{message_batch_id}?beta=true',
  },
  {
    clientCallName: 'client.messages.batches.betaTrue.delete',
    fullyQualifiedName: 'messages.batches.betaTrue.delete',
    httpMethod: 'delete',
    httpPath: '/v1/messages/batches/{message_batch_id}?beta=true',
  },
  {
    clientCallName: 'client.messages.batchesBetaTrue.create',
    fullyQualifiedName: 'messages.batchesBetaTrue.create',
    httpMethod: 'post',
    httpPath: '/v1/messages/batches?beta=true',
  },
  {
    clientCallName: 'client.messages.batchesBetaTrue.list',
    fullyQualifiedName: 'messages.batchesBetaTrue.list',
    httpMethod: 'get',
    httpPath: '/v1/messages/batches?beta=true',
  },
  {
    clientCallName: 'client.complete.create',
    fullyQualifiedName: 'complete.create',
    httpMethod: 'post',
    httpPath: '/v1/complete',
  },
  {
    clientCallName: 'client.models.retrieve',
    fullyQualifiedName: 'models.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/models/{model_id}',
  },
  {
    clientCallName: 'client.models.list',
    fullyQualifiedName: 'models.list',
    httpMethod: 'get',
    httpPath: '/v1/models',
  },
  {
    clientCallName: 'client.models.retrieveBeta',
    fullyQualifiedName: 'models.retrieveBeta',
    httpMethod: 'get',
    httpPath: '/v1/models/{model_id}?beta=true',
  },
  {
    clientCallName: 'client.messagesBetaTrue.create',
    fullyQualifiedName: 'messagesBetaTrue.create',
    httpMethod: 'post',
    httpPath: '/v1/messages?beta=true',
  },
  {
    clientCallName: 'client.modelsBetaTrue.list',
    fullyQualifiedName: 'modelsBetaTrue.list',
    httpMethod: 'get',
    httpPath: '/v1/models?beta=true',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
