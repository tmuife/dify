# About Oracle 23 AI

https://www.oracle.com/database/23ai/

Data is the fuel AI needs. Oracle Database 23ai brings AI to your data, making it simple to power app development, and mission critical workloads with AI.

Follow the instructions on the dify official website to install dify app. For example, we will deploy dify app with Docker Compose.

Ref:https://docs.dify.ai/getting-started/install-self-hosted/local-source-code

## 1.Run a Oracle 23AI container as Vector Storage

After cp .env.example .env, we need to change some configs in this file.

```
VECTOR_STORE=oracle

# Oracle configuration, only available when VECTOR_STORE is `oracle`
ORACLE_HOST=<ip>
ORACLE_PORT=<port>
ORACLE_USER=dify
ORACLE_PASSWORD=dify
ORACLE_DATABASE=FREEPDB1
```

We recommended use the oracle container ip(not the container name), so you need to expose the DB port of oracle container, modify the docker-compose.yaml file, add ports config

```
  # Oracle vector database
  oracle:
    image: container-registry.oracle.com/database/free:latest
    profiles:
      - oracle
    restart: always
    ports:
      - 1521:1521
    volumes:
      - type: volume
        source: oradata
        target: /opt/oracle/oradata
      - ./startupscripts:/opt/oracle/scripts/startup
    environment:
      - ORACLE_PWD=${ORACLE_PWD:-Dify123456}
      - ORACLE_CHARACTERSET=${ORACLE_CHARACTERSET:-AL32UTF8}
```

Start dockers

```
docker-compose --profile oracle -p dify up -d
```



## 2.Connect to your own oracle database

After cp .env.example .env, we need to change some configs in this file.

```
VECTOR_STORE=oracle

# Oracle configuration, only available when VECTOR_STORE is `oracle`
ORACLE_HOST=<ip>
ORACLE_PORT=<port>
ORACLE_USER=dify
ORACLE_PASSWORD=dify
ORACLE_DATABASE=FREEPDB1
```

Prerequisites

1. db user has read and write privilege 

2. use this user to run this script:

   ```
   BEGIN
   CTX_DDL.CREATE_PREFERENCE('my_chinese_vgram_lexer','CHINESE_VGRAM_LEXER');
   END;
   /
   ```

   

Start dockers

```
docker-compose --profile oracle -p dify up -d
```

