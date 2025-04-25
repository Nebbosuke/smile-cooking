import dumplings from "@/app/images/dumplings.png";

export default function Home() {
  return (
    <div className="justify-items-center mb-24">
      <main className="flex flex-col items-center">
        <img src={dumplings.src} alt="" width={1000}></img>
        <div className="-m-42 text-3xl sm:text-9xl font-bold text-red-600 flex flex-col items-center">
          <div className="text-black text-2xl sm:text-7xl">
            肉まん・餃子教室
          </div>
          <div>スマイルクッキング</div>
        </div>
        <div className="text-black mt-50 sm:mt-64 text-2xl sm:text-5xl px-12 text-center">
          <p>千葉県東金市で開催！</p>
          <p>大きな肉まんをつくって持ち帰ろう！</p>
        </div>
        <div className="flex flex-col items-center mt-12 sm:mt-24 gap-4 sm:gap-8">
          <div className="text-red-600 text-2xl sm:text-5xl">参加費</div>
          <div className="text-black text-xl sm:text-3xl">4000円</div>
        </div>
        <div className="flex flex-col items-center mt-12 sm:mt-24 gap-4 sm:gap-8">
          <div className="text-red-600 text-2xl sm:text-5xl">持ちもの</div>
          <div className="text-black text-xl sm:text-3xl flex flex-col items-center gap-4 sm:gap-8">
            <p>エプロン</p>
            <p>三角巾</p>
            <p>持ち帰り容器</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-12 sm:mt-24 gap-4 sm:gap-8">
          <div className="text-red-600 text-2xl sm:text-5xl">連絡先</div>
          <div className="text-black text-xl sm:text-3xl">090-4618-1997</div>
          <div className="text-black text-xl sm:text-3xl">
            morikawaemi5290@yahoo.co.jp
          </div>
        </div>
      </main>
    </div>
  );
}
