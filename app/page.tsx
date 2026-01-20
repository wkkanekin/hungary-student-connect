import { Card, LinkButton } from '@/components/ui'

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          ベータ版
        </div>

        <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
          ハンガリー在住の現役大学生に
          <br className="hidden md:block" />
          1対1で相談できる
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          留学・進学・奨学金・生活のリアルを、現地の先輩から最短で聞けます。
          <br />
          <span className="text-slate-500">※ベータ版のため仕様は変更される可能性があります。</span>
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <LinkButton href="/tutors" variant="primary">
            現役生を探す
          </LinkButton>
          <LinkButton href="/pricing" variant="secondary">
            料金を見る
          </LinkButton>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <div className="font-extrabold">安心のための表記</div>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>表示は日本時間（JST）です（予約画面）。</li>
            <li>現役生側の管理画面はブダペスト時間です。</li>
            <li>事前決済制です。現役生側の都合で実施できない場合は全額返金します。</li>
          </ul>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <div className="text-xs font-bold text-slate-500">Step 1</div>
          <div className="mt-1 font-extrabold">現役生を選ぶ</div>
          <p className="mt-1 text-sm text-slate-600">大学・地域・系統などで絞り込みできます。</p>
        </Card>
        <Card>
          <div className="text-xs font-bold text-slate-500">Step 2</div>
          <div className="mt-1 font-extrabold">空き枠を予約</div>
          <p className="mt-1 text-sm text-slate-600">日本時間で空き枠を見て、そのまま予約。</p>
        </Card>
        <Card>
          <div className="text-xs font-bold text-slate-500">Step 3</div>
          <div className="mt-1 font-extrabold">オンライン相談</div>
          <p className="mt-1 text-sm text-slate-600">60分で不安を整理して、次の一歩が決まります。</p>
        </Card>
      </section>
    </div>
  )
}
