const DiscountCard = () => {
  return (
    <div className="w-full max-w-sm mx-auto" style={{ perspective: '1000px' }}>
      {/* Карточка */}
      <div
        className="relative rounded-none overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #2D4A1E 0%, #1A2E10 50%, #243D18 100%)',
          border: '1px solid rgba(201,168,76,0.4)',
          boxShadow: '0 0 0 1px rgba(201,168,76,0.15), 0 20px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(201,168,76,0.2)',
          fontFamily: 'Oswald, sans-serif',
        }}
      >
        {/* Верхняя золотая полоса */}
        <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent, #C9A84C, #E8C96A, #C9A84C, transparent)' }} />

        {/* Шапка с символикой */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3"
          style={{ borderBottom: '1px solid rgba(201,168,76,0.2)' }}
        >
          {/* Звезда МО */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center"
              style={{
                width: '44px',
                height: '44px',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.4)',
                position: 'relative',
              }}
            >
              <span style={{ fontSize: '26px', lineHeight: 1 }}>★</span>
            </div>
            <div>
              <div style={{ color: '#C9A84C', fontSize: '9px', letterSpacing: '0.25em', fontFamily: 'Roboto, sans-serif', fontWeight: 300, textTransform: 'uppercase' }}>
                Вооружённые Силы РФ
              </div>
              <div style={{ color: '#E8C96A', fontSize: '16px', letterSpacing: '0.08em', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}>
                ДВЕ АТМОСФЕРЫ
              </div>
            </div>
          </div>

          {/* Эмблема право */}
          <div style={{
            width: '40px',
            height: '40px',
            border: '1px solid rgba(201,168,76,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotate(45deg)',
            background: 'rgba(201,168,76,0.07)',
          }}>
            <span style={{ fontSize: '18px', transform: 'rotate(-45deg)', lineHeight: 1 }}>⚙</span>
          </div>
        </div>

        {/* Центральный блок — скидка */}
        <div className="px-5 py-5 flex items-center gap-4">
          {/* Большой процент */}
          <div className="flex-shrink-0">
            <div style={{
              fontSize: '72px',
              fontWeight: 700,
              lineHeight: 1,
              color: '#C9A84C',
              letterSpacing: '-0.02em',
              textShadow: '0 0 30px rgba(201,168,76,0.3)',
            }}>15%</div>
            <div style={{
              color: '#E8C96A',
              fontSize: '10px',
              letterSpacing: '0.3em',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 400,
              textTransform: 'uppercase',
              marginTop: '2px',
            }}>СКИДКА</div>
          </div>

          {/* Разделитель */}
          <div style={{ width: '1px', alignSelf: 'stretch', background: 'rgba(201,168,76,0.25)', margin: '4px 0' }} />

          {/* Описание */}
          <div className="flex-1">
            <div style={{ color: '#F5EDD0', fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.3, marginBottom: '6px' }}>
              НА РАБОТЫ ПО ШИНОМОНТАЖУ
            </div>
            <div style={{ color: 'rgba(245,237,208,0.55)', fontSize: '10px', fontFamily: 'Roboto, sans-serif', fontWeight: 300, lineHeight: 1.5 }}>
              Балансировка • Монтаж / демонтаж<br />
              Подкачка • Ремонт
            </div>
          </div>
        </div>

        {/* Горизонтальный разделитель */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)', margin: '0 20px' }} />

        {/* Блок контактов */}
        <div className="px-5 py-4 grid grid-cols-2 gap-3">
          <div>
            <div style={{ color: 'rgba(201,168,76,0.5)', fontSize: '8px', letterSpacing: '0.25em', fontFamily: 'Roboto, sans-serif', fontWeight: 300, textTransform: 'uppercase', marginBottom: '3px' }}>Телефон</div>
            <div style={{ color: '#F5EDD0', fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em' }}>+7 (___) ___-__-__</div>
          </div>
          <div>
            <div style={{ color: 'rgba(201,168,76,0.5)', fontSize: '8px', letterSpacing: '0.25em', fontFamily: 'Roboto, sans-serif', fontWeight: 300, textTransform: 'uppercase', marginBottom: '3px' }}>Режим работы</div>
            <div style={{ color: '#F5EDD0', fontSize: '12px', fontWeight: 400, letterSpacing: '0.03em' }}>Пн–Вс: 08:00–21:00</div>
          </div>
          <div className="col-span-2">
            <div style={{ color: 'rgba(201,168,76,0.5)', fontSize: '8px', letterSpacing: '0.25em', fontFamily: 'Roboto, sans-serif', fontWeight: 300, textTransform: 'uppercase', marginBottom: '3px' }}>Адрес</div>
            <div style={{ color: '#F5EDD0', fontSize: '12px', fontWeight: 400, letterSpacing: '0.03em' }}>г. __________, ул. ________________</div>
          </div>
        </div>

        {/* Горизонтальный разделитель */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)', margin: '0 20px' }} />

        {/* Штрих-код */}
        <div className="px-5 py-4 flex flex-col items-center gap-2">
          {/* Имитация штрих-кода */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5px', height: '40px' }}>
            {[3,1,2,1,3,2,1,2,1,3,1,2,3,1,2,1,2,3,1,2,1,3,2,1,2,1,3,2,1,2,1,3,1,2,3,1,2,1,2,3,1,2,1,3].map((w, i) => (
              <div
                key={i}
                style={{
                  width: `${w}px`,
                  height: i % 7 === 0 ? '40px' : i % 3 === 0 ? '35px' : '32px',
                  background: '#C9A84C',
                  opacity: i % 5 === 0 ? 1 : i % 2 === 0 ? 0.85 : 0.6,
                }}
              />
            ))}
          </div>
          <div style={{ color: 'rgba(201,168,76,0.6)', fontSize: '8px', letterSpacing: '0.2em', fontFamily: 'Roboto, sans-serif', fontWeight: 300, textTransform: 'uppercase' }}>
            МЕСТО ДЛЯ ШТРИХ-КОДА
          </div>
        </div>

        {/* Горизонтальный разделитель */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)', margin: '0 20px' }} />

        {/* Нижняя строка */}
        <div className="px-5 py-3 flex items-center justify-between">
          <div style={{ color: 'rgba(245,237,208,0.3)', fontSize: '7px', fontFamily: 'Roboto, sans-serif', fontWeight: 300, letterSpacing: '0.12em', textTransform: 'uppercase', maxWidth: '220px', lineHeight: 1.4 }}>
            Действует только при предъявлении штрих-кода в мастерской. Скидка распространяется исключительно на виды работ. Не суммируется с другими акциями.
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: 'rgba(201,168,76,0.35)', fontSize: '7px', letterSpacing: '0.15em', fontFamily: 'Roboto, sans-serif', textTransform: 'uppercase' }}>Серия</div>
            <div style={{ color: 'rgba(201,168,76,0.5)', fontSize: '10px', letterSpacing: '0.1em', fontFamily: 'Roboto, sans-serif' }}>ВС-2024</div>
          </div>
        </div>

        {/* Нижняя золотая полоса */}
        <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent, #C9A84C, #E8C96A, #C9A84C, transparent)' }} />
      </div>

      {/* Декоративные уголки */}
      <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '16px', height: '16px', borderTop: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C' }} />
      <div style={{ position: 'absolute', top: '-1px', right: '-1px', width: '16px', height: '16px', borderTop: '2px solid #C9A84C', borderRight: '2px solid #C9A84C' }} />
      <div style={{ position: 'absolute', bottom: '-1px', left: '-1px', width: '16px', height: '16px', borderBottom: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C' }} />
      <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '16px', height: '16px', borderBottom: '2px solid #C9A84C', borderRight: '2px solid #C9A84C' }} />
    </div>
  );
};

export default DiscountCard;
