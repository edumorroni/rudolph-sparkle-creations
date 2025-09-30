# 🎄 Guia de Hospedagem Gratuita - Rudolph Shining

Este guia passo-a-passo ensina como hospedar gratuitamente seu site **www.rudolphshining.com.br** usando Lovable e configurar seu domínio personalizado.

---

## 📋 O que você precisa antes de começar

1. ✅ Conta no Lovable (onde o site foi criado)
2. ✅ Acesso ao painel de controle do seu domínio rudolphshining.com.br
3. ✅ 15-30 minutos para concluir a configuração

---

## 🚀 Passo 1: Publicar o Site no Lovable

### 1.1 Acessar o Projeto
1. Entre no Lovable: https://lovable.dev
2. Faça login na sua conta
3. Acesse seu projeto Rudolph Shining

### 1.2 Publicar o Site
1. No canto superior direito da tela, clique no botão **"Publish"** (Publicar)
2. O Lovable irá gerar automaticamente uma URL temporária, algo como:
   - `https://seu-projeto.lovable.app`
3. Aguarde alguns minutos até a publicação estar completa
4. Clique no link gerado para testar se o site está funcionando
5. ✅ Seu site já está online! Mas ainda com URL temporária do Lovable

---

## 🌐 Passo 2: Conectar seu Domínio Próprio

### 2.1 Acessar Configurações de Domínio no Lovable

1. No seu projeto no Lovable, clique no nome do projeto no canto superior esquerdo
2. Selecione **"Settings"** (Configurações)
3. No menu lateral, clique em **"Domains"** (Domínios)
4. Clique no botão **"Connect Domain"** (Conectar Domínio)

### 2.2 Adicionar seu Domínio

1. Digite seu domínio: `rudolphshining.com.br`
2. O Lovable irá exibir as configurações DNS que você precisa adicionar
3. **IMPORTANTE**: Deixe esta janela aberta, você vai precisar copiar estas informações

**As configurações geralmente são:**

```
Tipo: A
Nome: @
Valor: 185.158.133.1

Tipo: A  
Nome: www
Valor: 185.158.133.1
```

---

## ⚙️ Passo 3: Configurar DNS no Registro.br (ou seu provedor)

### 3.1 Acessar o Painel de Controle do Domínio

**Se seu domínio foi registrado no Registro.br:**

1. Acesse: https://registro.br
2. Faça login com sua conta
3. Vá em **"Meus Domínios"**
4. Clique em `rudolphshining.com.br`
5. Procure por **"Editar DNS"** ou **"Gerenciar DNS"**

**Se usar outro provedor (GoDaddy, HostGator, Hostinger, etc):**
- O processo é similar, procure por "DNS Management" ou "Gerenciar DNS"

### 3.2 Adicionar os Registros DNS

**⚠️ IMPORTANTE**: Antes de adicionar os novos registros, você precisa **remover** registros antigos que possam estar conflitando (do tipo A ou CNAME apontando para @ e www).

#### Para o Domínio Raiz (@):

1. Clique em **"Adicionar Registro"** ou **"Add Record"**
2. Preencha:
   - **Tipo**: A
   - **Nome/Host**: @ (ou deixe em branco, dependendo do provedor)
   - **Valor/Aponta para**: `185.158.133.1`
   - **TTL**: 3600 (ou deixe o padrão)
3. Salve

#### Para o Subdomínio WWW:

1. Clique em **"Adicionar Registro"** novamente
2. Preencha:
   - **Tipo**: A
   - **Nome/Host**: www
   - **Valor/Aponta para**: `185.158.133.1`
   - **TTL**: 3600 (ou deixe o padrão)
3. Salve

### 3.3 Salvar Alterações

1. Confirme todas as alterações no painel DNS
2. Anote o horário - isso será útil para acompanhar a propagação

---

## ⏰ Passo 4: Aguardar Propagação DNS

### 4.1 Entender o Tempo de Espera

- **Tempo normal**: 2 a 24 horas
- **Tempo máximo**: até 48 horas
- Durante esse período, algumas pessoas verão o novo site e outras não

### 4.2 Verificar Propagação

Use estas ferramentas para verificar se o DNS já propagou:

1. **DNSChecker.org**
   - Acesse: https://dnschecker.org
   - Digite: `rudolphshining.com.br`
   - Verifique se o IP `185.158.133.1` aparece em verde na maioria dos locais

2. **WhatsmyDNS.net**
   - Acesse: https://www.whatsmydns.net
   - Digite: `rudolphshining.com.br`
   - Verifique a propagação mundial

### 4.3 Teste Local (Opcional)

