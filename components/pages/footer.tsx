export default function Footer() {
    return (
      <footer className="bg-zinc-900 text-white py-10 mt-10">
        <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          {/* LojaTech Info */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">LojaTech</h3>
            <p className="text-sm text-zinc-300 mb-4">
              A melhor loja de tecnologia do Brasil. Produtos com garantia e os melhores preços do mercado.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-orange-400 transition">FB</a>
              <a href="#" className="hover:text-orange-400 transition">IG</a>
              <a href="#" className="hover:text-orange-400 transition">TW</a>
              <a href="#" className="hover:text-orange-400 transition">YT</a>
            </div>
          </div>
  
          {/* Links Úteis */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><a href="#" className="hover:text-orange-400">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-orange-400">Termos e Condições</a></li>
              <li><a href="#" className="hover:text-orange-400">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-orange-400">FAQ</a></li>
            </ul>
          </div>
  
          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>📞 (11) 9999-9999</li>
              <li>✉️ contato@lojatech.com</li>
              <li>🏠 Av. Paulista, 1000 - São Paulo, SP</li>
            </ul>
          </div>
  
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-sm text-zinc-300 mb-3">
              Receba nossas novidades e promoções exclusivas.
            </p>
            <form>
              <input
                type="email"
                placeholder="Seu email"
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
          &copy; 2025 LojaTech. Todos os direitos reservados.
        </div>
      </footer>
    );
  }
  