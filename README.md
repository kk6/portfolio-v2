# ashiyahiro — Portfolio v2

個人ポートフォリオサイトの全面リニューアルプロジェクト。

## 目的

ソフトウェアエンジニアリングとイラストレーション、両方の活動を魅力的に紹介する、独自性と完成度の高いWebサイトを制作する。

旧サイト `ashiyahiro.art` のデザインや技術構成は引き継がず、ゼロから設計する。ただし、デザインに対するこだわりは継承する。

**最優先はサイトそのものの品質。** AIを活用した開発手法の研究は副次的な目標とする。

## デザインコンセプト

**Quiet Editorial — 静謐なエディトリアル**

- A-2「Asymmetric Editorial」を基本構成とする。
- A-3「Dual Practice」の明確な分野別ナビゲーションを組み合わせる。
- 日本語と欧文のタイポグラフィを重視する。
- 精密なグリッド、非対称性、余白の緊張感を活用する。
- EngineeringとIllustrationを明確に区別しつつ、サイト全体に統一感を持たせる。
- 日本的な美意識を取り入れるが、安易な和風装飾は避ける。
- 控えめで意味のあるインタラクションを採用する。

詳細は [docs/design-brief.md](docs/design-brief.md) を参照。

## 技術方針

現時点では以下を有力候補とする。

- Astro
- TypeScript
- Tailwind CSS
- Markdown / MDX または Astro Content Collections
- Cloudflare Workers
- GitHub Actions
- Playwright

技術選定は最終確定していない。デザインとコンテンツの要件を優先して判断する。

## AIを活用した制作

AIを単なるコード生成ツールとしてではなく、デザインリサーチ、アートディレクション、批評、実装、検証のパートナーとして活用する。

pstack等の既存Agent Skillsの利用を検討する。必要に応じて独自のDesign Research、Design Critique、Design IterationのSkillを作成する。

ただし、Skillの開発そのものを目的化しない。

## 現在の状態

- デザインコンセプトとトップページの構成は決定済み。
- Astro版のトップページは実装済み。ブランチは `feat/astro-top-page` で、まだ push していない。
- 最新の Impeccable critique は 21/32（2026-11-01、その後の修正は未評価）。詳細は `.impeccable/surfaces/src-pages-index-astro.md` にある。
- Engineering の欄には、帯の色の抽出処理を実物として載せている。リンクは main に反映すると有効になる。
- 作品の画像は掲載する作品が未定なので `.gitignore` で除外している。ビルドには手元の画像が必要で、clone しただけではビルドできない。
- ファビコンは Astro の初期ファイルのまま。OGP と `site` の設定は未着手。
- スマートフォンの実機、Safari、Firefox での表示は未確認。

## 既存サイトとドメイン

- 現サイト：`ashiyahiro.art`
- 旧リポジトリ：`https://github.com/kk6/portfolio`
- 旧技術構成：Next.js 10 / React 17 / microCMS / Vercel
- 新ドメイン第一候補：`ashiyahiro.com`
- レジストラ候補：Cloudflare Registrar

新サイト完成まで旧サイトを維持する。移行時は既存コンテンツの保全、URLリダイレクト、SEOへの影響を確認する。

## 次のステップ

1. ヒーローの作品を完成版に差し替え（`src/assets/works/hero.webp`、縦横比 3:4）、作品名を決める。残りの掲載作品も決めて、画像を git に入れる。
2. 修正後の状態で critique をもう一度実行する。
3. ロゴとファビコンを決める。
4. ドメインと共有用の画像を決め、OGP と `site` を設定する。
5. スマートフォンの実機、Safari、Firefox で表示を確認する。
6. ホスティングを決めて公開し、旧サイトからの移行とリダイレクトを進める。
