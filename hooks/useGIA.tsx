import geriapi from '@/services/geriapi';
import { openAIMessages } from '@/services/gia';
import { AllocationType } from '@/types/allocation';
import { IDType } from '@/types/generic';
import { useSharedData } from './useSharedData';

export function useGIA(minimumNecessaryCoins = 4) {
  const { wallet, token } = useSharedData();

  const analyseApplication = async (
    applicationID: IDType,
    allocation: AllocationType,
    curriculum: string,
  ) => {
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

    /* const newAnalysedApplication = await geriapi.mutate(
      APPLICATION_ANALYSIS_ENDPOINT,
      {
        aiMessages: artificialIntelligencePrompt,
        application: { id: applicationID },
      },
      token,
    ); */

    const stop = true;

    console.log(token);

    if (stop) {
      geriapi.mutate(
        `wallets/${wallet?.id}`,
        { demoCoins: wallet?.demoCoins - minimumNecessaryCoins },
        token,
        'PUT',
      );
    }

    return stop;
  };

  return { analyseApplication };
}
