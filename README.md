# EdwardC22.github.io

个人网站项目，使用 React + TypeScript + Vite + Tailwind CSS 构建。

## 🚀 自动部署

本项目已配置 GitHub Actions 自动部署到 GitHub Pages：

- 当代码推送到 `main` 或 `master` 分支时，会自动触发构建和部署
- 不需要手动构建或推送 `dist` 文件夹
- 部署完成后可通过 https://EdwardC22.github.io 访问

## 📦 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 构建项目
npm run build

# 预览构建结果
npm run serve
```

## ⚙️ 技术栈

- **框架**: React 18
- **语言**: TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **国际化**: react-i18next
- **图标**: FontAwesome, Heroicons

## 📁 项目结构

```
src/
├── components/          # React组件
│   ├── Home/           # 首页组件
│   ├── AboutMe/        # 关于我组件
│   ├── NavBar/         # 导航栏组件
│   └── icons/          # 自定义图标
├── langs/              # 国际化语言文件
├── styles/             # 样式文件
└── types/              # TypeScript类型定义
```

## 🔧 配置说明

### GitHub Pages 设置

1. 进入仓库的 Settings → Pages
2. Source 选择 "GitHub Actions"
3. 保存设置即可

### 环境变量

无需额外配置环境变量，所有构建过程都在 GitHub Actions 中自动完成。

## 📝 开发流程

1. 在本地开发和测试
2. 提交代码到 main/master 分支
3. GitHub Actions 自动构建和部署
4. 访问 https://EdwardC22.github.io 查看更新

无需手动处理 `dist` 文件夹或分支切换！
