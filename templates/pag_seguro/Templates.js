[
  {
    app_source: 'pag_seguro',
    app_target: 'granatum_financeiro',
    filters: [[{field: 'status', condition: 'equal', value: 'paid'}]],
    mapper: [
    // include mapping
    ],
    trigger_key: 'new_transactions',
    action_key: 'add_recebimento',
    name: {pt_BR: 'A cada pagamento aprovado na PagSeguro incluir um recebimento no Granatum Financeiro',
          en: 'For every approved payment on PagSeguro, generate an accounts receivable on Granatum Financeiro'},
    description: {
      why_integrate: [{pt_BR: 'O objetivo é ter o seu fluxo de caixa do Granatum sempre atualizado, sem precisar verificar e atualizar manualmente quem pagou e quem não pagou. ;)',
                      en: 'The goal is to have your Granatum cash flow always up to date without having to manually check and update who paid and who did not pay.'}],
      how_it_works: [{pt_BR: ' Pluga fica de olho em cada novo pagamento aprovado na sua conta da PagSeguro.',
                      en: 'Pluga keeps an eye on every new approved payment on your PagSeguro account.'},
                      {pt_BR: 'Quando houver um novo pagamento aprovado, nós incluiremos um recebimento no Granatum Financeiro.',
                      en: 'When a new payment is approved, we will include a receipt in the Granatum Financeiro.'},
                      {pt_BR: 'Este dado será incluído automaticamente no Granatum e ficará disponível na lista de lançamentos.',
                      en: 'This data will be automatically included in the Granatum and will be available in the list of "lançamentos"'}]
    }
  }
]
