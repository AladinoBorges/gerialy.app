import geriapi from '@/services/geriapi';
import { openAIMessages } from '@/services/gia';
import { AllocationType } from '@/types/allocation';
import { IDType } from '@/types/generic';
import { useQueryClient } from '@tanstack/react-query';
import { useSharedData } from './useSharedData';

export function useGIA(minimumNecessaryCoins = 4) {
  const { wallet } = useSharedData();
  const queryClient = useQueryClient();

  const analyseApplication = async (
    applicationID: IDType,
    allocation: AllocationType,
    curriculum: string,
    token: string,
    coinsToReduce = 0,
  ) => {
    const currentCoins = wallet?.demoCoins - coinsToReduce;

    if (!!coinsToReduce) {
      await geriapi.mutate(
        `wallets/${wallet?.id}`,
        { demoCoins: wallet?.demoCoins - coinsToReduce },
        token,
        'PUT',
      );

      queryClient.invalidateQueries({ queryKey: ['fullUser'] });
    }

    if (wallet?.demoCoins < minimumNecessaryCoins) {
      throw new Error(
        `são necessários pelo menos ${minimumNecessaryCoins} cŕeditos para analisar a candidatura. recarregue a sua conta para continuar!`,
      );
    }

    if (!curriculum?.trim || !applicationID || !allocation?.description?.trim() || !token?.trim()) {
      throw new Error(
        `um dos dados obrigatórios não foi informado. verifique os dados.\ncurriculum: ${curriculum};\napplicationID: ${applicationID};\ndescription: ${allocation?.description};\ntoken:${token}`,
      );
    }

    const APPLICATION_ANALYSIS_ENDPOINT = `gia/application-analysis`;

    const artificialIntelligencePrompt = openAIMessages.applicationAnalysis(
      `${allocation?.name}\n${allocation?.description}`,
      curriculum,
    );

    const newAnalysedApplication = await geriapi.mutate(
      APPLICATION_ANALYSIS_ENDPOINT,
      {
        aiMessages: artificialIntelligencePrompt,
        application: { id: applicationID },
      },
      token,
    );

    if (!!newAnalysedApplication?.id) {
      await geriapi.mutate(
        `wallets/${wallet?.id}`,
        { demoCoins: currentCoins - minimumNecessaryCoins },
        token,
        'PUT',
      );

      queryClient.invalidateQueries({ queryKey: ['fullUser'] });
    }

    return newAnalysedApplication;
  };

  return { analyseApplication };
}
