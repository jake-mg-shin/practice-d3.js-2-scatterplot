const width = 600,
    height = 600,
    padding = 50;

const data = regionData.filter(mustHaveKeys);

const xScale = d3.scaleLinear()
                .domain(d3.extent(data, d => d.adultLiteracyRate))
                .range([padding, width - padding]);

const yScale = d3.scaleLinear()
                .domain(d3.extent(data, d => d.subscribersPer100))
                .range([height - padding, padding]);

mustHaveKeys = obj => {
    const keys = [
        'subscribersPer100',
        'adultLiteracyRate',
        'urbanPopulationRate',
        'medianAge'
    ];

    for(let i = 0; i < keys.length; i++){
        if(obj[key[i]] === null){
            return false;
        }
        return true;
    };
};