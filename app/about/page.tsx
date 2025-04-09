'use client';

import Navbar from '@/components/pages/navbar';
import Footer from '@/components/pages/footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 overflow-x-hidden">
        {/* Quem Somos */}
        <section className="space-y-6 break-words">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2c3e50]">Quem Somos</h1>
          <p className="text-base sm:text-lg">
            A <span className="text-[#3498db] font-semibold">TekBoom</span> é uma empresa brasileira especializada na venda de hardware,
            periféricos e soluções em tecnologia. Atuando no mercado desde 2017, nos posicionamos como referência para entusiastas,
            gamers e profissionais que buscam desempenho e confiabilidade.
          </p>
          <p className="text-base sm:text-lg">
            Nosso compromisso é oferecer produtos de marcas renomadas, com garantia, preços competitivos e uma experiência de compra
            rápida, segura e eficiente — do jeito que você encontra nas maiores lojas do segmento, como Pichau, Terabyte e Kabum.
          </p>
          <p className="text-base sm:text-lg">
            Contamos com uma equipe técnica preparada para orientar nossos clientes na escolha ideal, além de serviços como montagem
            personalizada, suporte pós-venda e curadoria de ofertas. Seja para montar seu PC gamer, turbinar seu setup ou renovar seu
            hardware profissional, a TekBoom é a escolha certa.
          </p>
        </section>

        {/* Missão e Visão */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 break-words">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow hover:-translate-y-1 transition">
            <h2 className="text-[#3498db] text-2xl font-semibold flex items-center gap-2">
              <span className="shrink-0">🎯</span> Nossa Missão
            </h2>
            <p className="mt-4 text-base sm:text-lg">
              Democratizar o acesso à tecnologia de alto desempenho, oferecendo soluções em hardware com transparência, qualidade e
              atendimento especializado.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow hover:-translate-y-1 transition">
            <h2 className="text-[#3498db] text-2xl font-semibold flex items-center gap-2">
              <span className="shrink-0">🔭</span> Nossa Visão
            </h2>
            <p className="mt-4 text-base sm:text-lg">
              Ser reconhecida como uma das maiores e mais confiáveis lojas de hardware do Brasil, destacando-se pela inovação, suporte e
              excelência na experiência do cliente.
            </p>
          </div>
        </section>

        {/* Equipe */}
        <section className="break-words">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#2c3e50] mb-8">Nossa Equipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Julio Cezar',
                role: 'CEO & Fundador',
                desc: 'Especialista em hardware com mais de 10 anos de experiência no setor tech.',
              },
              {
                name: 'João Guilherme',
                role: 'Diretor Comercial & Fundador',
                desc: 'Responsável por negociações estratégicas e relacionamento com fornecedores.',
              },
              {
                name: 'Rian Guedes',
                role: 'Faxineiro',
                desc: 'Foco total na limpeza.',
              },
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6 sm:p-8 text-center hover:-translate-y-1 transition">
                <h3 className="text-lg font-semibold text-[#2c3e50]">{member.name}</h3>
                <p className="text-[#3498db] font-medium">{member.role}</p>
                <p className="text-sm text-gray-600 mt-2">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
