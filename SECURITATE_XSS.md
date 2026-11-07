# Protecția XSS - versiunea curentă

- CSP restrictiv în paginile HTML principale: scripturi doar locale, fără inline, fără obiecte/pluginuri; formularele pot fi trimise doar la FormSubmit.
- Fișier `_headers` pentru găzduire Netlify: CSP, HSTS, anti-framing, nosniff, referrer și permissions policy. Alte gazde necesită configurare echivalentă.
- Nu se folosește `innerHTML` în scriptul principal. Erorile formularului sunt inserate cu `textContent`.
- Honeypot ascuns prin atribut HTML, fără stil inline blocat de CSP.
- Validarea browserului rămâne suplimentară, nu substituie filtrarea/escaparea la destinație.

## Limitări
- CSP prin meta nu poate seta `frame-ancestors` și nu înlocuiește antetele HTTP; `_headers` se aplică numai dacă platforma de găzduire îl suportă.
- Nu am verificat livrarea mesajelor, CAPTCHA, funcționarea pe găzduire sau securitatea procesării FormSubmit.
- La publicare verificați consola browserului pentru încălcări CSP, funcționarea formularului și antetele HTTP.
- Folderele istorice `Cabinet_psiho` și `v2` sunt păstrate ca în arhiva inițială, dar NU trebuie publicate ca pagini active. Preferabil publicați doar fișierele principale din directorul rădăcină, excluzând backupurile.
- Nu introduceți ulterior `innerHTML` cu date neîncredere sau scripturi externe fără revizuirea politicii.
