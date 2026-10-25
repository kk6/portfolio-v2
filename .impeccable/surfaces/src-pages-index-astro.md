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
- 横長の作品は、デスクトップでは画面いっぱい、モバイルでは切り抜かずに全体を幅に収めて帯のすぐ上に置く（決定）。
- 外れた帯は、各セクションの見出しとして再び現れる（決定）。Illustration の帯は左から、Engineering の帯は右から戻る。

## Closing (2026-10-26)

- ページの並び：ヒーロー → Illustration → Engineering → プロフィール → 商業の仕事 → （即売会の参加予定がある時だけ）参加予定 → 終わりの帯 → 著作権表示。
- 帯は「入口と出口」だけに使う。Illustration と Engineering が入口、終わりの帯が出口。プロフィール、商業の仕事、参加予定の見出しは帯にしない。
- 終わりの帯：名前、pixiv と X（主）、Instagram と GitHub（副）、「ご依頼は X の DM へ。」。リンクはサービス名を文字で書き、アイコンだけにしない。
- 商業の仕事：Animals Pedal「MAJOR OVER DRIVE」筐体イラスト（2 種）の写真と、pixiv のコンテストでの 2 度の入賞。販売元（Lep International）の商品写真は、許可を確認するまで使わない。
- 終わりの帯は、ヒーローと同じ 2 色を重ねる（決定）。上段は左から、下段は右から入る。

## Gallery and framed works (2026-10-26)

- 作品の背景の有無にかかわらず、ヒーローの構図は右寄せで統一し、名前は常に上の帯の中に置く。
- 作品一覧からは、ヒーローに出ている作品を除く。各作品に作品名を添え、押すと作品だけを大きく見せるビューアを開く。モバイルは 2 列。
- 「（準備中）」などの補足ラベルは 13px を下回らない。

## Carry-over to the Astro build (critique 2026-10-26, 23/32)

Fix these while implementing, highest first:
- [P1] Hero work identity: done in the Astro build (2026-10-26). The title appears once the obis have parted, and pressing the work opens the viewer.
- [P1] Keyboard focus can land on obi links while they are partly parted and off-screen. Bring the obis back on focus, or make them inert as soon as they start to move.
- [P2] Below the gallery, use an explicit asymmetric grid instead of a narrow text column; show the commercial photo much larger.
- [P2] Mobile lower obi: shorten or split the subtitle so it is not four lines and does not repeat the name.
- [P2] Add a quiet follow line (pixiv, X) right under the gallery, without an obi.
- Keep the Engineering entrance with 「（準備中）」 until its content exists (user decision).

## Unresolved

- ヒーローの作品：1 点固定寄りだが未確定。ランダム表示も試す。時間でランダムに切り替える案もある。
- 帯の色：作品から自動で取り出した色を基本とし、気に入らない作品だけ手で上書きする（決定）。名前を載せる上の帯には、2 色のうち暗い方を置く（決定。手で上書きした色は選んだ順のまま）。
- 和文と欧文の書体、帯の文言、サイトの言語構成。
