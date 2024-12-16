# 第一阶段: 安装依赖
FROM node:18 AS deps

# 设置工作目录
WORKDIR /app

# 复制依赖文件
COPY package.json package-lock.json ./

# 安装依赖，只安装生产环境和开发环境的基本依赖
RUN npm install

# 第二阶段: 构建阶段
FROM node:18 AS build

# 设置工作目录
WORKDIR /app

# 复制所有源代码
COPY . .

# 复制第一阶段安装的依赖
COPY --from=deps /app/node_modules ./node_modules

# 构建 Next.js 应用
RUN npm run build

# 第三阶段: 运行阶段
FROM node:18-alpine AS runtime

# 设置工作目录
WORKDIR /app

# 仅复制必要文件以减小最终镜像体积
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/public ./public

# 设置环境变量
ENV PORT=3000
EXPOSE 3000

# 启动应用
CMD ["npm", "start"]
