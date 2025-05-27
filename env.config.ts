type EnvConfig = {
  baseUrl: string;
  apiUrl: string;
};

const environments: Record<string, EnvConfig> = {
  dev: {
    baseUrl: 'https://dev.example.com',
    apiUrl: 'https://dev.example.com/api',
  },
  staging: {
    baseUrl: 'https://staging.example.com',
    apiUrl: 'https://staging.example.com/api',
  },
  prod: {
    baseUrl: 'https://example.com',
    apiUrl: 'https://example.com/api',
  },
};

const activeEnv = process.env.ENV || 'dev';
export const config = environments[activeEnv];
