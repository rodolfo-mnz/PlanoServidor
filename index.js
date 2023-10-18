const links = document.querySelectorAll('.header__nav a');
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                // Remove a classe 'selecionado' de todos os links
                links.forEach(l => {
                    l.classList.remove('selecionado');
                });

                // Adiciona a classe 'selecionado' apenas ao link clicado
                event.currentTarget.classList.add('selecionado');
            });
        });