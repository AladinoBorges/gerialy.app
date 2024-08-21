export const openAIMessages = {
  applicationAnalysis(allocation: string, applicantCurriculum: string) {
    const formatResponseType = `{
        "positionCompatibility": número de 0.00 à 100.00, 
        "automatedAnalysisFromIA": a análise feita do meu currículo em relação a vaga no formato de tópicos stringyfied HTML contendo os requisitos que possuo e os que não possuo e a explicação comprovativa da existência ou não desses requisitos no meu currículo,
        "analysisConclusion": string,
        "emailCoverLetter": string,
      }`;

    const messages = [
      'você é um assistente especializado em recrutamento e seleção que apenas response no formato JSON. Não responta em texto normal ou do tipo markdown, evite qualquer caractere que não é um JSON válido.',
      `as opções devem coincidir com a língua desse SCHEMA JSON: "${formatResponseType}" mas mantenha as chaves do objeto com os nomes fornecidos. os nomes técnicos presentes nos dados do currículo do candidato e da vaga também precisam de ser mantidos conforme o original presente no conteúdo fornecido.`,
      'se existe algum campo em inglês ou noutra língua diferente da do português, mantenha a mesma na língua original fornecida.',
      'retifique ortográfica e gramaticalmente os erros presentes tanto nos dados da vaga, quanto nos dados do candidato.',
    ];

    const serializedMessages = messages?.map((messageItem) => ({
      role: 'system',
      content: messageItem,
    }));

    serializedMessages.push({
      role: 'assistent',
      content: `hey gpt. analise por favor os dados da vaga e do meu currículo de candidato providenciados a seguir.
        - vaga: "${allocation}";
        - candidato: "${applicantCurriculum}".

        depois de analisar, calcule o percentual de compatibilidade do meu currículo com a vaga, de 0.00 à 100.00 e guarde esse número no formato número decimal de apenas duas casas decimais.

        feito isso, quero que digas se a vaga faz sentido para a mim, incluindo primeiro os pontos que tenho domínio e de seguida os pontos que não tenho domínio.

        de seguida crie uma carta de apresentação curta para eu poder enviar a minha candidatura por email.

        para finalizar, com todos as etapas anteriores concluídas, retorne a análise feita e os dados gerados no formato JSON que deve seguir estritamente o seguinte SCHEMA:

        {
          "positionCompatibility": o meu percentual de compatibilidade com a vaga no formato de número decimal de duas casas decimais,
          "automatedAnalysisFromIA": "um HMTL no formato STRING da análise feita do meu currículo em relação aos requisitos da vaga, em formato de tópicos como "requisitos da vaga não mencionados no currículo" e "suas habilidades e experiências relevantes para a vaga". esses tópicos devem conter as listas de cada um dos requisitos da vaga e o resultado daquele requisito em relação ao meu currículo",
          "analysisConclusion": "a conclusão que chegaste que diz se a vaga faz ou não sentido para mim",
          "emailCoverLetter": "a carta de apresentação para ser enviada por email"
        }
      `,
    });

    return serializedMessages;
  },
};
