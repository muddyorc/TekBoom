export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-10 mt-10">
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Info da empresa */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-4">TekBoom</h3>
          <p className="text-sm text-zinc-300 mb-4">
            Especialistas em tecnologia. Produtos de qualidade, garantia real e suporte que você pode confiar.
          </p>
          <div className="flex gap-3">
            <a href="https://facebook.com/tekboom" target="_blank" className="hover:text-orange-400 transition">Facebook</a>
            <a href="https://instagram.com/tekboom" target="_blank" className="hover:text-orange-400 transition">Instagram</a>
            <a href="https://youtube.com/tekboom" target="_blank" className="hover:text-orange-400 transition">YouTube</a>
          </div>
        </div>

        {/* Links Úteis */}
        <div>
          <h3 className="text-xl font-bold mb-4">Institucional</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li><a href="/sobre" className="hover:text-orange-400">Quem Somos</a></li>
            <li><a href="/politica-de-privacidade" className="hover:text-orange-400">Política de Privacidade</a></li>
            <li><a href="/termos" className="hover:text-orange-400">Termos de Uso</a></li>
            <li><a href="/ajuda" className="hover:text-orange-400">Central de Ajuda</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-xl font-bold mb-4">Fale Conosco</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>📞 (11) 4002-8922</li>
            <li>✉️ suporte@tekboom.com.br</li>
            <li>🏠 Rua das Inovações, 321 - Centro, São Paulo - SP</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Assine nossa Newsletter</h3>
          <p className="text-sm text-zinc-300 mb-3">
            Fique por dentro das novidades, lançamentos e ofertas exclusivas.
          </p>
          <form>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full p-2 rounded mb-2 text-black"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold transition"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-zinc-400">
        &copy; 2025 TekBoom Tecnologia. Todos os direitos reservados.
      </div>
    </footer>
  );
}
