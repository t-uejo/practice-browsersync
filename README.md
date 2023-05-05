# practice-browsersync
Browsersync×Wordpressで独自テーマ開発時のテンプレを作成。

## 目的
- 自動リロードで快適にコーディング
- 静的コーディングのフェーズをなくす
- jsやcssなどの依存関係の集約
- 画像圧縮の自動化

## 自動リロード実行方法
- `npm run watch`
- 終了するには`ctr + c`

## デプロイ対象外のディレクトリ・ファイル
- package.json
- package-lock.json
- .gitignore
- README.md
- webpack.config.js
- src/
- node_modules/