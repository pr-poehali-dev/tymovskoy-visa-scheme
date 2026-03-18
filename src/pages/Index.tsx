import DiscountCard from "@/components/DiscountCard";

const Index = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 font-roboto relative overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/projects/63b9abef-044a-4c90-96ba-275883db872e/files/448561f1-3772-4b17-8e31-b9e731c6a527.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#1A2E10',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(26,46,16,0.82)' }} />
      <div className="relative z-10 w-full flex flex-col items-center gap-8">
        <div className="text-center">
          <p className="font-oswald tracking-[0.4em] text-xs uppercase mb-1" style={{ color: 'rgba(201,168,76,0.55)' }}>
            Министерство обороны Российской Федерации
          </p>
          <h1 className="font-oswald text-xl tracking-widest uppercase" style={{ color: '#C9A84C' }}>
            Льготная карта военнослужащего
          </h1>
        </div>

        <DiscountCard />

        <p className="text-xs font-roboto text-center max-w-sm" style={{ color: 'rgba(245,237,208,0.35)' }}>
          Предложение действует только для военнослужащих Вооружённых Сил Российской Федерации
        </p>
      </div>
    </div>
  );
};

export default Index;
