---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# トップページ

## Scope

- 対象：トップページの最初の画面と、次のセクションへのつなぎ。
- モード：Experience（作品が主役で、UI は退く）。
- 作り方：code-led（画像生成なし）。まず素の HTML/CSS のプロトタイプで詰め、そのあと Astro に移す。

## Audience and job

- イラストの依頼者、作品のファン、エンジニア仲間。
- 作品をじっくり見てもらい、SNS や pixiv のフォローにつなげる。
- 素材：作品（現在は仮置き 1 点）、旧サイトのプロフィール。Engineering 側はダミーと明記する。

## Direction contract

THESIS：作品に掛かった 2 本の帯が、2 つの分野への入口になる。帯を外すと作品の全体が現れる。名前とサムネイルを並べる定番の構成は採らない。

OWN-WORLD：作品の背景に合わせた白い地。全幅の 2 本の帯（上が Illustration、下が Engineering）は、作品に合わせた色の平らな面にする。影、グラデーション、装飾は使わない。名前は和文の明朝体を主役にし、欧文を併記する。

STORY：訪問者はまず作品を見る。帯の上で名前と 2 つの分野を知る。スクロールで帯が外れて作品の全体を見たあと、選んだ分野へ進む。

FIRST VIEWPORT：作品を右寄りに、画面の高さいっぱいに置く。下部の約 3 割に 2 本の帯を重ねる。上の帯に名前と Illustration の入口、下の帯に肩書きと Engineering の入口を置く。入口は帯の右側に置いたふつうのリンク。

FORM：作品に掛かる帯（定番寄りの候補の 3 番目）。構成は「2 本の帯をずらす」で、ユーザーが「帯をずらす」と「2 本の帯」を合成して選んだもの。direction seed: seed:73bcd837f742c898、surface seed: seed:29f5d9e8e40fd7c7。

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Signature interaction

- スクロールに合わせて、2 本の帯が左右に分かれて外れる。
- reduced-motion では動かさず、帯を作品の下に置いた完成状態を見せる。
- 外れた帯は、各セクションの見出しとして再び現れる（決定）。Illustration の帯は左から、Engineering の帯は右から戻る。

## Unresolved

- ヒーローの作品：1 点固定寄りだが未確定。ランダム表示も試す。
- 帯の色：作品から自動で取り出した色を基本とし、気に入らない作品だけ手で上書きする（決定）。名前を載せる上の帯を明るい色と暗い色のどちらにするかは未定。
- 和文と欧文の書体、帯の文言、サイトの言語構成。
- 横長の作品をヒーローに置くときの配置。
