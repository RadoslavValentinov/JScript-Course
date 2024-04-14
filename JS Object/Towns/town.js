        function tableTown (input) {
            let data = {};
        
            for (let i = 0; i < input.length; i++) {
                
                let [town,latitude,longitude] = input[i].split(' | ');
        
                data[town] = [latitude,longitude]; 
            }
            
            for (let key in data) {
                console.log(`{ town: '${key}', latitude: '${Number(data[key][0]).toFixed(2)}', longitude: '${Number(data[key][1]).toFixed(2)}' }`);
            }
        }
tableTown(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);