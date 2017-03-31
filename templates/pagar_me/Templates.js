'use strict';

angular.module('navaskaManagerApp').run(['TemplateFactory', 'PlugaBoxService', 'AppService', function(TemplateFactory, PlugaBoxService, AppService) {
  var pbs = PlugaBoxService;
  TemplateFactory.add([
    {
      uuid: '230',
      templateUrl: 'pagar_me-granatum-230',
      app_source: AppService.getAppByIdWithoutPromise('pag_seguro'),
      app_target: AppService.getAppByIdWithoutPromise('granatum_financeiro'),
      filters: [[{field: 'status', condition: 'equal', value: 'paid'}]],
      mapper: [
      // include mapping
      ],
      trigger_key: 'new_transactions',
      action_key: 'add_recebimento',
      name: {pt_BR: 'Para cada fatura gerada no Pagar.me incluir uma conta a receber no Granatum Financeiro',
            en: 'For each invoice generated in Pagar.me includes an account receivable in Granatum Financeiro'},
      description: {
        why_integrate: [{pt_BR: 'O objetivo é ter o seu fluxo de caixa do Granatum sempre atualizado, sem precisar verificar e atualizar manualmente as contas a receber. ;)',
                        en: 'The goal is to have your Granatum cash flow always up to date without having to manually check and update accounts receivable.'}],
        how_it_works: [{pt_BR: ' Pluga fica de olho em cada nova fatura na sua conta da Pagar.me.',
                        en: 'Pluga keep an eye on each new invoice in your Pagar.me account.'},
                        {pt_BR: 'Quando uma nova fatura for criada na Pagar.me, nós incluiremos uma conta a receber no Granatum Financeiro.',
                        en: 'When a new invoice is created in Pagar.me, we will include an account receivable in the Granatum Financeiro'},
                        {pt_BR: 'Este dado será incluído automaticamente no Granatum e ficará disponível na lista de lançamentos.',
                        en: 'This data will be automatically included in the Granatum and will be available in the list of "lançamentos"'}]
      }
    }
  ]);
}]);
