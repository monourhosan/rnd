export const services = [
  {
    id: "social-research", title: "Social research", short: "Understand lived experience, community priorities, and the forces shaping social change.",
    description: "Social decisions sit within everyday routines, relationships, and institutions. We frame research around how people experience those contexts: what they value, what stands in their way, and how a proposed change might affect them. A study can examine community needs, perceptions of a program, or barriers to participation. The design should make room for differences within a community, rather than treating it as a single voice. We bring the question, method, and intended use of the evidence together, so the resulting account can support a practical decision while respecting the complexity of people's lives.",
    question: "What makes an essential service easier to access for some households than for others?",
    methods: ["Community interviews", "Household surveys", "Stakeholder mapping"], outputs: ["Context and needs assessment", "Audience-specific recommendations"],
  },
  {
    id: "market-consumer-research", title: "Market & consumer research", short: "Explore what people need, how they choose, and where markets can serve them better.",
    description: "Understanding a market starts with understanding the decisions people make within it. Price, trust, availability, habit, and social expectations can all shape a purchase or a service experience. A well-scoped study can explore a category, test a proposition, or map the journey from first awareness to continued use. We combine questions about behavior with questions about meaning, giving attention to the difference between what people say and what their circumstances allow. The aim is to help organizations evaluate options and identify useful next steps, with clear boundaries around what the evidence can establish.",
    question: "Why might someone try a new digital service but choose not to keep using it?",
    methods: ["Usage and attitude studies", "Customer journey interviews", "Concept exploration"], outputs: ["Consumer needs framework", "Opportunity and journey maps"],
  },
  {
    id: "monitoring-evaluation-learning", title: "Monitoring, evaluation & learning", short: "Ask what is changing, why it matters, and what a program can learn along the way.",
    description: "Evaluation is most useful when the learning question is clear before data collection begins. We help frame what a program is trying to change, which signals can be observed, and what other factors may influence those changes. Possible engagements include a baseline, an implementation review, or a learning-focused evaluation. Methods should fit the program's stage, resources, and ethical responsibilities. We distinguish evidence of change from evidence of attribution, and make uncertainty explicit. Findings can then support program adaptation, a conversation about assumptions, or a more focused plan for what needs to be understood next.",
    question: "Which parts of a program are reaching the intended groups, and where does participation become difficult?",
    methods: ["Theory of change review", "Indicator design", "Process and outcome evaluation"], outputs: ["Learning framework", "Evaluation report and learning workshop"],
  },
  {
    id: "surveys-fieldwork", title: "Surveys & fieldwork", short: "Build dependable evidence through careful instruments and respectful data collection.",
    description: "A questionnaire is only one part of a reliable survey. The population definition, sampling approach, translation, pilot, and field supervision all affect what the results will mean. We plan these elements together and make the tradeoffs visible. Fieldwork may involve household, consumer, enterprise, or stakeholder research, depending on the question and agreed scope. Instruments should use language participants understand and should request only necessary information. Quality checks should be planned before collection and reviewed as work progresses. Deliverables make coverage, missing data, and important limitations visible so users can interpret the dataset responsibly.",
    question: "How can a survey capture different experiences without excluding people who are harder to reach?",
    methods: ["Questionnaire design and piloting", "Sampling plans", "Field supervision and validation"], outputs: ["Documented dataset and codebook", "Fieldwork and quality report"],
  },
  {
    id: "qualitative-participatory", title: "Qualitative & participatory research", short: "Listen beyond the first answer and make space for perspectives that numbers can miss.",
    description: "Some questions need conversation, observation, and time to understand the language people use for their own experiences. Qualitative research explores those meanings, including unexpected explanations and differences between settings. Participatory activities can also invite people to help identify priorities, map barriers, or interpret a proposed solution. We select formats around the topic and participants, rather than assuming a focus group is always appropriate. Privacy, power relationships, and the right to decline are central considerations. Analysis looks for patterns and exceptions while keeping a clear distinction between a rich account of experience and a statistically representative estimate.",
    question: "How do women running small businesses describe the opportunities and constraints in their market?",
    methods: ["In-depth interviews", "Focus groups", "Participatory mapping"], outputs: ["Thematic analysis", "Experience maps and anonymized insight narratives"],
  },
  {
    id: "data-insight-communication", title: "Data analysis & insight communication", short: "Turn complex information into a clear story, with its uncertainty kept in view.",
    description: "Useful analysis connects the evidence to a decision without hiding the steps in between. We can help organize data, examine patterns, compare perspectives, and explain what a finding supports. Quantitative and qualitative material may answer different parts of the same question; bringing them together can make an interpretation stronger or reveal where it remains uncertain. Communication should fit the reader, whether a program team needs an action discussion or leadership needs a concise decision brief. We favor readable visualizations, documented definitions, and proportionate recommendations over a large report that obscures the central question.",
    question: "Which findings change the decision, and which require further investigation?",
    methods: ["Descriptive and comparative analysis", "Qualitative coding", "Evidence synthesis"], outputs: ["Decision briefs and visual reports", "Findings presentations and discussion guides"],
  },
];
