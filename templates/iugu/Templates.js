[{
  app_source: 'iugu',
  app_target: 'granatum_financeiro',
  filters: [[{field: 'status', condition: 'equal', value: 'pending'}]],
  mapper: [
    {"key": "data_vencimento", "content": "{{due_date}}"},
    {"key": "descricao", "content": "{{items.descriptions}}"},
    {"key": "valor", "content": "{{total}}"},
    {"key": "cliente_email", "content": "{{email}}"},
  ],
  trigger_key: 'new_transactions',
  action_key: 'add_recebimento',
  name: {pt_BR: 'Para cada fatura gerada na Iugu incluir uma conta a receber no Granatum Financeiro',
        en: 'For each invoice generated in Iugu includes an account receivable in Granatum Financeiro'},
  description: {
    why_integrate: [{pt_BR: 'O objetivo é ter o seu fluxo de caixa do Granatum sempre atualizado, sem precisar verificar e atualizar manualmente as contas a receber. ;)',
                    en: 'The goal is to have your Granatum cash flow always up to date without having to manually check and update accounts receivable.'}],
    how_it_works: [{pt_BR: 'Pluga fica de olho em cada nova fatura na sua conta da iugu.',
                    en: 'Pluga keep an eye on each new invoice in your iugu account.'},
                    {pt_BR: 'Quando uma nova fatura for criada na Iugu, nós incluiremos uma conta a receber no Granatum Financeiro.',
                    en: 'When a new invoice is created in Iugu, we will include an account receivable in the Granatum Financeiro'},
                    {pt_BR: 'Este dado será incluído automaticamente no Granatum e ficará disponível na lista de lançamentos.',
                    en: 'This data will be automatically included in the Granatum and will be available in the list of "lançamentos".'}]
  }
},
{
  app_source: 'iugu',
  app_target: 'granatum_financeiro',
  filters: [[{field: 'status', condition: 'equal', value: 'paid'}]],
  mapper: [
    {"key": "data_vencimento", "content": "{{due_date}}"},
    {"key": "data_vencimento", "content": "{{paid_at}}"},
    {"key": "descricao", "content": "{{items.descriptions}}"},
    {"key": "valor", "content": "{{paid_cents_decimal}}"},
    {"key": "cliente_email", "content": "{{payer.email}}"},
    {"key": "cliente_nome", "content": "{{payer.name}}"},
  ],
  trigger_key: 'new_transactions',
  action_key: 'add_recebimento',
  name: {pt_BR: 'A cada pagamento aprovado na Iugu incluir um recebimento no Granatum Financeiro',
        en: 'For every approved payment on iugu, generate an accounts receivable on Granatum Financeiro'},
  description: {
    why_integrate: [{pt_BR: 'O objetivo é ter o seu fluxo de caixa do Granatum sempre atualizado, sem precisar verificar e atualizar manualmente quem pagou e quem não pagou. ;)',
                    en: 'The goal is to have your Granatum cash flow always up to date without having to manually check and update who paid and who did not pay.'}],
    how_it_works: [{pt_BR: 'Pluga fica de olho em cada novo pagamento aprovado na sua conta da iugu.',
                    en: 'Pluga keeps an eye on every new approved payment on your iugu account.'},
                    {pt_BR: 'Quando houver um novo pagamento aprovado, nós incluiremos um recebimento no Granatum Financeiro.',
                    en: 'When a new payment is approved, we will include a receipt in the Granatum Financeiro.'},
                    {pt_BR: 'Este dado será incluído automaticamente no Granatum e ficará disponível na lista de lançamentos.',
                    en: 'This data will be automatically included in the Granatum and will be available in the list of "lançamentos".'}]
  }
}]
