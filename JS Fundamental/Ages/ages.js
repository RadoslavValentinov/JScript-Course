function agePerson (age) {
    
    let covertAge = Number(age);

    if (covertAge >= 0 && covertAge <= 2 ) {
        console.log('baby');
    }else if(covertAge >= 3 && covertAge <= 13){
        console.log('child');
    }else if(covertAge >=14 && covertAge <= 19){
        console.log('teenager');
    }else if(covertAge >=20 && covertAge <= 65){
        console.log('adult');
    }else if(covertAge >= 66){
        console.log('elder');
    }else{
        console.log('out of bounds');
    }

}

agePerson(20);

agePerson(0);

agePerson(50);

agePerson(18);