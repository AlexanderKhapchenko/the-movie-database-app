export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
			API_URL: string;
			API_IMAGE: string;
    }
  }
}