Para testar antes da propagação completa:
1. Abra o Prompt de Comando (Windows) ou Terminal (Mac/Linux)
2. Digite: `nslookup rudolphshining.com.br`
3. Se retornar o IP `185.158.133.1`, está funcionando!

---

## 🔒 Passo 5: Certificado SSL (HTTPS) Automático

### 5.1 Aguardar Certificado

- O Lovable instala **automaticamente** um certificado SSL gratuito
- Isso garante que seu site terá `https://` (cadeado verde)
- **Tempo**: Geralmente de 1 a 4 horas após o DNS propagar
- Você não precisa fazer nada, é totalmente automático!

### 5.2 Verificar HTTPS

1. Acesse: `https://www.rudolphshining.com.br`
2. Verifique se há um cadeado verde ao lado da URL
3. Clique no cadeado para ver os detalhes do certificado

---

## ✅ Checklist Final

Use esta checklist para garantir que tudo está funcionando:

- [ ] Site publicado no Lovable (URL temporária funcionando)
- [ ] Domínio adicionado no Lovable (em Settings > Domains)
- [ ] Registros DNS A configurados (@ e www)
- [ ] Registros antigos removidos (se houver conflito)
- [ ] DNS propagado (verificado em dnschecker.org)
- [ ] Site acessível via `http://rudolphshining.com.br`
- [ ] Site acessível via `http://www.rudolphshining.com.br`
- [ ] HTTPS funcionando (cadeado verde)
- [ ] Redirecionamento de www para domínio principal funcionando

---

## 🆘 Soluções para Problemas Comuns

### ❌ Problema: "Este site não pode ser acessado"

**Solução:**
1. Verifique se os registros DNS estão corretos
2. Aguarde mais tempo (pode levar até 48h)
3. Limpe o cache do navegador (Ctrl + F5)
4. Tente em outro navegador ou dispositivo

### ❌ Problema: "Conexão não é segura" ou "Não seguro"

**Solução:**
1. Aguarde a instalação automática do certificado SSL
2. Pode levar até 4 horas após o DNS propagar
3. Se após 24h ainda não funcionar, entre em contato com o suporte do Lovable

### ❌ Problema: Site não atualiza com as mudanças

**Solução:**
1. Limpe o cache do navegador (Ctrl + Shift + Delete)
2. Tente em modo anônimo/privado
3. Aguarde alguns minutos - pode ser cache do servidor

### ❌ Problema: DNS não propaga após 48 horas

**Solução:**
1. Verifique se há registros DNS conflitantes (CNAME, A antigos)
2. Confirme que salvou corretamente no painel DNS
3. Verifique se há algum registro CAA bloqueando certificados
4. Entre em contato com seu provedor de domínio

---

## 📞 Suporte e Recursos

### Lovable
- **Documentação**: https://docs.lovable.dev
- **Suporte**: Acesse o chat no próprio Lovable
- **Comunidade Discord**: https://discord.gg/lovable

### Registro.br
- **Central de Ajuda**: https://registro.br/ajuda
- **Telefone**: Veja em https://registro.br/contato

### Ferramentas Úteis
- **Verificar DNS**: https://dnschecker.org
- **Verificar SSL**: https://www.ssllabs.com/ssltest
- **Status Lovable**: https://status.lovable.dev

---

## 💡 Dicas Importantes

1. **Mantenha suas credenciais seguras**: Guarde login e senha do Lovable e do registro de domínio
2. **Backup**: O Lovable mantém versões anteriores do seu site automaticamente
3. **Atualizações**: Para atualizar o site, faça mudanças no Lovable e clique em "Publish" novamente
4. **E-mail profissional**: O domínio pode ser usado para criar emails como `contato@rudolphshining.com.br` (consulte seu provedor)
5. **Renovação**: Lembre-se de renovar seu domínio anualmente no Registro.br

---

## 🎉 Parabéns!

Se você seguiu todos os passos, seu site profissional **Rudolph Shining** agora está:

✅ Hospedado gratuitamente no Lovable
✅ Acessível pelo seu domínio próprio
✅ Protegido com certificado SSL (https)
✅ Pronto para receber visitantes e gerar negócios!

**Próximos passos sugeridos:**
1. Compartilhe o site nas redes sociais
2. Adicione o link na bio do Instagram
3. Inclua o site nos materiais de divulgação
4. Configure o Google Analytics para acompanhar visitantes (opcional)
5. Configure o Google Search Console para aparecer melhor nas buscas (opcional)

---

**Última atualização**: Janeiro 2025
**Criado para**: Rudolph Shining - Decoração Natalina Premium
