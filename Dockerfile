# Estágio de build - Usa uma imagem Node.js Alpine para minimizar o tamanho
FROM node:20-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração primeiro para aproveitar o cache do Docker
# Isso evita reinstalar as dependências se só o código fonte mudou
COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

# Copia o código fonte da aplicação
# Agora, copiamos a pasta 'src', que é onde o código do NestJS está localizado
COPY src ./src 

# Instala todas as dependências
RUN npm install

# Compila o projeto TypeScript
RUN npm run build  # O NestJS usará 'build' para compilar o código de 'src' para 'dist'

# Estágio de produção - Cria uma imagem menor apenas com o necessário para executar
FROM node:20-alpine AS production

WORKDIR /app

# Copia apenas o package.json e instala somente as dependências de produção
COPY package*.json ./
RUN npm install --omit=dev

# Copia os arquivos compilados do estágio de build
# Copia a pasta dist do estágio de build
COPY --from=builder /app/dist ./dist  

# Define variável de ambiente para produção
ENV NODE_ENV production

# Expõe a porta que a aplicação utilizará
EXPOSE ${PORT_BARBER_MASTER}

# Comando para iniciar a aplicação
CMD ["node", "dist/main.js"]  # Comando padrão para iniciar uma aplicação NestJS compilada
