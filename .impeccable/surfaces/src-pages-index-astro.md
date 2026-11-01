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
- 素材：作品（現在は仮置き 1 点）、旧サイトのプロフィール。Engineering 側は帯の色の抽出処理を実物として載せる。

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
- [P1] Keyboard focus on partly parted obis: done in the Astro build (2026-10-26). Focus entering an obi scrolls back to the top so the obis return; fully parted obis stay inert.
- [P2] Below the gallery: done in the Astro build (2026-10-26). A 12-column grid puts headings in a left rail (columns 1-3), text on columns 4-9, and the commercial photo on columns 4-11 (about 57% of a 1440px screen). Below 1100px the heading stacks over the content.
- [P2] Obi subtitle: done in the Astro build (2026-10-26). Each obi carries its own practice's title: 「Ashiya Hiro / Illustrator」 under the name, 「Web Application Developer」 in the lower obi (user's choice). Mobile: 1 and 2 lines instead of 4.
- [P2] Follow line: done in the Astro build (2026-10-26). 「ほかの作品は pixiv と X で。」 sits under the gallery as plain text, not an obi.
- Keep the Engineering entrance with 「（準備中）」 until its content exists (user decision).

## Next fixes (Astro critique 2026-10-26, 22/32)

Scope chosen by the user: the top four, starting with the first.
- [P1] Hero crop on portrait screens: done (2026-10-26). Screens narrower than 5:4 use the phone layout (work centered, height capped so it never exceeds the width); wider screens keep the 46% start but slide left if the work would run off the edge. Checked at 375x812, 820x1180, 1024x1366, 1100x900, 1180x820, 1280x1000, 1440x900, for portrait and landscape works.
- [P2] Viewer size: done (2026-10-26). The work fills the screen (100dvh x 100vw), with the title and close button as ground-colored plates on top; the backdrop is solid. Equal to the hero on desktop and phone, larger on portrait tablets.
- [P2] After the reveal: done (2026-10-26). The title (17px) sits 20px outside the work's lower-left edge on desktop, just below the work on portrait screens, and on a ground plate over full-bleed landscape works. The stage is 200vh: the obis part over 42vh of scroll and the whole work holds for about 58vh (was about 18vh).
- [P2] No-JS: done (2026-10-26). An inline script adds a js class to <html> before first paint; the off-screen starting states and the 200vh stage apply only under it. Without JS the headings and closing obis are visible and the stage is 100vh. The hero title stays hidden without JS (the obis never part); the work link's label still names it.
- Engineering: done (2026-11-01). The dummy line is replaced with the obi color extractor, linked to `src/lib/obi-colors.ts` on main (user's choice over Wordtrail, mcpax, and Minerva). The sentence holds only while the hero work uses extracted colors; a hand-picked hero needs new wording. The link works once this branch reaches main.

- [P3] Gallery tab order: kept as is (2026-11-01). Tab runs down each column and focus stays visible across the jump to the next column. Rows with one height per row would match the tab order but leave holes of about 285px beside the landscape works at 1440px. The uneven column end depends on which works are published, so revisit it with the selection.

- Reduced motion: checked and fixed (2026-11-01) in headless Chrome with the emulated media feature, at 1440x900, 820x1180, and 375x812, for portrait and landscape heroes. Fixed the 200vh stage staying under JS (695-997px blank), the title landing on the obi on portrait screens, and landscape works pushed up to 325px off the top.


## Audit fixes (ponytail-audit 2026-11-01)

- Mouse clicks on a partly parted obi: done. The return to the top runs for keyboard focus only.
- Phone address bar: done, not yet checked on a real phone. The hero uses dvh so the obis stay on the visible bottom edge; the work uses svh so it does not rescale.
- Viewer: done. The previous work no longer shows under a new title while the next one loads.
- Open: own favicon (still Astro's, waits on the logo decision), OGP and `site` (wait on the domain and a share image), artwork in git (waits on the selection), font CSS at 122KB gzipped, ground and ink colors defined in both the CSS and `obi-colors.ts`.

## Next fixes (Astro critique 2026-11-01, 21/32)

Not chosen by the user yet.
- [P1] Entrance links skip the signature and the hero work. /impeccable animate
- [P2] No hover feedback; works do not look openable. /impeccable delight
- [P2] Commission path breaks: no link from 「受付可能」 or 「X の DM」; awards appear twice. /impeccable clarify
- [P2] Hero work's right edge reads as cut in the white margin; unneeded if the hero changes. /impeccable layout
- [P3] Commercial photo outweighs the work. /impeccable layout

## Unresolved

- ヒーローの作品：1 点固定寄りだが未確定。ランダム表示も試す。時間でランダムに切り替える案もある。
- 帯の色：作品から自動で取り出した色を基本とし、気に入らない作品だけ手で上書きする（決定）。名前を載せる上の帯には、2 色のうち暗い方を置く（決定。手で上書きした色は選んだ順のまま）。
- 和文と欧文の書体、帯の文言、サイトの言語構成。
