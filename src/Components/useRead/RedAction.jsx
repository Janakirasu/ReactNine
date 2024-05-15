
export default function ReducerAction(state,action){
console.log(state);
console.log(action)



    switch (action.type) {
    case 'ADD':{
        return state+2
    }
    case 'SUB':{
        return state-2
    }
    case 'MULT':{
        return state*2
    }
    case 'DIV':{
        return state/2
    }

    default:{
        return state
    }
  
}


}