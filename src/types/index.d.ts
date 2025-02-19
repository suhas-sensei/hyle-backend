interface ImportMetaEnv {
    readonly NEXT_PUBLIC_SERVER_URL: string
    readonly NEXT_PUBLIC_NODE_URL: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }