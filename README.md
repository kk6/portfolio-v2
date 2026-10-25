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

- 旧React Routerスターターは削除済み。
- リポジトリはREADME.mdと.gitignoreを残した初期状態。
- デザインコンセプトは決定済み。
- 新サイトの実装は未着手。
- 次の作業はトップページのデザインプロトタイプ制作。

## 既存サイトとドメイン

- 現サイト：`ashiyahiro.art`
- 旧リポジトリ：`https://github.com/kk6/portfolio`
- 旧技術構成：Next.js 10 / React 17 / microCMS / Vercel
- 新ドメイン第一候補：`ashiyahiro.com`
- レジストラ候補：Cloudflare Registrar

新サイト完成まで旧サイトを維持する。移行時は既存コンテンツの保全、URLリダイレクト、SEOへの影響を確認する。

## 次のステップ

1. 利用可能なAgent Skills（pstack等）を調査する。
2. デザインプロトタイプの制作・批評ワークフローを決める。
3. 最小限の開発環境を構築する。
4. Quiet Editorialのトップページを試作する。
5. 日本語フォント、余白、レイアウト、配色を比較する。
6. ブラウザでデスクトップ・モバイル表示を検証する。
7. デザインの改善を繰り返す。
8. デザインが固まってから本格的なコンテンツ移行に着手する。
