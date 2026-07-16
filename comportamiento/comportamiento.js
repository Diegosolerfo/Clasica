// FAQ Toggle
        document.querySelectorAll('.faq-question').forEach(item => {
            item.addEventListener('click', () => {
                const answer = item.nextElementSibling;
                const icon = item.querySelector('i:last-child');
                
                document.querySelectorAll('.faq-answer').forEach(a => {
                    if (a !== answer) a.classList.remove('active');
                });
                document.querySelectorAll('.faq-question i:last-child').forEach(i => {
                    if (i !== icon) i.classList.remove('active');
                });
                
                answer.classList.toggle('active');
                icon.classList.toggle('active');
            });
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Nav scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
            } else {
                nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
            }
        });