module.exports = [
    {
        question: 'Qual NICK do seu castelo?',
        name: 'Nome'
    },
    {
        question: 'Deseja abrir baús da bolsa?',
        name: 'Abrir baús'
    },
    {
        question: 'Curar tropas?',
        name: 'Curar tropas'
    },
    {
        question: 'Quanto tempo deixar bot desligado ate ele se conecta novamente?',
        name: 'Tempo off'
    },
    {
        question: 'Utilizar escudo? | Preferencia para os de 8hs, 24hs ou mais longo?',
        name: 'Escudo'
    },
    {
        question: 'Deseja envio automatico de produção de RSS para outro castelo? | se afirmativo, informe o castelo a receber e qual RSS enviar.',
        name: 'Farm RSS'
    },
    {
        question: 'Qual tipo de RSS coletar e quais níveis coletar?',
        name: 'Coleta'
    },
    {
        question: 'Deixar exército livre para ninhos ou envio de RSS?',
        name: 'Marcha'
    },
    {
        question: 'Caso deseje que entre em ninho quais os níveis que deseja.',
        name: 'Ninho'
    },
    {
        question: 'Mandar uma tropa ou full nos ninhos?',
        name: 'Tropa ninho'
    },
    {
        question: 'Deseja que apague alguma essência? | Abaixo de qual nível?',
        name: 'Essência'
    },
    {
        question: 'Deseja fazer troca no navio? | Tudo ou so RSS?',
        name: 'Navio'
    },
    {
        question: 'Conta tem Heróis free para evoluir? | Qual?',
        name: 'Heroi'
    },
    {
        question: 'Evoluir alguma construção ou deixar para fazer SPAM? | Qual?',
        name: 'Edificio'
    },
    {
        question: 'Qual árvore de pesquisa evoluir?',
        placeholder: 'Selecione a árvore',
        customId: 'Pesquisa',
        minValues: 1,
        maxValues: 1,
        options: [
            {
                label: 'Nenhuma',
                value: 'Nenhuma',
                description: 'Nenhuma',
                emoji: '🌻'
            },
            {
                label: 'Economia',
                value: 'Economia',
                description: 'Maranhão, Piauí, Ceará, Bahia, Pernambuco, Rio Grande do Norte, Sergipe, Alagoas e Paraíba.',
                emoji: '🥵'
            },
            {
                label: 'Defesa',
                value: 'Defesa',
                description: 'Mato Grosso, Goiás, Mato Grosso do Sul e Distrito Federal.',
                emoji: '💼'
            },
            {
                label: 'Militar',
                value: 'Militar',
                description: 'Minas Gerais, São Paulo, Rio de Janeiro e Espírito Santo.',
                emoji: '🧀'
            },
            {
                label: 'Caça',
                value: 'Caça',
                description: 'Paraná, Santa Catarina e Rio Grande do Sul.',
                emoji: '🥶'
            },
            {
                label: 'Evoluir Defesas',
                value: 'Evoluir Defesas',
                description: 'Paraná, Santa Catarina e Rio Grande do Sul.',
                emoji: '🥶'
            },
            {
                label: 'Atualizar Força Militar',
                value: 'Atualizar Força Militar',
                description: 'Paraná, Santa Catarina e Rio Grande do Sul.',
                emoji: '🥶'
            },
            {
                label: 'Liderança de Exercito',
                value: 'Liderança de Exercito',
                description: 'Paraná, Santa Catarina e Rio Grande do Sul.',
                emoji: '🥶'
            },
            {
                label: 'Comando Militar',
                value: 'Comando Militar',
                description: 'Paraná, Santa Catarina e Rio Grande do Sul.',
                emoji: '🥶'
            },
            {
                label: 'Familiares',
                value: 'Familiares',
                description: 'Paraná, Santa Catarina e Rio Grande do Sul.',
                emoji: '🥶'
            },
            {
                label: 'Batalha de Familiar',
                value: 'Batalha de Familiar',
                description: 'Paraná, Santa Catarina e Rio Grande do Sul.',
                emoji: '🥶'
            },
            {
                label: 'Selos',
                value: 'Selos',
                description: 'Paraná, Santa Catarina e Rio Grande do Sul.',
                emoji: '🥶'
            },
            {
                label: 'Batalhas Wonder',
                value: 'Batalhas Wonder',
                description: 'Paraná, Santa Catarina e Rio Grande do Sul.',
                emoji: '🥶'
            },
            {
                label: 'Equipamento',
                value: 'Equipamento',
                description: 'Paraná, Santa Catarina e Rio Grande do Sul.',
                emoji: '🥶'
            }
        ]
    },
    {
        question: 'Deseja fazer tropa?',
        placeholder: 'Selecione qual fazer.',
        customId: 'Tropa',
        minValues: 1,
        maxValues: 2,
        options: [
            {
                label: 'Não fazer',
                value: 'Não fazer',
                description: 'Não fazer',
                emoji: '🌻'
            },
            {
                label: 'T1',
                value: 'T1',
                description: 'Tropa de nivel 1',
                emoji: '🌻'
            },
            {
                label: 'T2',
                value: 'T2',
                description: 'Tropa de nivel 2',
                emoji: '🌻'
            },
            {
                label: 'T3',
                value: 'T3',
                description: 'Tropa de nivel 3',
                emoji: '🌻'
            },
            {
                label: 'T4',
                value: 'T4',
                description: 'Tropa de nivel 4',
                emoji: '🌻'
            }
        ]
    },
    {
        question: 'Qual falange? | Qual quantidade de tropa deseja fazer no total?',
        name: 'Falange'
    },
    {
        question: 'Quais nível de monstros caçar?',
        name: 'Monstro'
    },
    {
        question: 'Mandar no chat quando não conseguir finalizar monstro?',
        name: 'Aviso chat'
    },
    {
        question: 'Gerar relatório de caça para guilda? (somente R4 ou R5)',
        name: 'Relatório'
    },
    {
        question: 'FG, Qual pontuação mínima Por missão?',
        name: 'Idade'
    },
    {
        question: 'Qual NICK do castelo para avisar que pegou missão?',
        name: 'Idade'
    },
    {
        question: 'FG, Quais missões pegar?',
        name: 'Idade'
    },
    {
        question: 'FG, Apagar missões? Caso sim, abaixo de qual pontuação? Tem alguma especifica ?',
        name: 'Idade'
    },
    {
        question: 'FAMILIARES: Quais pactos fazer?',
        placeholder: 'Selecione qual fazer.',
        customId: 'Pacto',
        minValues: 1,
        maxValues: 1,
        options: [
            {
                label: 'Não fazer',
                value: 'Não fazer',
                description: 'Não fazer',
                emoji: '🌻'
            },
            {
                label: 'Pacto 1A',
                value: 'Pacto 1A',
                description: 'Tropa de nivel 1',
                emoji: '🌻'
            },
            {
                label: 'Pacto 1B',
                value: 'Pacto 1B',
                description: 'Tropa de nivel 2',
                emoji: '🌻'
            },
            {
                label: 'Pacto 2A',
                value: 'Pacto 2A',
                description: 'Tropa de nivel 3',
                emoji: '🌻'
            },
            {
                label: 'Pacto 2B',
                value: 'Pacto 2B',
                description: 'Tropa de nivel 4',
                emoji: '🌻'
            },
            {
                label: 'Pacto 3',
                value: 'Pacto 3',
                description: 'Tropa de nivel 3',
                emoji: '🌻'
            },
            {
                label: 'Pacto 4',
                value: 'Pacto 4',
                description: 'Tropa de nivel 3',
                emoji: '🌻'
            }
        ]
    },
    {
        question: 'Quais Familiares Treinar?',
        name: 'Familiar treino'
    },
    {
        question: 'Comandos no PV ou no chat da guilda?',
        name: 'Comando'
    },
    {
        question: 'Qual NICK dos castelos que vão comandar o Bot através de comandos?',
        name: 'Nick comando'
    },
     {
        question: 'Conta vai ser Porteiro? Caso sim, vai só aceitar ou vai mudar ranking também? ',
        name: 'Porteiro'
    }
]