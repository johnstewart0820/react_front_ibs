const chartType = [
    {
      name: 'linear-chart',
      polish: 'Liniowy'
    },
    {
      name: 'column-chart',
      polish: 'Kolumnowy'
    },
    {
      name: 'map',
      polish: 'Mapy'
    }];
  const aggragateType = [
    {
      name: 'sector',
      polish: 'Sektorowy'
    },
    {
      name: 'province',
      polish: 'Wojewódzki'
    },
    {
      name: 'district',
      polish: 'Powiatowy'
    },
    {
      name: 'professed',
      polish: 'Zawodowy'
    },
    {
      name: 'sector-professed',
      polish: 'Wojewódzko-zawodowy'
    },
    {
      name: 'district-professed',
      polish: 'Powiatowo-zawodowy'
    }];
  const aggragateSubType = [
    {
      name: 'demand',
      polish: 'Popyt na pracę'
    },
    {
      name: 'supply',
      polish: 'Podaż pracy'
    },
    {
      name: 'gap',
      polish: 'Luka'
    },
  ];
 
  const showChartsMode = [
    {
      name: 'together',
      polish: 'Pokaż wyniki razem'
    },
    {
      name: 'separated',
      polish: 'Pokaż wyniki osobno'
    },
  ];

export { 
    chartType, 
    aggragateType, 
    aggragateSubType, 
    showChartsMode
};
